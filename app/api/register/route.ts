import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { prisma } from "@/app/lib/prisma";
import { Prisma } from "@prisma/client";

export async function POST(req: Request) {
  try {
    const { businessName, businessType, lastName, firstName, email, phone, password, role = "USER" } = await req.json();

    if (!businessName || !businessType || !lastName || !firstName || !email || !phone || !password) {
      return NextResponse.json({ error: "تمامی فیلدها الزامی هستند" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        firstName,
        lastName,
        phone,
        email,
        businessType,
        businessName,
        password: hashedPassword,
        role,
      },
    });

    return NextResponse.json({
      success: true,
      message: "ثبت‌نام موفق. لطفا شماره تلفن را برای دریافت کد OTP ارسال کنید.",
    });
  } catch (error: unknown) {
  if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2002") {
    return NextResponse.json({ error: "این ایمیل یا شماره تلفن قبلاً ثبت شده است" }, { status: 400 });
  }
  return NextResponse.json({ error: "خطا در سرور" }, { status: 500 });
}

}
