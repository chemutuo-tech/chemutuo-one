/** Release pública compartida de Nido. */
export const publicRelease = {
  channel: "Preparación de lanzamiento",
  versionName: "1.0.0",
  label: "Nido",
  apkPendingCta: "Play Store · Próximamente",
  ios: "iOS · Próximamente"
} as const;

/** Estado público compartido entre el catálogo y las fichas. */
export const productAvailability = {
  nido: "Próximamente en Android e iOS",
  escaparg: "Próximamente en web y mobile",
  careme: "En desarrollo"
} as const;
