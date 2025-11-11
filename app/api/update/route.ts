import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";
import type { Role } from "@prisma/client"; // 👈 اضافه شده برای enum role

type AllowedUserFields =
  | "firstName"
  | "lastName"
  | "email"
  | "phone"
  | "businessName"
  | "businessType"
  | "role";

export async function PATCH(req: Request) {
  try {
    const { userId, field, value }: {
      userId: string;
      field: AllowedUserFields;
      value: string;
    } = await req.json();

    if (!userId || !field || value === undefined) {
      return NextResponse.json(
        { error: "شناسه کاربر، فیلد و مقدار الزامی است." },
        { status: 400 }
      );
    }

    const allowedFields: AllowedUserFields[] = [
      "firstName",
      "lastName",
      "email",
      "phone",
      "businessName",
      "businessType",
      "role",
    ];

    if (!allowedFields.includes(field)) {
      return NextResponse.json(
        { error: "فیلد درخواستی قابل ویرایش نیست." },
        { status: 400 }
      );
    }

    // 👇 مقدار role باید به enum معتبر تبدیل بشه
    const data =
      field === "role"
        ? { role: value as Role }
        : { [field]: value };

    const updatedUser = await prisma.user.update({
      where: { id: Number(userId) },
      data,
    });

    return NextResponse.json({
      success: true,
      message: `فیلد ${field} با موفقیت بروزرسانی شد.`,
      user: updatedUser,
    });
  } catch (error: unknown) {
    console.error("❌ خطا در ویرایش کاربر:", error);

    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ error: "خطای ناشناخته در سرور" }, { status: 500 });
  }
}
