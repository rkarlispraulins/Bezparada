/**
 * Legal-entity ("juridiskās personas") flow.
 *
 * Visitors who start on the legal-entity page must come back to it after a
 * form submission or a WhatsApp hand-off, instead of being dropped on the
 * private-person home page.
 *
 * Context travels two ways: the visitor is on the page itself, or they were
 * sent to a shared page (/kontakti, /whatsapp-open, /paldies) with ?t=jur.
 */

export const JUR_PATH = "/juridiskas-personas-maksatnespeja";
export const JUR_QUERY = "t=jur";

/** True when this visitor is somewhere in the legal-entity flow. */
export function isJurContext(): boolean {
  if (typeof window === "undefined") return false;
  const { pathname, search } = window.location;
  return (
    pathname === JUR_PATH ||
    new URLSearchParams(search).get("t") === "jur"
  );
}

/** The page a visitor should land on when a hand-off finishes or falls through. */
export function jurReturnPath(): string {
  return isJurContext() ? JUR_PATH : "/";
}

/** Adds ?t=jur to a path so the next page keeps the context. */
export function withJurContext(path: string, isJur = isJurContext()): string {
  if (!isJur) return path;
  return path.includes("?") ? `${path}&${JUR_QUERY}` : `${path}?${JUR_QUERY}`;
}
