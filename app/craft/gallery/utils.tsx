export interface UnsplashImage {
  id: string;
  alt_description: string | null;
  urls: {
    small: string;
    regular: string;
    full: string;

    [key: string]: string;
  };
}

async function fetchUnsplashImages(totalCount = 100): Promise<UnsplashImage[]> {
  const accessKey = "hJ-9mHjz40Lk4EfmFt_kzbFqKF1QMAu4-KvXVSH21Ts";
  const maxPerRequest = 30;
  const allImages: UnsplashImage[] = [];

  try {
    while (allImages.length < totalCount) {
      const needed = Math.min(maxPerRequest, totalCount - allImages.length);
      const response = await fetch(
        `https://api.unsplash.com/photos/random?count=${needed}&client_id=${accessKey}`
      );

      if (!response.ok) {
        throw new Error(`Unsplash API error: ${response.statusText}`);
      }

      // The response will be an array of images
      const data: UnsplashImage[] = await response.json();
      allImages.push(...data);
    }
    return allImages;
  } catch (error) {
    console.error("Error fetching images from Unsplash:", error);
    throw error;
  }
}

export { fetchUnsplashImages };
