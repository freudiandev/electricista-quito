'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './ServicesSection.module.scss'

const services = [
  {
    icon: '🔌',
    title: 'Instalaciones Eléctricas',
    description: 'Instalación completa de sistemas eléctricos residenciales, comerciales e industriales. Diseño y ejecución según normativas técnicas.'
  },
  {
    icon: '🔧',
    title: 'Reparaciones Eléctricas',
    description: 'Solución rápida y efectiva de fallas eléctricas, cortocircuitos, problemas de voltaje y cualquier emergencia eléctrica.'
  },
  {
    icon: '📹',
    title: 'Instalación de Cámaras',
    description: 'Instalación profesional de sistemas de vigilancia CCTV, configuración de red y monitoreo remoto para tu seguridad.'
  },
  {
    icon: '⚡',
    title: 'Mantenimiento Preventivo',
    description: 'Inspección periódica de instalaciones eléctricas, actualización de tableros y prevención de fallas futuras.'
  },
  {
    icon: '💡',
    title: 'Iluminación LED',
    description: 'Diseño e instalación de sistemas de iluminación LED eficientes, ahorrando energía y mejorando ambientes.'
  },
  {
    icon: '🏗️',
    title: 'Proyectos Industriales',
    description: 'Instalaciones eléctricas industriales, automatización, sistemas trifásicos y soluciones de alta potencia.'
  },
  {
    icon: '🔒',
    title: 'Sistemas de Seguridad',
    description: 'Instalación de sistemas de seguridad integrados: alarmas, control de acceso y sistemas inteligentes.'
  },
  {
    icon: '⚙️',
    title: 'Automatización',
    description: 'Domótica, sistemas inteligentes para el hogar, automatización de iluminación, cortinas y más.'
  },
  {
    icon: '🔋',
    title: 'Sistemas de Respaldo',
    description: 'Instalación de UPS, plantas eléctricas y sistemas de energía de respaldo para continuidad operativa.'
  }
]

export default function ServicesSection() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index'))
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set(prev).add(index))
          }
        })
      },
      { threshold: 0.1 }
    )

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.servicesSection}>
      <div className="container">
        <h2 className={styles.title}>Nuestros Servicios Profesionales</h2>
        <p className={styles.subtitle}>
          Soluciones eléctricas integrales para todo tipo de proyectos
        </p>
        
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => { cardsRef.current[index] = el }}
              data-index={index}
              className={`${styles.card} ${visibleCards.has(index) ? styles.visible : ''}`}
            >
              <div className={styles.icon}>{service.icon}</div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
