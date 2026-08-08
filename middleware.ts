import { NextRequest, NextResponse } from "next/server";

const publicFile = /\.[^/]+$/;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/_next") || pathname.startsWith("/api") || publicFile.test(pathname)) {
    return NextResponse.next();
  }

  if (pathname === "/en" || pathname.startsWith("/en/") || pathname === "/zh" || pathname.startsWith("/zh/")) {
    const headers = new Headers(request.headers);
    headers.set("x-ovbel-locale", pathname === "/zh" || pathname.startsWith("/zh/") ? "zh" : "en");
    return NextResponse.next({ request: { headers } });
  }

  const url = request.nextUrl.clone();
  url.pathname = `/en${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url, 307);
}

export const config = { matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"] };
