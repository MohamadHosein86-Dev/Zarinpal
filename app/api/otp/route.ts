import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey123";

export async function POST(req: Request) {
  const { phone, CodeOtp } = await req.json();

  try {
    if (!phone || !CodeOtp) {
      return NextResponse.json({ error: "phone و CodeOtp الزامی است" }, { status: 400 });
    }

    const user = await prisma.user.findUnique({ where: { phone } });
    if (!user) {
      return NextResponse.json({ error: "کاربر یافت نشد" }, { status: 404 });
    }

    if (user.isPhoneVerified) {
      const token = jwt.sign({ userId: user.id, role: user.role }, JWT_SECRET, { expiresIn: "1h" });
      return NextResponse.json({ success: true, message: "قبلاً تایید شده است", token });
    }

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

    const token = jwt.sign({ userId: user.id, role: user.role }, JWT_SECRET, { expiresIn: "1h" });

    const updated = await prisma.user.update({
      where: { phone },
      data: { isPhoneVerified: true, otpCode: null, otpExpiresAt: null },
    });

    return NextResponse.json({ success: true, data: { ...updated, token } });
  } catch (error) {
    console.error("[OTP] Server error", error);
    return NextResponse.json({ error: "خطا در سرور" }, { status: 500 });
  }
}
