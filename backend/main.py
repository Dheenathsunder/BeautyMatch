import os
import json
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from groq import Groq
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

# Allow CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, specify the frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize Groq client
groq_api_key = os.getenv("GROQ_API_KEY")
if not groq_api_key:
    print("WARNING: GROQ_API_KEY not found in environment variables.")

client = Groq(api_key=groq_api_key)

class SkinProfile(BaseModel):
    skinType: str
    skinTone: str
    concerns: list[str] = []

@app.post("/analyze")
async def analyze_skin(profile: SkinProfile):
    try:
        prompt = f"""
        You are a professional celebrity makeup artist and dermatologist. 
        Analyze the following user profile and provide highly personalized makeup product recommendations.

        User Profile:
        - Skin Type: {profile.skinType}
        - Skin Tone: {profile.skinTone}
        - Skin Concerns: {", ".join(profile.concerns) if profile.concerns else "None"}

        Task:
        1. For EACH of the 4 categories (Foundation, Concealer, Blush, Lipstick), recommend exactly 3 different high-quality product options.
        2. For each option, provide:
           - Brand
           - Product Name
           - Specific Shade Name (CRITICAL: Must match the user's skin tone exactly)
        3. Provide a brief 1-sentence reason why this specific set of products was chosen.
        4. Provide one general paragraph of advice tailored to their concerns.

        Output Format:
        Return strictly valid JSON with the following structure:
        {{
          "recommendations": [
            {{
              "category": "Foundation",
              "options": [
                {{
                  "brand": "Brand A",
                  "productName": "Product A",
                  "shade": "Shade A"
                }},
                {{
                   "brand": "Brand B",
                   "productName": "Product B",
                   "shade": "Shade B"
                }},
                {{
                   "brand": "Brand C",
                   "productName": "Product C",
                   "shade": "Shade C"
                }}
              ],
              "reason": "Explanation for these foundation choices..."
            }},
            ... (repeat for Concealer, Blush, Lipstick)
          ],
          "advice": "General advice paragraph..."
        }}
        """

        completion = client.chat.completions.create(
            model="meta-llama/llama-4-maverick-17b-128e-instruct",
            messages=[
                {
                    "role": "user",
                    "content": prompt
                }
            ],
            temperature=0.7,
            max_completion_tokens=1024,
            top_p=1,
            stream=False,
            stop=None,
            response_format={"type": "json_object"}
        )

        response_content = completion.choices[0].message.content
        return json.loads(response_content)

    except Exception as e:
        print(f"Error processing request: {e}")
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
