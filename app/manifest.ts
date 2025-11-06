export default function manifest() {
  return {
    name: 'Leodan Cueva - Electricista Profesional',
    short_name: 'Leo Electricista',
    description: 'Electricista experto en Quito Norte y Sur. Servicios eléctricos 24/7',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a1628',
    theme_color: '#1a4d8f',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
