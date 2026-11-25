import Image from "next/image";
import { site } from "../lib/site";

/** Identifica a Che Mutuo con el símbolo de la marca y su nombre visible. */
export function CheMutuoLogo() {
  return (
    <span className="che-mutuo-logo">
      <Image src="/che-mutuo/mark.png" alt="" width={40} height={40} />
      <span>{site.name}</span>
    </span>
  );
}
