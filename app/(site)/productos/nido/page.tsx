import type { Metadata } from "next";
import { ProductDetailPage } from "../../../../components/ProductDetailPage";
import { getProduct } from "../../../../lib/products";
import { productAvailability } from "../../../../lib/release";

export const metadata: Metadata = {
  title: "Nido",
  description:
    `Organizá compras, gastos, rutinas y cuidados con las personas de tu hogar. ${productAvailability.nido}.`,
  alternates: { canonical: "/productos/nido" },
  openGraph: {
    title: "Nido · Tu hogar y tu espacio personal",
    description: "Un hogar en común. Un espacio para vos. Conocé Nido, la app de organización del hogar y bienestar personal.",
    url: "/productos/nido",
    images: [{ url: "/productos/nido/hogar-conceptual.webp", width: 1440, height: 810, alt: "Arte conceptual de Nido con una mesa compartida y un rincón de lectura." }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Nido · Tu hogar y tu espacio personal",
    description: `Organización compartida y un lugar para vos. ${productAvailability.nido}.`,
    images: ["/productos/nido/hogar-conceptual.webp"]
  }
};

/** Ficha pública de Nido. */
export default function NidoProductPage() {
  const product = getProduct("nido");
  if (!product) {
    return null;
  }
  return (
    <ProductDetailPage product={product} />
  );
}
