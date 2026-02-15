// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
] as const;

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const res = NextResponse.next();
  const isDocumentRequest = req.headers.get("sec-fetch-dest") === "document";

  if (isDocumentRequest) {
    res.headers.set("Content-Type", "text/html; charset=utf-8");
  }

  let touched = false;
  UTM_KEYS.forEach((key) => {
    const val = url.searchParams.get(key);
    if (val) {
      res.cookies.set(key, val, { path: "/", maxAge: 60 * 60 * 24 * 30 }); // 30 dias
      touched = true;
    }
  });

  return res;
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|fonts|images|api).*)"], // intercepta páginas comuns
};
