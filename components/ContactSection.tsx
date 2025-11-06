import styles from './ContactSection.module.scss'

export default function ContactSection() {
  return (
    <section className={styles.contactSection}>
      <div className="container">
        <h2 className={styles.title}>Contáctanos Ahora</h2>
        <p className={styles.subtitle}>
          Estamos disponibles 24/7 para atender tus emergencias eléctricas
        </p>

        <div className={styles.contactGrid}>
          <div className={styles.contactCard}>
            <div className={styles.icon}>📱</div>
            <h3>WhatsApp</h3>
            <p>Respuesta inmediata por chat</p>
            <a 
              href="https://wa.me/593995860168?text=Hola%20Leodan%2C%20necesito%20servicios%20el%C3%A9ctricos" 
              className="btn btn-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              Escribir WhatsApp
            </a>
          </div>

          <div className={styles.contactCard}>
            <div className={styles.icon}>📞</div>
            <h3>Llamada Directa</h3>
            <p>Atención telefónica inmediata</p>
            <a 
              href="tel:+593995860168" 
              className="btn btn-call"
            >
              +593 99 586 0168
            </a>
          </div>

          <div className={styles.contactCard}>
            <div className={styles.icon}>📍</div>
            <h3>Cobertura</h3>
            <p>Quito Norte y Sur</p>
            <div className={styles.coverage}>
              <span className={styles.badge}>Norte</span>
              <span className={styles.badge}>Sur</span>
              <span className={styles.badge}>Valles</span>
            </div>
          </div>
        </div>

        <div className={styles.emergency}>
          <h3>🚨 ¿Tienes una Emergencia Eléctrica?</h3>
          <p>Llámanos ahora y te atenderemos de inmediato</p>
          <div className={styles.emergencyCta}>
            <a 
              href="tel:+593995860168" 
              className="btn btn-primary"
            >
              Llamar Emergencias
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
