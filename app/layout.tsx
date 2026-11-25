import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/nunito";
import "@fontsource/poppins/latin-400.css";
import "@fontsource/poppins/latin-500.css";
import "@fontsource/poppins/latin-600.css";
import "@fontsource/poppins/latin-700.css";
import { site, siteOrigin } from "../lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin()),
  title: {
    default: `${site.name} — Desarrollo de software a medida`,
    template: `%s · ${site.name}`
  },
  description: site.description,
  icons: { apple: "/che-mutuo/mark.png" },
  openGraph: {
    title: `${site.name} — Desarrollo de software a medida`,
    description: site.description,
    locale: "es_AR",
    type: "website",
    siteName: site.name,
    images: [{ url: "/che-mutuo/social.png", width: 1200, height: 630, alt: site.name }]
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Desarrollo de software a medida`,
    description: site.description,
    images: ["/che-mutuo/social.png"]
  }
};

/** Layout raíz: tipografías y estilos globales. */
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-AR">
      <body>
        {children}
      </body>
    </html>
  );
}
