import { NextResponse } from "next/server";
import connect from "@/utils/db";
import PostModel from "@/models/PostModel";

export const GET = async (request, { params }) => {
  const { id } = params;
  try {
    await connect();
    const post = await PostModel.findById(id);
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new NextResponse("Database error", { status: 500 });
  }
};
export const DELETE = async (request, { params }) => {
  const { id } = params;
  try {
    await connect();
    await PostModel.findByIdAndDelete(id);
    return new NextResponse("Post Deleted", { status: 200 });
  } catch (error) {
    return new NextResponse("Database error", { status: 500 });
  }
};
