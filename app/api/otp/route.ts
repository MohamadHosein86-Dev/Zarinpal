import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey123";

export async function POST(req: Request) {
  const { phone, CodeOtp  } = await req.json();

  try {
    if (!phone || !CodeOtp) {
      return NextResponse.json({ error: "phone و CodeOtp الزامی است" }, { status: 400 });
    }

    const user = await prisma.user.findUnique({ where: { phone } });
    if (!user) {
      return NextResponse.json({ error: "کاربر یافت نشد" }, { status: 404 });
    }


    // بررسی OTP
    if (!user.otpCode || !user.otpExpiresAt) {
      return NextResponse.json({ error: "کدی برای این کاربر ثبت نشده" }, { status: 400 });
    }

    const now = new Date();
    if (user.otpCode !== CodeOtp) {
      return NextResponse.json({ error: "کد نادرست است" }, { status: 401 });
    }
    if (user.otpExpiresAt < now) {
      return NextResponse.json({ error: "کد منقضی شده است" }, { status: 410 });
    }

    // ساخت توکن
    const token = jwt.sign({ userId: user.id, role: user.role }, JWT_SECRET, { expiresIn: "1h" });

    // بروزرسانی کاربر
    const updated = await prisma.user.update({
      where: { phone },
      data: { isPhoneVerified: true, otpCode: null, otpExpiresAt: null },
    });

    // تنظیم کوکی (دقیقاً مثل Express)
    const response = NextResponse.json({
      success: true,
      data: {
        id: updated.id,
        firstName: updated.firstName,
        lastName: updated.lastName,
        businessType: updated.businessType,
        businessName: updated.businessName,
        phone: updated.phone,
        email: updated.email,
        role: updated.role,
      },
    });

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      maxAge: 60 * 60, // 1 hour
    });

    return response;
  } catch (error) {
    console.error("[OTP] Server error", error);
    return NextResponse.json({ error: "خطا در سرور" }, { status: 500 });
  }
}
