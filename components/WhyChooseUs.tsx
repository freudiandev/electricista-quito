'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './WhyChooseUs.module.scss'

const reasons = [
  {
    icon: '🎓',
    title: 'Tecnólogo Certificado',
    description: 'Formación técnica profesional con años de experiencia en el sector eléctrico.'
  },
  {
    icon: '⚡',
    title: 'Servicio 24/7',
    description: 'Disponibilidad inmediata para emergencias eléctricas en cualquier momento.'
  },
  {
    icon: '✅',
    title: 'Garantía de Calidad',
    description: 'Todos nuestros trabajos cuentan con garantía y respaldo profesional.'
  },
  {
    icon: '💰',
    title: 'Precios Justos',
    description: 'Cotizaciones transparentes y precios competitivos sin sorpresas.'
  }
]

export default function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className={styles.whySection}>
      <div className="container">
        <h2 className={styles.title}>¿Por Qué Elegir a Leodan Cueva?</h2>
        
        <div className={`${styles.grid} ${isVisible ? styles.visible : ''}`}>
          {reasons.map((reason, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{reason.icon}</div>
              <h3 className={styles.cardTitle}>{reason.title}</h3>
              <p className={styles.cardDescription}>{reason.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <div className={styles.statNumber}>10+</div>
            <div className={styles.statLabel}>Años de Experiencia</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNumber}>500+</div>
            <div className={styles.statLabel}>Proyectos Completados</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNumber}>100%</div>
            <div className={styles.statLabel}>Clientes Satisfechos</div>
          </div>
        </div>
      </div>
    </section>
  )
}
