import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { prisma } from "@/app/lib/prisma";

const JWT_SECRET = process.env.JWT_SECRET!;

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "ایمیل و رمز عبور الزامی است" },
        { status: 400 }
      );
    }

    // 🔹 حالت ۱: ادمین
    const ADMIN_EMAIL = "admin@gmail.com";
    const ADMIN_PASSWORD = "admin1234";

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      const adminToken = jwt.sign(
        { role: "ADMIN", email },
        JWT_SECRET,
        { expiresIn: "30m" }
      );

      const res = NextResponse.json({
        success: true,
        role: "ADMIN",
        message: "ورود ادمین موفق بود",
      });

      res.cookies.set("admin_token", adminToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
        sameSite: "lax",
      });

      return res;
    }

    // 🔹 حالت ۲: یوزر عادی
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return NextResponse.json({ error: "کاربر یافت نشد" }, { status: 404 });
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return NextResponse.json(
        { error: "رمز عبور نادرست است" },
        { status: 401 }
      );
    }

    // ساخت JWT برای یوزر
    const userToken = jwt.sign(
      {
        userId: user.id, // 👈 حتماً userId بگذار چون /api/me اینو می‌خونه
        email: user.email,
        role: user.role,
      },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    const res = NextResponse.json({
      success: true,
      role: user.role,
      message: "ورود کاربر موفق بود",
    });

    res.cookies.set("token", userToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60, // ۷ روز
    });

    return res;
  } catch (error) {
    console.error("❌ خطا در ورود:", error);
    return NextResponse.json({ error: "خطا در سرور" }, { status: 500 });
  }
}
