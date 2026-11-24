"use client";

import { useState } from "react";

/** Copia el correo y anuncia el resultado sin mover el foco. */
export function CopyEmail({ email }: { email: string }) {
  const [message, setMessage] = useState("");

  /** Ofrece una indicación manual si el navegador no permite copiar. */
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setMessage("Correo copiado.");
    } catch {
      setMessage("Seleccioná la dirección y copiala manualmente.");
    }
  }

  return (
    <div className="contact-copy">
      <button type="button" className="btn btn-ghost" onClick={copyEmail}>Copiar correo</button>
      <p role="status">{message}</p>
    </div>
  );
}
