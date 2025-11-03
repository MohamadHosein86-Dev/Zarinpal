import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";
import generateOTP from "@/app/lib/generateOtp";

export async function POST(req: Request) {
  const { phone } = await req.json();
  try {
    const user = await prisma.user.findUnique({ where: { phone } });
    if (!user) {
      return NextResponse.json({ error: "کاربر یافت نشد" }, { status: 404 });
    }

    const otp = generateOTP();
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000);

    await prisma.user.update({
      where: { phone },
      data: { otpCode: otp, otpExpiresAt: expiresAt },
    });

    return NextResponse.json({ success: true, message: "کد ارسال شد", CodeOtp: otp });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "خطا در سرور" }, { status: 500 });
  }
}
