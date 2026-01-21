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
    // Use relative path for Vercel; Vite proxy or Vercel rewrite handles the rest
    const apiUrl = import.meta.env.VITE_API_URL || "/api";
    const response = await fetch(`${apiUrl}/analyze`, {
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
