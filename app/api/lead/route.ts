import { NextResponse } from "next/server";

const ALLOWED = new Set([
  "http://localhost:3000",
  "https://yamajistudio.com.br",
]);

function corsHeaders(origin: string) {
  const allowed = ALLOWED.has(origin) ? origin : "https://yamajistudio.com.br";

  return {
    "Access-Control-Allow-Origin": allowed,
    Vary: "Origin",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json",
  };
}

export async function OPTIONS(req: Request) {
  const origin = req.headers.get("origin") || "";

  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders(origin),
  });
}

export async function POST(req: Request) {
  const origin = req.headers.get("origin") || "";

  try {
    const body = await req.json();
    const payloadString = JSON.stringify(body);
    const payloadSize = payloadString.length;
    const contextLength =
      typeof body?.context === "string" ? body.context.length : 0;

    console.log("[lead] payload meta", {
      payloadSize,
      contextLength,
      keys: Object.keys(body || {}),
    });

    const webhook = process.env.WEBHOOK_GOOGLESHEET;
    if (webhook) {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: payloadString,
      });
    }

    return NextResponse.json({ ok: true }, { headers: corsHeaders(origin) });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Erro inesperado no envio";

    return NextResponse.json(
      { ok: false, error: message },
      {
        status: 400,
        headers: corsHeaders(origin),
      }
    );
  }
}
