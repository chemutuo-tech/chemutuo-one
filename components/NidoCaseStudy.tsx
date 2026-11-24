import Image from "next/image";
import Link from "next/link";
import { productAvailability, publicRelease } from "../lib/release";

/** Cuenta qué diseñó y construyó JondreA para Nido. */
export function NidoCaseStudy() {
  return (
    <article className="case-study" aria-labelledby="caso-nido">
      <div className="case-study__copy">
        <p className="case-study__label">Nido · Producto propio</p>
        <h3 id="caso-nido">Organizar una casa entre varias personas</h3>

        <h4>El problema</h4>
        <p>
          Cuando las compras quedan en un chat, los gastos en una planilla y las tareas en la
          cabeza de alguien, cuesta saber qué falta hacer y quién se ocupa.
        </p>

        <h4>Qué hizo JondreA</h4>
        <p>
          Diseñamos dos espacios y construimos la app para Android y su API. En Hogar, quienes
          conviven consultan la agenda, comparten listas de compras y asignan responsables a las
          rutinas. En Yo, cada persona lleva sus objetivos y hábitos y consulta el detalle de
          su registro de ánimo.
        </p>
        <Link className="inline-link" href="/productos/nido#pantallas">Ver las pantallas de Nido <span aria-hidden="true">→</span></Link>
      </div>

      <figure className="case-study__figure">
        <div className="case-study__screens">
          <Image src="/nido/screens/nido-hogar.png" alt="Hogar de Nido, con la agenda y el acceso a Mi espacio." width={1080} height={2400} sizes="(max-width: 420px) 38vw, 175px" />
          <Image src="/nido/screens/nido-yo.png" alt="Espacio Yo de Nido, con tendencias de ánimo y hábitos personales." width={1080} height={2400} sizes="(max-width: 420px) 38vw, 175px" />
        </div>
        <figcaption>Capturas de Nido para Android. {productAvailability.nido}. {publicRelease.ios}.</figcaption>
      </figure>
    </article>
  );
}
