import { User } from "@/models/todo";
import dbConnect from "@/lib/dbconnect";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  await dbConnect();
  const id = params.id;
  const response = await User.findByIdAndDelete(id);

  return Response.json(response);
}
