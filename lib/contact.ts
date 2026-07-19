export const WHATSAPP_NUMBER = "5571992258349";
export const WHATSAPP_DISPLAY_NUMBER = "+55 71 99225-8349";

export function createWhatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const GENERAL_WHATSAPP_LINK = createWhatsAppLink(
  "Olá, conheci o Ecossistema Yamaji pelo site e quero entender qual solução faz sentido para o meu negócio."
);
