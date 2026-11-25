# Che Mutuo One

Sitio corporativo de **Che Mutuo** y panel admin de **Nido**.

El catálogo presenta Nido, EscapARG y CareMe.

## Stack

- Next.js 15 (App Router)
- TypeScript
- CSS con design tokens (`styles/tokens.css`)

## Arranque

```bash
cd chemutuo-one
cp .env.example .env
pnpm install
pnpm dev
```

Abrí [http://localhost:3000](http://localhost:3000).

Admin: [http://localhost:3000/admin](http://localhost:3000/admin) → credenciales de `.env`.

Para métricas de Nido la API tiene que estar arriba y `NIDO_ADMIN_ANALYTICS_KEY` tiene que coincidir con `ADMIN_ANALYTICS_KEY` de la API. En Render free, al abrir el panel se pega a `/v1/health` para despertar el servicio.

## Rutas

| Ruta | Descripción |
|------|-------------|
| `/` | Home |
| `/sobre-nosotros` | Sobre nosotros |
| `/contactanos` | Contacto por correo y LinkedIn |
| `/productos` | Portfolio |
| `/productos/nido` | Ficha de Nido y disponibilidad |
| `/productos/escaparg` | Ficha de EscapARG y disponibilidad |
| `/privacidad` | Nota de privacidad |
| `/admin` | Métricas de Nido (Hogar + Yo) |

## Contenido

| Archivo | Qué editar |
|---------|------------|
| `lib/site.ts` | Marca, mail, redes |
| `lib/products.ts` | Copy de Nido |
| `lib/nidoRelease.ts` | Versión de lanzamiento y cambios de la ficha |
| `public/nido/screens/` | Capturas de la app en la ficha |
| `styles/tokens.css` | Color y tipografía |

## Despliegue (Vercel)

Los cambios de `develop` generan un preview. La publicación requiere promover el despliegue a producción en Vercel.

1. Abrí el [proyecto en Vercel](https://vercel.com/chemutuo/chemutuo-one), conectado a `chemutuo-tech/chemutuo-one`.
2. Framework: Next.js.
3. Env vars:

| Key | Valor |
|-----|--------|
| `ADMIN_USER` | usuario del panel |
| `ADMIN_PASSWORD` | password fuerte |
| `NIDO_API_URL` | `https://nido-api-9ccn.onrender.com` (sin `/v1`) |
| `NIDO_ADMIN_ANALYTICS_KEY` | el mismo que `ADMIN_ANALYTICS_KEY` en Render |

4. Deploy → admin en `https://…/admin`

El panel muestra altas, hogares, invitaciones aceptadas, módulos de Hogar (eventos, medicación, gastos, rutinas, compras, viajes) y Yo (check-ins, objetivos, hábitos).
