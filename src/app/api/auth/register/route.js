import connect from "@/utils/db";
import UserModel from "../../../../models/UserModel";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { name, email, password } = await request.json();

  await connect();
  const hashedPassword = await bcrypt.hash(password, 6);
  const newUser = new UserModel({
    name,
    email,
    password: hashedPassword,
  });
  try {
    await newUser.save();
    return new NextResponse("User has been registered", { status: 201 });
  } catch (error) {
    return new NextResponse(error.message, {
      status: 500,
    });
  }
};
