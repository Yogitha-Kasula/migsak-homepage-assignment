import { createHmac, timingSafeEqual } from "crypto";

export const COOKIE_NAME = "admin_session";

function secret(): string {
    const s = process.env.ADMIN_SESSION_SECRET;
    if (!s) throw new Error("Missing ADMIN_SESSION_SECRET in .env.local");
    return s;
}

// The value stored in the cookie: a signature only the server can create.
export function sessionToken(): string {
    return createHmac("sha256", secret()).update("migsak-admin").digest("hex");
}

export function isValidToken(token: string | undefined): boolean {
    if (!token) return false;
    const a = Buffer.from(token);
    const b = Buffer.from(sessionToken());
    return a.length === b.length && timingSafeEqual(a, b);
}

// Compares hashes so the check takes the same time for any input.
export function passwordMatches(input: string): boolean {
    const expected = process.env.ADMIN_PASSWORD;
    if (!expected) return false;
    const a = createHmac("sha256", "cmp").update(input).digest();
    const b = createHmac("sha256", "cmp").update(expected).digest();
    return timingSafeEqual(a, b);
}