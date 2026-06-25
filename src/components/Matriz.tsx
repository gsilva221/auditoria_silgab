import ReactMarkdown from 'react-markdown';

// Mantienes la importación de activos reales desde tu carpeta de documentos
// import activosMD from '../../docs_silgab/05_activos_silgab.md?raw';

const activosMD = `
### 🏢 Activos de Información Críticos
A continuación se detallan los activos de información identificados en **TurBus Digital** que se encuentran expuestos por las vulnerabilidades halladas:

1. **Base de Datos de Clientes y Pasajeros:** Contiene información altamente sensible (RUT, correos, contraseñas hash, registros de viajes). *(Riesgo: Crítico)*
2. **Sesiones y Cookies de Usuarios:** Tokens activos en el navegador que controlan el acceso al portal de clientes. *(Riesgo: Alto)*
3. **Servidor de Aplicaciones y OS del Backend:** Sistema operativo donde corre el portal web principal de TurBus. *(Riesgo: Crítico)*
4. **Pasarela de Transacciones y Pagos:** Módulo encargado del flujo de compra y reserva de pasajes. *(Riesgo: Crítico)*
`;

// Estructura de datos para armar el mapa de calor interactivo
const nivelesMatriz = {
  probabilidades: ['Alta', 'Media', 'Baja'],
  impactos: ['Bajo', 'Medio', 'Alto', 'Crítico'],
  celdas: {
    'Alta-Crítico': {
      color: '#fee2e2',
      textColor: '#991b1b',
      borderColor: '#f87171',
      amenazas: [
        { nombre: '💥 Command Injection', cvss: '10.0', desc: 'Control total del servidor de TurBus' },
        { nombre: '🗄️ Inyección SQL', cvss: '9.8', desc: 'Robo masivo de base de datos de pasajeros' }
      ]
    },
    'Alta-Alto': {
      color: '#ffedd5',
      textColor: '#9a3412',
      borderColor: '#fb923c',
      amenazas: [
        { nombre: '🕵️ Cross-Site Scripting (XSS)', cvss: '6.1', desc: 'Secuestro de sesiones activas' }
      ]
    },
    'Alta-Medio': { color: '#fef9c3', textColor: '#854d0e', borderColor: '#facc15', amenazas: [] },
    'Alta-Bajo': { color: '#f0fdf4', textColor: '#166534', borderColor: '#86efac', amenazas: [] },
    'Media-Crítico': { color: '#fee2e2', textColor: '#991b1b', borderColor: '#f87171', amenazas: [] },
    'Media-Alto': { color: '#ffedd5', textColor: '#9a3412', borderColor: '#fb923c', amenazas: [] },
    'Media-Medio': { color: '#fef9c3', textColor: '#854d0e', borderColor: '#facc15', amenazas: [] },
    'Media-Bajo': { color: '#f0fdf4', textColor: '#166534', borderColor: '#86efac', amenazas: [] },
    'Baja-Crítico': { color: '#fee2e2', textColor: '#991b1b', borderColor: '#f87171', amenazas: [] },
    'Baja-Alto': { color: '#ffedd5', textColor: '#9a3412', borderColor: '#fb923c', amenazas: [] },
    'Baja-Medio': { color: '#fef9c3', textColor: '#854d0e', borderColor: '#facc15', amenazas: [] },
    'Baja-Bajo': { color: '#f0fdf4', textColor: '#166534', borderColor: '#86efac', amenazas: [] },
  }
};

export default function Matriz() {
  return (
    <section id="matriz" className="informe-contenido" style={styles.section}>
      <h2>Matriz de Riesgo e Identificación de Activos (Informe B)</h2>

      {/* Tarjeta Superior: Activos de Información */}
      <div style={styles.activosCard}>
        <div style={styles.badge}>Activos Identificados</div>
        <div style={{ marginTop: '1rem' }}>
          <ReactMarkdown>{activosMD}</ReactMarkdown>
        </div>
      </div>

      {/* Sección Inferior: Mapa de Calor Gráfico */}
      <div style={styles.matrixContainer}>
        <h3 style={styles.subtitle}>📊 Mapa de Calor de Riesgos (Matriz 3x4)</h3>
        <p style={styles.description}>
          Ubicación de las amenazas detectadas en la escala de probabilidad e impacto técnico/operacional:
        </p>

        <div style={styles.matrixWrapper}>
          {/* Etiquetas Superiores de Impacto */}
          <div style={styles.impactHeaderRow}>
            <div style={styles.cornerLabel}>Probabilidad \ Impacto</div>
            {nivelesMatriz.impactos.map((imp) => (
              <div key={imp} style={styles.impactLabel}>{imp}</div>
            ))}
          </div>

          {/* Filas de la Matriz */}
          {nivelesMatriz.probabilidades.map((prob) => (
            <div key={prob} style={styles.matrixRow}>
              {/* Etiqueta lateral de Probabilidad */}
              <div style={styles.probabilityLabel}>{prob}</div>

              {/* Celdas de Riesgo */}
              {nivelesMatriz.impactos.map((imp) => {
                const key = `${prob}-${imp}` as keyof typeof nivelesMatriz.celdas;
                const celda = nivelesMatriz.celdas[key];
                const tieneAmenazas = celda.amenazas && celda.amenazas.length > 0;

                return (
                  <div
                    key={imp}
                    style={{
                      ...styles.matrixCell,
                      backgroundColor: celda.color,
                      color: celda.textColor,
                      borderColor: celda.borderColor,
                      boxShadow: tieneAmenazas ? '0 4px 10px rgba(0,0,0,0.08)' : 'none',
                      transform: tieneAmenazas ? 'scale(1.02)' : 'none',
                      borderWidth: tieneAmenazas ? '2px' : '1px',
                    }}
                  >
                    {tieneAmenazas ? (
                      <div style={styles.amenazasList}>
                        {celda.amenazas.map((amenaza, i) => (
                          <div key={i} style={styles.amenazaBadge}>
                            <span style={styles.threatName}>{amenaza.nombre}</span>
                            <span style={styles.cvssBadge}>CVSS {amenaza.cvss}</span>
                            <span style={styles.threatDesc}>{amenaza.desc}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <span style={styles.emptyCellText}>Sin Riesgos</span>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Leyenda de Priorización */}
        <div style={styles.leyenda}>
          <div style={styles.leyendaItem}>
            <span style={{ ...styles.leyendaColor, backgroundColor: '#f87171' }}></span>
            <span>Riesgo Crítico (Inmediato - Plan de DR)</span>
          </div>
          <div style={styles.leyendaItem}>
            <span style={{ ...styles.leyendaColor, backgroundColor: '#fb923c' }}></span>
            <span>Riesgo Alto (Mitigación prioritaria)</span>
          </div>
          <div style={styles.leyendaItem}>
            <span style={{ ...styles.leyendaColor, backgroundColor: '#86efac' }}></span>
            <span>Riesgo Controlado / Bajo</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// Estilos Inline robustos con diseño UI Premium
const styles = {
  section: {
    padding: '2.5rem',
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05)',
  },
  activosCard: {
    backgroundColor: '#f8fafc',
    borderLeft: '5px solid #3498db',
    borderRadius: '12px',
    padding: '1.5rem',
    marginBottom: '2.5rem',
  },
  badge: {
    display: 'inline-block',
    backgroundColor: 'rgba(52, 152, 219, 0.1)',
    color: '#2980b9',
    padding: '0.3rem 0.8rem',
    borderRadius: '20px',
    fontSize: '0.85rem',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: '1.4rem',
    color: '#0f172a',
    marginBottom: '0.5rem',
  },
  description: {
    fontSize: '1rem',
    color: '#64748b',
    marginBottom: '2rem',
  },
  matrixContainer: {
    width: '100%',
  },
  matrixWrapper: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.5rem',
    overflowX: 'auto' as const,
    paddingBottom: '1rem',
  },
  impactHeaderRow: {
    display: 'flex',
    gap: '0.5rem',
    minWidth: '700px',
  },
  cornerLabel: {
    width: '150px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.75rem',
    fontWeight: 'bold' as const,
    textTransform: 'uppercase' as const,
    color: '#94a3b8',
    textAlign: 'center' as const,
  },
  impactLabel: {
    flex: 1,
    textAlign: 'center' as const,
    fontWeight: 'bold' as const,
    fontSize: '0.9rem',
    color: '#475569',
    backgroundColor: '#f1f5f9',
    padding: '0.6rem',
    borderRadius: '8px',
  },
  matrixRow: {
    display: 'flex',
    gap: '0.5rem',
    minWidth: '700px',
  },
  probabilityLabel: {
    width: '150px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold' as const,
    fontSize: '0.9rem',
    color: '#475569',
    backgroundColor: '#f1f5f9',
    borderRadius: '8px',
    padding: '0.5rem',
  },
  matrixCell: {
    flex: 1,
    minHeight: '120px',
    borderRadius: '10px',
    borderStyle: 'solid',
    padding: '0.75rem',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'all 0.2s ease-in-out',
  },
  emptyCellText: {
    fontSize: '0.8rem',
    opacity: 0.5,
    fontWeight: 500,
  },
  amenazasList: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.5rem',
  },
  amenazaBadge: {
    backgroundColor: '#ffffff',
    borderRadius: '6px',
    padding: '0.5rem',
    boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
    display: 'flex',
    flexDirection: 'column' as const,
    border: '1px solid rgba(0,0,0,0.05)',
  },
  threatName: {
    fontWeight: 'bold' as const,
    fontSize: '0.85rem',
    color: '#0f172a',
  },
  cvssBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#fee2e2',
    color: '#ef4444',
    fontSize: '0.7rem',
    fontWeight: 'bold' as const,
    padding: '0.1rem 0.4rem',
    borderRadius: '4px',
    marginTop: '0.15rem',
  },
  threatDesc: {
    fontSize: '0.75rem',
    color: '#64748b',
    marginTop: '0.25rem',
    lineHeight: '1.2',
  },
  leyenda: {
    display: 'flex',
    gap: '1.5rem',
    marginTop: '1.5rem',
    flexWrap: 'wrap' as const,
    justifyContent: 'flex-end',
  },
  leyendaItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '0.85rem',
    color: '#475569',
    fontWeight: 500,
  },
  leyendaColor: {
    width: '14px',
    height: '14px',
    borderRadius: '4px',
    display: 'inline-block',
  }
};