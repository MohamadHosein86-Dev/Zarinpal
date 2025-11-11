import { NextRequest, NextResponse } from "next/server";

export default function middleware(req:NextRequest) {
  const userPage = "/user" ;
  const adminPage = "/admin" ;
  const authPages  = ["/login","/register"] ;
  const {pathname}=req.nextUrl ;

  const protectedUser = pathname.includes(userPage);
  const protectedAdmin = pathname.includes(adminPage);
  const protectedAuthRout  = authPages.some((res)=>pathname.includes(res))

  const token = req.cookies.get("token")?.value;
  const admintoken = req.cookies.get("admin_token")?.value;

  if(!protectedUser && !protectedAuthRout && !protectedAdmin){
    return NextResponse.next();
  } 
  if(protectedAuthRout){
    if(token || admintoken)
   return NextResponse.redirect(new URL("/",req.url))
  }
  if(protectedUser ){
    if(!token) return NextResponse.redirect(new URL("/login",req.url))
  }
  if(protectedAdmin){
    if(!admintoken) return NextResponse.redirect(new URL("/login",req.url))
  }
}

export const config = {
  matcher: ["/admin/:path*", "/user/:path*", "/login", "/register"],
};
