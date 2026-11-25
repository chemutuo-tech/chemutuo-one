import Image from "next/image";
import Link from "next/link";

/** Presenta las decisiones de diseño y desarrollo detrás de la cooperación en EscapARG. */
export function EscapargCaseStudy() {
  return (
    <article className="case-study" aria-labelledby="caso-escaparg">
      <div className="case-study__copy">
        <p className="case-study__label">EscapARG · Escape rooms online</p>
        <h3 id="caso-escaparg">¡No sé qué código va en esta puerta!</h3>

        <p>
          Entrás con tus amigos a un laboratorio o a una nave abandonada. Explorá, resolvé
          los puzzles y ojo con lo que los acecha. Uno encuentra una pista, vos seguís
          peleándote con un panel y alguien grita desde otra habitación que encontró el
          código. Lo probás y… ¡se abre la puerta!
        </p>

        <p>
          Esa era la partida que queríamos armar en Che Mutuo. En <strong>El Contacto</strong>,
          por ejemplo, hay mecanismos en los que dos jugadores tienen que mantener apretados
          sus controles al mismo tiempo. Si uno suelta antes, toca coordinar otra vez.
        </p>

        <p>
          Las dos primeras salas son <strong>El Experimento</strong> y <strong>El Contacto</strong>.
          Se juegan de <strong>2 a 4</strong> desde el navegador. Armás la partida, les pasás el
          código a tus amigos y entran. Próximamente, <strong>más salas, desafíos diarios y semanales</strong>.
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
        <figcaption>El Experimento · Próximamente</figcaption>
      </figure>
    </article>
  );
}
