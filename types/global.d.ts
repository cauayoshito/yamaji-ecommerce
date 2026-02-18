export {};

type FbqCommand = "init" | "track" | "trackCustom";
type FbqFn = (
  command: FbqCommand,
  eventOrPixelId: string,
  params?: Record<string, string | number | boolean>
) => void;

declare global {
  interface Window {
    plausible?: (
      eventName: string,
      options?: { props?: Record<string, unknown> }
    ) => void;
    gtag?: (...args: unknown[]) => void;
    fbq?: FbqFn;
    _fbq?: FbqFn;
    dataLayer?: Array<Record<string, unknown>>;
  }
}
