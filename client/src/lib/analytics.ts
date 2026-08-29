// Google Ads conversion tracking.
// The global gtag() function is loaded in client/index.html.

/** Google Ads conversion labels (the `send_to` values from Google Ads → Conversions). */
export const CONVERSIONS = {
  leadForm: "AW-17296725922/5KfFCJix--kcEKKv3LdA",
  whatsapp: "AW-17296725922/9BMNCPT2-ukcEKKv3LdA",
} as const;

interface ReportOptions {
  /** Runs after the conversion is reported, or immediately if gtag is unavailable. */
  onComplete?: () => void;
}

/**
 * Fire a Google Ads conversion. Safe to call when gtag is missing (blocked or not yet
 * loaded): it simply runs onComplete so user navigation is never blocked.
 */
export function reportConversion(sendTo: string, options: ReportOptions = {}): void {
  const { onComplete } = options;
  const gtag = typeof window !== "undefined" ? (window as any).gtag : undefined;

  if (typeof gtag !== "function") {
    onComplete?.();
    return;
  }

  if (onComplete) {
    let fired = false;
    const run = () => {
      if (fired) return;
      fired = true;
      onComplete();
    };
    // Fallback so a slow/missing callback never strands the user.
    window.setTimeout(run, 1000);
    gtag("event", "conversion", { send_to: sendTo, event_callback: run });
  } else {
    gtag("event", "conversion", { send_to: sendTo });
  }
}
