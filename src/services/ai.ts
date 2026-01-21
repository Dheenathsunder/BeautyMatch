export interface ProductOption {
  brand: string;
  productName: string;
  shade: string;
}

export interface RecommendationCategory {
  category: string;
  options: ProductOption[];
  reason: string;
}

export interface RecommendationResponse {
  recommendations: RecommendationCategory[];
  advice: string;
}

export const getSkinAnalysis = async (
  skinType: string,
  skinTone: string,
  concerns: string[]
): Promise<RecommendationResponse> => {
  try {
    const response = await fetch("http://localhost:8000/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        skinType,
        skinTone,
        concerns,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Server error: ${errorText}`);
    }

    const data = await response.json();
    return data as RecommendationResponse;
  } catch (error) {
    console.error("Error fetching recommendations:", error);
    throw new Error("Failed to generate recommendations. Please check if the backend server is running.");
  }
};
