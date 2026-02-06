import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combina classes Tailwind com segurança e sem duplicar estilos.
 * Exemplo:
 *   cn("p-2 text-white", condition && "bg-teal-400")
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
