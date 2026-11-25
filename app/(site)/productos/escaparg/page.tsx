import type { Metadata } from "next";
import { EscapargProductPage } from "../../../../components/EscapargProductPage";
import { productAvailability } from "../../../../lib/release";
import { site } from "../../../../lib/site";

const description = `Escape rooms cooperativas online para 2–4 jugadores. El Experimento y El Contacto. ${productAvailability.escaparg}.`;

export const metadata: Metadata = {
  title: "EscapARG",
  description,
  alternates: { canonical: "/productos/escaparg" },
  openGraph: { title: `EscapARG · ${site.name}`, description, url: "/productos/escaparg", images: [{ url: "/productos/escaparg/el-experimento-portada.webp", width: 1440, height: 810, alt: "Arte promocional de El Experimento · EscapARG" }] },
  twitter: { card: "summary_large_image", images: ["/productos/escaparg/el-experimento-portada.webp"], title: `EscapARG · ${site.name}`, description }
};

/** Presenta EscapARG dentro del sitio corporativo. */
export default function ProductPage() {
  return <EscapargProductPage />;
}
