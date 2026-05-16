export const navItems = [
  { label: 'Inicio', href: '/' },
  { label: 'Boom Playa', href: '/boom-playa/' },
  {
    label: 'Servicios',
    href: '/entrena/',
    children: [
      { label: 'Entrena', href: '/entrena/' },
      { label: 'Sumergete', href: '/sumergite/' },
      { label: 'Compite', href: '/compite/' },
      { label: 'Juega', href: '/juega/' },
    ],
  },
  { label: 'Galeria', href: '/galeria/' },
  { label: 'Contacto', href: '/contacto/' },
];

export const contactLinks = [
  {
    label: 'Instagram',
    value: '@boom.playa',
    href: 'https://www.instagram.com/boom.playa/',
  },
  {
    label: 'Whatsapp',
    value: '+57 3108410536',
    href: 'https://wa.me/573108410536',
  },
];

export const programCards = [
  {
    title: 'Entrena',
    href: '/entrena/',
    text: 'Categorias por nivel y edad, horarios, beneficios, retos mensuales y afiliacion.',
  },
  {
    title: 'Sumergite',
    href: '/sumergite/',
    text: 'Campamentos con entrenamientos, actividades, fechas, ubicaciones y cupos limitados.',
  },
  {
    title: 'Compite',
    href: '/compite/',
    text: 'Calendario, torneos internos y abiertos, resultados, testimonios e historias de exito.',
  },
  {
    title: 'Juega',
    href: '/juega/',
    text: 'Grupo de juego, alquiler de cancha y eventos especiales para celebrar o integrar equipos.',
  },
];

export const placeholderLabel = 'Espacio reservado para foto o video';
