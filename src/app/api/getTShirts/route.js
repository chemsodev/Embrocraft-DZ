import { NextResponse } from "next/server";
export async function GET(request) {
  const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env;
  const urlParams = new URL(request.url).searchParams;
  const nextCursor = urlParams.get("next_cursor");
  const limit = 10; // Number of images per request

  if (!CLOUDINARY_CLOUD_NAME || !CLOUDINARY_API_KEY || !CLOUDINARY_API_SECRET) {
    console.error("Cloudinary environment variables are missing.");
    return NextResponse.json({ message: "Server misconfiguration" }, { status: 500 });
  }

  try {
    let url = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/resources/image/upload?max_results=${limit}`;

    // add next_cursor if it's valid (not null or undefined)
    if (nextCursor && nextCursor !== "null") {
      url += `&next_cursor=${nextCursor}`;
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // Timeout after 10 seconds

    console.log("Cloudinary Request URL:", url); // Debugging the API call

    const response = await fetch(url, {
      headers: {
        Authorization: `Basic ${Buffer.from(`${CLOUDINARY_API_KEY}:${CLOUDINARY_API_SECRET}`).toString("base64")}`,
      },
      method: "GET",
      signal: controller.signal,
    });

    clearTimeout(timeoutId); // Clear the timeout after fetch

    if (!response.ok) {
      console.error("Cloudinary API error:", response.status, await response.text());
      return NextResponse.json({ message: "Failed to fetch images from Cloudinary" }, { status: response.status });
    }

    const data = await response.json();

    console.log("Cloudinary Response Data:", data); // Debugging fetched data

    const resources = data.resources.map((item) => ({
      public_id: item.public_id,
      secure_url: item.secure_url,
    }));

    return NextResponse.json({ images: resources, next_cursor: data.next_cursor });
  } catch (error) {
    if (error.name === "AbortError") {
      console.error("Fetch request timed out.");
    } else {
      console.error("An error occurred:", error);
    }
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
