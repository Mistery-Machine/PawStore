# PawStore

Catálogo de productos para mascotas hecho con React y Vite. Es la Etapa 1 del proyecto: una aplicación de una sola página con datos estáticos y sin backend.

## Qué incluye

- Página de inicio.
- Catálogo con las tarjetas de producto.
- Detalle de cada producto.
- Header y Footer visibles en todas las vistas.

La navegación entre vistas funciona sin recargar la página y sin librerías de rutas. Los productos se leen del archivo `src/data/products.json`.

> **Nota sobre las imágenes:** el archivo `products.json` se mantiene tal como lo proporcionó PawStore. Sus imágenes apuntan a `via.placeholder.com`, un servicio que ya no está disponible, por eso no cargan en el catálogo ni en el detalle.

## Requisitos

- Node.js 18 o superior.

## Instalación

```bash
git clone https://github.com/Mistery-Machine/PawStore.git
cd PawStore
npm install
```

## Ejecución

```bash
npm run dev
```

Después se abre en el navegador la dirección que muestra la terminal, normalmente `http://localhost:5173/`.

## Otros comandos

```bash
npm run build
npm run lint
```

## Estructura del proyecto

```
src/
├── config/
├── data/
├── features/
│   ├── home/
│   └── catalog/
├── shared/
│   └── components/
├── styles/
└── utils/
```