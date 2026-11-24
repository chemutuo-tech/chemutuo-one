export const ADMIN_SESSION_COOKIE = "jondrea_admin_session_v1";
export const ADMIN_SESSION_SECONDS = 8 * 60 * 60;

const encoder = new TextEncoder();
const tokenPattern = /^(\d{10,12})\.([a-f0-9]{32})\.([a-f0-9]{64})$/;

/** Lee las credenciales obligatorias del panel. */
export function adminCredentials() {
  const username = process.env.ADMIN_USER;
  const password = process.env.ADMIN_PASSWORD;
  return username?.trim() && password?.trim() ? { username, password } : null;
}

/** Deriva la clave HMAC de las credenciales privadas del panel. */
async function sessionKey() {
  const credentials = adminCredentials();
  if (!credentials) return null;
  const material = JSON.stringify(["jondrea-admin-session-v2", credentials.username, credentials.password]);
  const key = await crypto.subtle.digest("SHA-256", encoder.encode(material));
  return crypto.subtle.importKey("raw", key, { name: "HMAC", hash: "SHA-256" }, false, ["sign", "verify"]);
}

/** Codifica bytes como hexadecimal para el valor de la cookie. */
function hex(bytes: Uint8Array) {
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("");
}

/** Emite una sesión firmada con un identificador aleatorio y vencimiento. */
export async function createAdminSession() {
  const key = await sessionKey();
  if (!key) return null;
  const expires = Math.floor(Date.now() / 1000) + ADMIN_SESSION_SECONDS;
  const nonce = hex(crypto.getRandomValues(new Uint8Array(16)));
  const payload = `${expires}.${nonce}`;
  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(payload));
  return `${payload}.${hex(new Uint8Array(signature))}`;
}

/** Comprueba formato, vencimiento y firma antes de aceptar una sesión. */
export async function verifyAdminSession(token: string | undefined) {
  const match = token?.match(tokenPattern);
  if (!match) return false;
  const [, expires, nonce, signature] = match;
  const now = Math.floor(Date.now() / 1000);
  const expiration = Number(expires);
  if (expiration <= now || expiration > now + ADMIN_SESSION_SECONDS) return false;
  const key = await sessionKey();
  if (!key) return false;
  const bytes = Uint8Array.from(signature.match(/../g) ?? [], (byte) => parseInt(byte, 16));
  return crypto.subtle.verify("HMAC", key, bytes, encoder.encode(`${expires}.${nonce}`));
}

/** Opciones compartidas para emitir y retirar la cookie bajo /admin. */
export const adminSessionCookieOptions = {
  httpOnly: true,
  sameSite: "lax",
  secure: process.env.NODE_ENV === "production",
  path: "/admin"
} as const;
