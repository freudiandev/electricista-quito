import styles from './Footer.module.scss'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.column}>
            <h3>Leodan Cueva</h3>
            <p>Tecnólogo Electricista Profesional</p>
            <p className={styles.location}>📍 Quito, Ecuador</p>
          </div>

          <div className={styles.column}>
            <h4>Servicios</h4>
            <ul>
              <li>Instalaciones Eléctricas</li>
              <li>Reparaciones Eléctricas</li>
              <li>Instalación de Cámaras</li>
              <li>Mantenimiento Preventivo</li>
              <li>Sistemas de Seguridad</li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4>Contacto</h4>
            <ul>
              <li>
                <a href="tel:+593995860168">📞 +593 99 586 0168</a>
              </li>
              <li>
                <a 
                  href="https://wa.me/593995860168" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  💬 WhatsApp
                </a>
              </li>
              <li>⏰ Disponible 24/7</li>
              <li>🏙️ Quito Norte y Sur</li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4>Horario</h4>
            <ul>
              <li>Lunes - Domingo</li>
              <li className={styles.highlight}>24 Horas</li>
              <li>Emergencias</li>
              <li>Atención Inmediata</li>
            </ul>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {currentYear} Leodan Cueva - Todos Los Derechos Reservados
          </p>
          <p className={styles.developer}>
            <em>
              Sitio web creado por{' '}
              <a 
                href="https://www.instagram.com/freudiandev/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                freudianDev
              </a>
            </em>
          </p>
        </div>
      </div>

      {/* Schema.org LocalBusiness structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Leodan Cueva - Electricista Profesional",
            "image": "https://leoelectricista.com/opengraph.jpg",
            "description": "Electricista profesional en Quito. Servicios eléctricos residenciales, comerciales e industriales. Instalación de cámaras de seguridad.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Quito",
              "addressRegion": "Pichincha",
              "addressCountry": "EC"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "-0.1807",
              "longitude": "-78.4678"
            },
            "telephone": "+593995860168",
            "priceRange": "$$",
            "openingHours": "Mo-Su 00:00-23:59",
            "url": "https://leoelectricista.com",
            "sameAs": [
              "https://wa.me/593995860168"
            ],
            "areaServed": {
              "@type": "City",
              "name": "Quito"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Servicios Eléctricos",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Instalaciones Eléctricas"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Reparaciones Eléctricas"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Instalación de Cámaras de Seguridad"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Mantenimiento Eléctrico Preventivo"
                  }
                }
              ]
            }
          })
        }}
      />
    </footer>
  )
}
