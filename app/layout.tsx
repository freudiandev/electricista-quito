import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Electricista Profesional en Quito | Leodan Cueva - Servicios Eléctricos 24/7',
  description: 'Electricista experto en Quito Norte y Sur. Servicios eléctricos residenciales, comerciales e industriales. Instalación de cámaras de seguridad, reparaciones eléctricas, mantenimiento preventivo. Disponible 24/7. +593 99 586 0168',
  keywords: [
    'electricista Quito',
    'electricista Quito norte',
    'electricista Quito sur',
    'electricista profesional',
    'electricista con experiencia',
    'electricista experto Quito',
    'servicios eléctricos Quito',
    'reparaciones eléctricas',
    'instalación eléctrica',
    'mantenimiento eléctrico',
    'electricista residencial',
    'electricista comercial',
    'electricista industrial',
    'instalación cámaras seguridad',
    'cámaras de seguridad Quito',
    'electricista 24 horas',
    'electricista emergencias',
    'técnico electricista',
    'tecnólogo electricista',
    'Leodan Cueva electricista'
  ],
  authors: [{ name: 'Leodan Cueva' }],
  creator: 'freudianDev',
  openGraph: {
    type: 'website',
    locale: 'es_EC',
    url: 'https://leoelectricista.com',
    title: 'Electricista Profesional en Quito | Leodan Cueva - Servicios Eléctricos 24/7',
    description: 'Electricista experto en Quito Norte y Sur. Servicios eléctricos residenciales, comerciales e industriales. Instalación de cámaras de seguridad, reparaciones eléctricas, mantenimiento preventivo. Disponible 24/7.',
    siteName: 'Leodan Cueva Electricista',
    images: [
      {
        url: '/opengraph.jpg',
        width: 1200,
        height: 630,
        alt: 'Leodan Cueva - Electricista Profesional en Quito',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Electricista Profesional en Quito | Leodan Cueva',
    description: 'Servicios eléctricos profesionales en Quito. Disponible 24/7. Instalación de cámaras de seguridad.',
    images: ['/opengraph.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-EC">
      <head>
        <link rel="canonical" href="https://leoelectricista.com" />
        <meta name="geo.region" content="EC-P" />
        <meta name="geo.placename" content="Quito" />
        <meta name="geo.position" content="-0.1807;-78.4678" />
        <meta name="ICBM" content="-0.1807, -78.4678" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
