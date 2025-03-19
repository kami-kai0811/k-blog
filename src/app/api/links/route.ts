// app/api/link/route.ts
import { NextResponse } from "next/server";
import { load } from "cheerio";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");
  console.log(url);
  if (!url) {
    return NextResponse.json(
      { success: 0, message: "Missing url parameter" },
      { status: 400 },
    );
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch URL: ${response.statusText}`);
    }
    const html: string = await response.text();
    // isDocument を false にして fragment モードでロード

    const $ = load(html);
    const title = $("title").text();
    const description =
      $('meta[property="og:description"]').attr("content") ??
      $('meta[name="description"]').attr("content") ??
      "";
    const image = $('meta[property="og:image"]').attr("content") ?? "";
    const meta = {
      title,
      description,
      image: image ? { url: image } : {},
    };
    return NextResponse.json({
      success: 1,
      link: url,
      meta,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(null, {
      status: 500,
    });
  }
}
