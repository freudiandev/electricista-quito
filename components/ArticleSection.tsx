import styles from './ArticleSection.module.scss'

export default function ArticleSection() {
  return (
    <section className={styles.articleSection}>
      <div className="container">
        <h2 className={styles.title}>¿Por Qué Necesitas un Electricista Profesional?</h2>
        
        <article className={styles.article}>
          <p>
            Los <strong>problemas eléctricos</strong> son una de las principales causas de accidentes domésticos 
            y comerciales en Ecuador. Según datos de la <a href="https://es.wikipedia.org/wiki/Ingenier%C3%ADa_el%C3%A9ctrica" 
            target="_blank" rel="noopener noreferrer">ingeniería eléctrica</a>, el 80% de los incendios en hogares 
            están relacionados con fallas en instalaciones eléctricas mal realizadas o sin mantenimiento.
          </p>

          <h3>Problemas Eléctricos Más Comunes en Quito</h3>
          <ul>
            <li><strong>Cortocircuitos frecuentes:</strong> Causados por cables deteriorados o instalaciones antiguas que no soportan la carga eléctrica moderna.</li>
            <li><strong>Variaciones de voltaje:</strong> Pueden dañar electrodomésticos costosos y equipos electrónicos sensibles.</li>
            <li><strong>Instalaciones sobrecargadas:</strong> El uso creciente de dispositivos electrónicos supera la capacidad de sistemas eléctricos antiguos.</li>
            <li><strong>Falta de sistemas de tierra:</strong> Aumenta el riesgo de descargas eléctricas y daños a equipos.</li>
            <li><strong>Cableado expuesto o deteriorado:</strong> Representa un peligro inmediato de electrocución o incendio.</li>
          </ul>

          <h3>La Importancia de un Electricista Certificado</h3>
          <p>
            Contratar un <strong>electricista profesional en Quito</strong> no es solo una cuestión de comodidad, 
            sino de seguridad. Las <a href="https://es.wikipedia.org/wiki/Instalaci%C3%B3n_el%C3%A9ctrica" 
            target="_blank" rel="noopener noreferrer">instalaciones eléctricas</a> deben cumplir con normativas 
            internacionales como el <a href="https://es.wikipedia.org/wiki/C%C3%B3digo_El%C3%A9ctrico_Nacional_(Estados_Unidos)" 
            target="_blank" rel="noopener noreferrer">Código Eléctrico Nacional</a> y regulaciones locales ecuatorianas.
          </p>

          <p>
            Un tecnólogo electricista experto puede identificar problemas que no son evidentes para personas sin 
            capacitación técnica. Desde fugas de corriente hasta configuraciones de breakers inadecuadas, cada 
            detalle cuenta para garantizar la seguridad de tu familia o negocio.
          </p>

          <h3>Seguridad en Instalaciones de Cámaras de Vigilancia</h3>
          <p>
            La <strong>instalación de cámaras de seguridad</strong> requiere conocimientos específicos en 
            cableado estructurado, configuración de redes y alimentación eléctrica continua. Según discusiones 
            en <a href="https://www.reddit.com/r/homedefense/" target="_blank" rel="noopener noreferrer">comunidades 
            de seguridad del hogar</a>, las instalaciones improvisadas frecuentemente fallan en momentos críticos 
            debido a conexiones deficientes o falta de respaldo eléctrico.
          </p>

          <h3>Mantenimiento Preventivo: La Clave de la Seguridad</h3>
          <p>
            El mantenimiento eléctrico preventivo puede prevenir el 90% de las emergencias eléctricas. Esto incluye:
            inspección de tableros, revisión de conexiones, medición de cargas, actualización de breakers, 
            y verificación de sistemas de tierra. Un <strong>electricista con experiencia</strong> puede detectar 
            y corregir problemas antes de que se conviertan en emergencias costosas.
          </p>

          <div className={styles.callout}>
            <h4>⚡ Dato Importante</h4>
            <p>
              El 70% de los problemas eléctricos pueden prevenirse con inspecciones anuales realizadas por 
              profesionales certificados. No esperes a que ocurra una emergencia.
            </p>
          </div>

          <p className={styles.conclusion}>
            Ya sea que necesites reparaciones de emergencia, instalaciones nuevas, o mantenimiento preventivo, 
            contar con un <strong>electricista profesional en Quito</strong> es fundamental para proteger tu 
            inversión, tu propiedad y, lo más importante, la seguridad de las personas que más te importan.
          </p>
        </article>
      </div>
    </section>
  )
}
