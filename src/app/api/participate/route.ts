import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { fullName, email, school, gradeOrYear, city, interest, message } = body;

  if (!fullName || !email) {
    return NextResponse.json(
      { error: "Full name and email are required." },
      { status: 400 }
    );
  }

  const application = await prisma.participateApplication.create({
    data: { fullName, email, school, gradeOrYear, city, interest, message },
  });

  return NextResponse.json({ id: application.id }, { status: 201 });
}
