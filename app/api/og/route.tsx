import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #60a5fa 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Efecto de partículas simuladas */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            opacity: 0.3,
          }}
        >
          {/* Círculos que simulan las partículas */}
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 8 + 4}px`,
                height: `${Math.random() * 8 + 4}px`,
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.8)',
                display: 'flex',
              }}
            />
          ))}
        </div>

        {/* Contenido principal */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '60px',
            zIndex: 10,
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 'bold',
              color: 'white',
              textShadow: '2px 2px 20px rgba(0,0,0,0.3)',
              marginBottom: 30,
              display: 'flex',
            }}
          >
            ⚡ Electricista Experto en Quito
          </div>
          
          <div
            style={{
              fontSize: 36,
              color: 'rgba(255,255,255,0.95)',
              marginBottom: 20,
              display: 'flex',
              textShadow: '1px 1px 10px rgba(0,0,0,0.3)',
            }}
          >
            Leodan Cueva - Tecnólogo Electricista
          </div>

          <div
            style={{
              fontSize: 28,
              color: 'rgba(255,255,255,0.9)',
              display: 'flex',
              gap: 20,
              marginTop: 30,
            }}
          >
            <span>✓ Instalaciones Eléctricas</span>
            <span>•</span>
            <span>✓ Cámaras de Seguridad</span>
          </div>

          <div
            style={{
              fontSize: 32,
              color: 'white',
              marginTop: 40,
              display: 'flex',
              fontWeight: 600,
            }}
          >
            📱 +593 99 586 0168 | Disponible 24/7
          </div>
        </div>

        {/* Badge de zona */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            display: 'flex',
            gap: 20,
            fontSize: 24,
            color: 'white',
            fontWeight: 500,
          }}
        >
          <span>📍 Quito Norte</span>
          <span>•</span>
          <span>📍 Quito Centro</span>
          <span>•</span>
          <span>📍 Quito Sur</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
