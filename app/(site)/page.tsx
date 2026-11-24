import Link from "next/link";
import { CustomWorkCta } from "../../components/CustomWorkCta";
import { EscapargCaseStudy } from "../../components/EscapargCaseStudy";
import { NidoCaseStudy } from "../../components/NidoCaseStudy";

const services = [
  { title: "Software a medida", text: "Plataformas, portales y herramientas internas. Por ejemplo, un panel para seguir pedidos y consultar el stock del sistema que ya usás." },
  { title: "Sitios web", text: "Sitios corporativos y comerciales. Por ejemplo, un catálogo que tu equipo pueda actualizar y que funcione bien en el celular." },
  { title: "Apps móviles", text: "Apps para Android y iOS. Por ejemplo, una app para registrar visitas y consultar su historial desde el teléfono." }
];

const process = [
  { title: "Definimos el alcance", text: "Revisamos quién va a usar el producto, qué necesita resolver y qué conviene incluir en la primera versión." },
  { title: "Diseñamos y desarrollamos", text: "Probamos los recorridos principales y construimos por etapas que tu equipo puede revisar." },
  { title: "Preparamos el lanzamiento", text: "Probamos el producto, dejamos el entorno listo y acordamos cómo seguir después de publicar." }
];

/** Presenta los servicios de JondreA, su forma de trabajo y el catálogo propio. */
export default function HomePage() {
  return (
    <>
      <section className="container page-hero page-hero--home factory-hero">
        <p className="factory-eyebrow">Diseño e ingeniería de software</p>
        <h1>Software a medida para tu empresa</h1>
        <p className="lead">
          Diseñamos y desarrollamos productos digitales, sitios web y apps móviles.
          Trabajamos desde la primera versión y dejamos una base que tu equipo pueda ampliar.
        </p>
        <div className="hero-actions">
          <Link href="/contactanos" className="btn btn-primary">Contanos tu proyecto</Link>
          <a href="#casos" className="btn btn-ghost">Ver nuestro trabajo</a>
        </div>
      </section>

      <section id="casos" className="container section factory-section" aria-labelledby="casos-titulo">
        <h2 id="casos-titulo">Casos reales</h2>
        <NidoCaseStudy />
        <EscapargCaseStudy />
      </section>

      <p className="container factory-catalog-link">
        <Link className="inline-link" href="/productos">Ver todos nuestros productos <span aria-hidden="true">→</span></Link>
      </p>

      <section id="servicios" className="container section factory-section" aria-labelledby="servicios-title">
        <h2 id="servicios-title">Qué desarrollamos</h2>
        <div className="factory-services factory-services--offers">
          {services.map((service) => (
            <article className="feature-card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container section factory-section" aria-labelledby="metodo-title">
        <h2 id="metodo-title">Cómo trabajamos</h2>
        <ol className="approach-list">
          {process.map((step) => (
            <li key={step.title}>
              <span className="approach-item__title">{step.title}</span>
              <span>{step.text}</span>
            </li>
          ))}
        </ol>
      </section>

      <CustomWorkCta id="proyecto" showContact={false} />
    </>
  );
}
