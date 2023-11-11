import { User } from "@/models/todo";
import dbConnect from "@/lib/dbconnect";

export async function POST(request: Request) {
  await dbConnect();
  const req = await request.json();
  await User.create(req);

  return Response.json({ msg: "successful" });
}

export async function GET() {
  await dbConnect();
  const response = await User.find();

  return Response.json(response);
}
