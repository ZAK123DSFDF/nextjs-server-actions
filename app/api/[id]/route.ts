import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  console.log(id);
  return NextResponse.json({
    id,
    description: "this is id of description",
  });
}
