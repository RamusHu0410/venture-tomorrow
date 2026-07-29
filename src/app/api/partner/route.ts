import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { contactName, email, organization, role, partnerType, message } = body;

  if (!contactName || !email || !organization) {
    return NextResponse.json(
      { error: "Contact name, email, and organization are required." },
      { status: 400 }
    );
  }

  const inquiry = await prisma.partnerInquiry.create({
    data: { contactName, email, organization, role, partnerType, message },
  });

  return NextResponse.json({ id: inquiry.id }, { status: 201 });
}
