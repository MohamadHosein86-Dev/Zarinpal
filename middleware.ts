import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

export default async function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  console.log("All cookies:", req.cookies);


  const protectedRoutes = ["/admin", "/user"];
  const isProtected = protectedRoutes.some((route) =>
    req.nextUrl.pathname.startsWith(route)
  );

  if (!isProtected) {
    return NextResponse.next();
  }

  if (!token) {
    console.log("No token, redirecting to login");
    return NextResponse.redirect(new URL("/login", req.url));
  }

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const { payload } = await jwtVerify(token, secret);
    console.log("User data:", payload);
    return NextResponse.next();
  } catch (err) {
    console.error("Invalid token:", err);
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: ["/admin/:path*", "/user/:path*"],
};
