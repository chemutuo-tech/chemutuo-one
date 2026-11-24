/** Release pública compartida de Nido. */
export const publicRelease = {
  channel: "Preparación de lanzamiento",
  versionName: "1.0.0",
  label: "Nido",
  apkUpcoming: "Próximamente en Google Play",
  apkPendingCta: "Play Store · Próximamente",
  ios: "iOS · Próximamente"
} as const;

/** Estado público compartido entre el catálogo y las fichas. */
export const productAvailability = {
  nido: publicRelease.apkUpcoming,
  escaparg: "En desarrollo",
  careme: "En desarrollo"
} as const;
