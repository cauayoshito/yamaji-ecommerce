export const WHATSAPP_PHONE = "5571992258349";

export function buildWhatsAppLink(message: string) {
  const phone = WHATSAPP_PHONE;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export const DEFAULT_LOJA_MESSAGE =
  "Olá! Tenho interesse em criar minha loja online com a Yamaji Studio.";

export const LOJA_WHATSAPP = buildWhatsAppLink(DEFAULT_LOJA_MESSAGE);

export const planMessage = (planName: string) =>
  buildWhatsAppLink(
    `Olá! Tenho interesse no plano ${planName} da Yamaji Studio. Pode me passar mais detalhes?`
  );
