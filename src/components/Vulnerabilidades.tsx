import React from 'react';
import ReactMarkdown from 'react-markdown';
// Importamos los 3 ataques reales desde tu carpeta de documentos
import sqliMD from '../../docs_silgab/02_sqli_silgab.md?raw';
import xssMD from '../../docs_silgab/03_xss_silgab.md?raw';
import cmdMD from '../../docs_silgab/04_cmd_silgab.md?raw';

export default function Vulnerabilidades() {
  return (
    <section id="ataques" className="informe-contenido">
      <h2>Evidencia de Vulnerabilidades (Informe A)</h2>
      
      {/* Contenedor de Inyección SQL con borde verde de advertencia */}
      <div style={{ borderLeft: '4px solid #2ecc71', paddingLeft: '1rem', marginBottom: '2rem' }}>
        <ReactMarkdown>{sqliMD}</ReactMarkdown>
      </div>

      {/* Contenedor de XSS con borde naranja de advertencia */}
      <div style={{ borderLeft: '4px solid #f39c12', paddingLeft: '1rem', marginBottom: '2rem' }}>
        <ReactMarkdown>{xssMD}</ReactMarkdown>
      </div>

      {/* Contenedor de Inyección de Comandos con borde rojo de advertencia */}
      <div style={{ borderLeft: '4px solid #e74c3c', paddingLeft: '1rem' }}>
        <ReactMarkdown>{cmdMD}</ReactMarkdown>
      </div>
    </section>
  );
}