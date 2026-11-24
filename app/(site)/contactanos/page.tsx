import type { Metadata } from "next";
import { CopyEmail } from "../../../components/CopyEmail";
import { customWorkMailto, site } from "../../../lib/site";

export const metadata: Metadata = {
  title: "Contactanos"
};

/** Distingue los proyectos a medida de las consultas sobre productos propios. */
export default function ContactPage() {
  const supportEmail = `mailto:${site.contact.email}?subject=${encodeURIComponent("Consulta sobre un producto de JondreA")}`;

  return (
    <>
      <section className="container page-hero page-hero--contact">
        <h1>Contactanos</h1>
        <p className="lead">Escribinos para conversar sobre tu proyecto o consultar por uno de nuestros productos.</p>
      </section>

      <section className="container section factory-section contact-paths" aria-label="Motivo de la consulta">
        <div className="factory-services factory-services--two">
          <article className="feature-card">
            <h2>Proyectos a medida</h2>
            <p>Contanos qué necesitás resolver, quién va a usarlo y en qué etapa estás.</p>
            <a className="btn btn-primary" href={customWorkMailto()}>Escribir sobre mi proyecto</a>
          </article>
          <article className="feature-card">
            <h2>Consultas sobre productos</h2>
            <p>Si tenés una duda sobre Nido, EscapARG o CareMe, indicá de qué producto se trata.</p>
            <a className="btn btn-ghost" href={supportEmail}>Consultar sobre un producto</a>
          </article>
        </div>
        <div className="contact-address">
          <a className="inline-link" href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
          <CopyEmail email={site.contact.email} />
        </div>
      </section>
    </>
  );
}
