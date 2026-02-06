import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();

  console.log("Lead recebido:", data);

  // aqui você pode salvar no banco, mandar pro Google Sheets, etc.
  return NextResponse.json({ ok: true });
}
