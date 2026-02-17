const getFbq = () =>
  typeof window !== "undefined" && typeof window.fbq === "function"
    ? window.fbq
    : null;

export const trackPageView = () => {
  const fbq = getFbq();
  if (!fbq) {
    return;
  }

  fbq("track", "PageView");
};

export const trackLead = () => {
  const fbq = getFbq();
  if (!fbq) {
    return;
  }

  fbq("track", "Lead");
};
