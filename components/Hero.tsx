'use client'

import { useEffect, useRef } from 'react'
import styles from './Hero.module.scss'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    let p5Instance: any = null

    const loadP5 = async () => {
      const p5 = (await import('p5')).default

      const sketch = (p: any) => {
        let particles: any[] = []
        const particleCount = 80

        class Particle {
          x: number
          y: number
          vx: number
          vy: number
          size: number

          constructor() {
            this.x = p.random(p.width)
            this.y = p.random(p.height)
            this.vx = p.random(-0.5, 0.5)
            this.vy = p.random(-0.5, 0.5)
            this.size = p.random(2, 4)
          }

          update() {
            this.x += this.vx
            this.y += this.vy

            if (this.x < 0 || this.x > p.width) this.vx *= -1
            if (this.y < 0 || this.y > p.height) this.vy *= -1
          }

          draw() {
            p.noStroke()
            p.fill(255, 255, 255, 150)
            p.circle(this.x, this.y, this.size)
          }

          connect(others: Particle[]) {
            others.forEach(other => {
              const d = p.dist(this.x, this.y, other.x, other.y)
              if (d < 120) {
                const alpha = p.map(d, 0, 120, 100, 0)
                p.stroke(255, 255, 255, alpha)
                p.strokeWeight(1)
                p.line(this.x, this.y, other.x, other.y)
              }
            })
          }
        }

        p.setup = () => {
          const canvas = p.createCanvas(p.windowWidth, p.windowHeight)
          canvas.parent(canvasRef.current!)
          
          for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle())
          }
        }

        p.draw = () => {
          p.clear()
          
          particles.forEach(particle => {
            particle.update()
            particle.draw()
            particle.connect(particles)
          })
        }

        p.windowResized = () => {
          p.resizeCanvas(p.windowWidth, p.windowHeight)
          particles = []
          for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle())
          }
        }
      }

      p5Instance = new p5(sketch)
    }

    loadP5()

    return () => {
      if (p5Instance) {
        p5Instance.remove()
      }
    }
  }, [])

  return (
    <section className={styles.hero}>
      <div className={styles.canvasContainer} ref={canvasRef}></div>
      <div className={styles.overlay}></div>
      
      <div className={styles.content}>
        <h1 className={styles.title}>
          Electricista Experto en Quito
        </h1>
        <p className={styles.subtitle}>
          Servicios eléctricos profesionales para hogares, negocios e industrias. 
          Instalación de cámaras de seguridad y soluciones eléctricas completas.
        </p>
        <p className={styles.name}>Leodan Cueva - Tecnólogo Electricista</p>
        
        <div className={styles.cta}>
          <a 
            href="https://wa.me/593995860168?text=Hola%20Leodan%2C%20necesito%20servicios%20el%C3%A9ctricos" 
            className={`btn btn-whatsapp ${styles.btnHero}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            WhatsApp
          </a>
          <a 
            href="tel:+593995860168" 
            className={`btn btn-call ${styles.btnHero}`}
            aria-label="Llamar ahora"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
            </svg>
            Llamar Ahora
          </a>
        </div>
        
        <div className={styles.info}>
          <p>📍 Quito Norte y Sur | ⚡ Disponible 24/7 | 📞 +593 99 586 0168</p>
        </div>
      </div>
    </section>
  )
}
