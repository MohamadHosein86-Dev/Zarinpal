import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { prisma } from "@/app/lib/prisma";
import { signToken } from "@/app/lib/auth";

export async function POST(req: Request) {
  try {
    const { phone, password } = await req.json();

    const user = await prisma.user.findUnique({ where: { phone } });
    if (!user) {
      return NextResponse.json({ error: "کاربر یافت نشد" }, { status: 404 });
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return NextResponse.json({ error: "رمز عبور نادرست" }, { status: 401 });
    }

    const token = signToken({ userId: user.id, role: user.role });

    return NextResponse.json({
      success: true,
      data: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        businessType: user.businessType,
        businessName: user.businessName,
        phone: user.phone,
        email: user.email,
        role: user.role,
        token,
      },
    });
  } catch (error) {
    console.error("خطا در ورود:", error);
    return NextResponse.json({ error: "خطا در سرور" }, { status: 500 });
  }
}
