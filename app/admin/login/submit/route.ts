import { createHash, timingSafeEqual } from "node:crypto";
import { NextResponse } from "next/server";
import {
  ADMIN_SESSION_COOKIE, ADMIN_SESSION_SECONDS, adminCredentials,
  adminSessionCookieOptions, createAdminSession
} from "../../../../lib/adminSession";

/** Restringe el destino posterior al ingreso a rutas del panel en el mismo sitio. */
function sanitizeNextPath(raw: string, origin: string) {
  try {
    const destination = new URL(raw, origin);
    if (destination.origin === origin && /^\/admin(?:\/|$)/.test(destination.pathname)) {
      return destination.pathname + destination.search;
    }
  } catch {
    return "/admin";
  }
  return "/admin";
}

/** Compara credenciales con digests de longitud fija. */
function credentialMatches(value: string, expected: string) {
  const actualDigest = createHash("sha256").update(value).digest();
  const expectedDigest = createHash("sha256").update(expected).digest();
  return timingSafeEqual(actualDigest, expectedDigest);
}

/** Valida las credenciales y emite la sesión del panel. */
export async function POST(request: Request) {
  const formData = await request.formData();
  const username = String(formData.get("username") ?? "");
  const password = String(formData.get("password") ?? "");
  const origin = new URL(request.url).origin;
  const nextPath = sanitizeNextPath(String(formData.get("next") ?? ""), origin);
  const credentials = adminCredentials();
  const validUser = credentials ? credentialMatches(username, credentials.username) : false;
  const validPassword = credentials ? credentialMatches(password, credentials.password) : false;
  const session = validUser && validPassword ? await createAdminSession() : null;

  if (!session) {
    const errorUrl = new URL("/admin/login", origin);
    errorUrl.searchParams.set("next", nextPath);
    errorUrl.searchParams.set("error", "1");
    return NextResponse.redirect(errorUrl, 303);
  }

  const response = NextResponse.redirect(new URL(nextPath, origin), 303);
  response.cookies.set(ADMIN_SESSION_COOKIE, session, {
    ...adminSessionCookieOptions,
    maxAge: ADMIN_SESSION_SECONDS
  });
  return response;
}
