// app/api/lead/route.ts
import { NextResponse } from "next/server";

const ALLOWED = new Set([
  "http://localhost:3000",
  "https://yamajistudio.com.br",
]);

export async function OPTIONS(req: Request) {
  const origin = req.headers.get("origin") || "";
  const allowed = ALLOWED.has(origin) ? origin : "https://yamajistudio.com.br";
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": allowed,
      Vary: "Origin",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

export async function POST(req: Request) {
  const origin = req.headers.get("origin") || "";
  const allowed = ALLOWED.has(origin) ? origin : "https://yamajistudio.com.br";

  try {
    const body = await req.json();
    // 👇 aqui você pode salvar onde quiser; por enquanto só loga
    console.log("Lead recebido:", body);

    // (OPCIONAL) encaminhar para Apps Script:
    const webhook = process.env.WEBHOOK_GOOGLESHEET; // se quiser proxy
    if (webhook) {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    }

    return NextResponse.json(
      { ok: true },
      {
        headers: {
          "Access-Control-Allow-Origin": allowed,
          Vary: "Origin",
          "Content-Type": "application/json",
        },
      }
    );
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, error: err?.message || "Erro inesperado" },
      {
        status: 400,
        headers: {
          "Access-Control-Allow-Origin": allowed,
          Vary: "Origin",
          "Content-Type": "application/json",
        },
      }
    );
  }
}
