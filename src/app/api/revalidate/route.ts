import { revalidatePath } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const secret = req.nextUrl.searchParams.get("secret");

    if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
      return NextResponse.json({ message: "Invalid revalidation secret" }, { status: 401 });
    }

    const body = await req.json();
    const slug = body?.slug?.current || body?.slug;

    if (slug) {
      revalidatePath(`/blog/${slug}`);
      revalidatePath("/blog");
      revalidatePath("/");
      return NextResponse.json({
        revalidated: true,
        message: `Revalidated /blog/${slug} and archives`,
      });
    }

    revalidatePath("/", "layout");
    return NextResponse.json({ revalidated: true, message: "Revalidated full site layout" });
  } catch (err: unknown) {
    return NextResponse.json(
      { message: "Error revalidating", error: err instanceof Error ? err.message : String(err) },
      { status: 500 }
    );
  }
}
