# My DevPorfolio

My DevPorfolio es una aplicación web tipo Single Page creada con React y Vite para presentar proyectos, habilidades y datos de contacto. Está pensada para ser ligera, accesible y fácil de personalizar.

**Características principales**
- Interfaz responsiva diseñada con CSS Modules.
- Componentes reutilizables: `Hero`, `About`, `Projects`, `Contact`, `Navbar`.
- Efectos de revelado en el scroll mediante un hook personalizado.

**Tecnologías**
- Vite
- React (JSX)
- CSS Modules
- JavaScript moderno (ESM)

**Estructura del proyecto**
- [index.html](index.html)
- [package.json](package.json)
- [vite.config.js](vite.config.js)
- [src/main.jsx](src/main.jsx)
- [src/App.jsx](src/App.jsx)
- [src/index.css](src/index.css)
- [src/App.module.css](src/App.module.css)
- [src/components/Hero.jsx](src/components/Hero.jsx)
- [src/components/About.jsx](src/components/About.jsx)
- [src/components/Projects.jsx](src/components/Projects.jsx)
- [src/components/Contact.jsx](src/components/Contact.jsx)
- [src/components/Navbar.jsx](src/components/Navbar.jsx)
- [src/components/Reveal.jsx](src/components/Reveal.jsx)
- [src/hooks/useScrollReveal.js](src/hooks/useScrollReveal.js)
- [src/hooks/useTheme.js](src/hooks/useTheme.js)
- [src/data/portfolio.js](src/data/portfolio.js)
- [src/assets/](src/assets/)
- [public/site.webmanifest](public/site.webmanifest)

**Instalación (desarrollo local)**
1. Clona el repositorio:

```bash
git clone <REPO_URL>
cd miPortafolioDigital
```

2. Instala dependencias:

```bash
npm install
```

3. Ejecuta el servidor de desarrollo:

```bash
npm run dev
```

Abre la aplicación en `http://localhost:5173` (o la URL que indique Vite).

**Comandos útiles**
- `npm run dev` : Ejecuta el modo desarrollo.
- `npm run build` : Genera la versión optimizada para producción.
- `npm run preview` : Sirve la versión build localmente para pruebas.

**Personalización rápida**
- Edita los datos del portafolio en [src/data/portfolio.js](src/data/portfolio.js) para actualizar proyectos, enlaces y textos.
- Ajusta estilos en los módulos `.module.css` dentro de `src/components/`.