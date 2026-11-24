import Image from "next/image";
import Link from "next/link";

/** Presenta las decisiones de diseño y desarrollo detrás de la cooperación en EscapARG. */
export function EscapargCaseStudy() {
  return (
    <article className="case-study" aria-labelledby="caso-escaparg">
      <div className="case-study__copy">
        <p className="case-study__label">EscapARG · Producto propio en desarrollo</p>
        <h3 id="caso-escaparg">Diseñar una sala que se resuelva en equipo</h3>

        <h4>El desafío</h4>
        <p>
          En una sala de escape online, juntar a varias personas en la misma partida es solo
          el principio. Queríamos que cada integrante tuviera algo concreto para aportar y que
          ponerse de acuerdo fuera parte del juego.
        </p>

        <h4>Qué hizo JondreA</h4>
        <p>
          Diseñamos El Experimento y El Contacto, y desarrollamos partidas en el navegador para
          equipos de 2 a 4 personas. Implementamos salas por código de invitación y un servidor
          que mantiene a todos en la misma partida. En El Contacto, hay mecanismos que requieren
          que dos jugadores distintos mantengan controles a la vez.
        </p>
        <Link className="inline-link" href="/productos/escaparg#dentro-del-juego">
          Ver capturas de EscapARG <span aria-hidden="true">→</span>
        </Link>
      </div>

      <figure className="case-study__figure case-study__figure--landscape">
        <Image
          src="/productos/escaparg/laboratorio-gameplay.webp"
          alt="Dos personajes de El Experimento exploran un laboratorio y sus instrumentos."
          width={930}
          height={555}
          sizes="(max-width: 700px) 90vw, (max-width: 1152px) 40vw, 450px"
        />
        <figcaption>El Experimento · Captura de una versión en desarrollo</figcaption>
      </figure>
    </article>
  );
}
