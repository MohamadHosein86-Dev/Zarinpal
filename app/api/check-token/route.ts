import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const cookieHeader = req.headers.get("cookie") || "";

  const hasUserToken = cookieHeader.includes("token=");
  const hasAdminToken = cookieHeader.includes("admin_token=");

    if (hasAdminToken) {
    return new NextResponse("Token-Admin", {
      status: 200,
      headers: { "Content-Type": "text/plain" },
    });
  }
  if (hasUserToken) {
    return new NextResponse("Token-User", {
      status: 200,
      headers: { "Content-Type": "text/plain" },
    });
  }

  return new NextResponse("No-Token", {
    status: 200,
    headers: { "Content-Type": "text/plain" },
  });
}
