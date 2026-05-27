import foto from "./../assets/PhotoOfMe.jpg"
import screenshot1Dark from "./../assets/ExpensesManagerDark.jpg"
import screenshot1Light from "./../assets/ExpensesManagerLight.jpg"
import screenshot2Dark from "./../assets/DevPortfolioDark.jpg"
import screenshot2Light from "./../assets/DevPortfolioLight.jpg"

export const profile = {
  name: 'Ramiro Pizzico',
  role: 'Full Stack Developer',
  location: 'Bahia Blanca, AR',
  available: true,
  bioEs: 'Desarrollador apasionado por construir productos que combinan funcionalidad y diseño. Trabajo con equipos ágiles para resolver problemas reales con código limpio y escalable.',
  bioEn:'A developer passionate about building products that combine functionality and design. I work with agile teams to solve real-world problems with clean, scalable code.',
  email: 'ramiropizzico@gmail.com',
  github: 'https://github.com/ClasiCKGit',
  linkedin: 'https://www.linkedin.com/in/ramiro-pizzico-9570083b7/',
  photo: foto,
  lang: 'En - English'
}

export const stats = [
  { value: '2024', label: 'año actual' },
  { value: 'Full Stack', label: 'especialidad' },
  { value: 'React / Node', label: 'stack' },
]

export const stack = [
  { name: 'React',       category: 'frontend'  },
  { name: 'TypeScript',  category: 'lang'      },
  { name: 'Next.js',     category: 'framework' },
  { name: 'Node.js',     category: 'backend'   },
  { name: 'MySQL',       category: 'database'  },
  { name: 'Docker',      category: 'devops'    },
  { name: 'Git',         category: 'control'   },
]

export const projects = [
  {
    id: '01',
    title: 'Manager de gastos personal',
    description:
      'Gestor de ingresos y gastos personales, con la mision de ayudar al usuario a ahorrar, categorizando los gastos y permitiendo generar presupuestos y metas de ahorro.',
    tags: ['React', 'Typescript', 'Node', 'MySQL', 'Prisma', 'JWT', 'Docker'],
    screenshotDark: screenshot1Dark,
    screenshotLight: screenshot1Light,
    url: '#',
    github: '#',
  },
  {
    id: '02',
    title: 'My dev porfolio',
    description:
      'Portafolio de un estudiante de programación y desarrollador full stack enfocado en crear aplicaciones web modernas, responsivas y escalables (Mi portafolio).',
    tags: ['React', 'Javascrpit', 'CSS'],
    screenshotDark: screenshot2Dark,
    screenshotLight: screenshot2Light,
    url: '#',
    github: '#',
  },
  {
    id: '03',
    title: 'Proximamente',
    description:
      'Descripción del proyecto: qué problema resuelve, para quién está pensado y cuál fue tu rol en el desarrollo.',
    tags: ['', '', ''],
    screenshotDark: null,
    screenshotLight: null,
    url: '#',
    github: '#',
  },
]
