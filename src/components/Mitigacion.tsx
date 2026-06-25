import React from 'react';
import ReactMarkdown from 'react-markdown';
// Importamos las políticas, controles y el plan de recuperación ante desastres reales
import controlesMD from '../../docs_silgab/07_controles_silgab.md?raw';
import recuperacionMD from '../../docs_silgab/08_recuperacion_silgab.md?raw';

export default function Mitigacion() {
  return (
    <section id="mitigacion" className="informe-contenido">
      <h2>Medidas de Mitigación y Recuperación (Informe B)</h2>
      
      <div style={{ marginBottom: '2rem' }}>
        <ReactMarkdown>{controlesMD}</ReactMarkdown>
      </div>
      
      <div>
        <ReactMarkdown>{recuperacionMD}</ReactMarkdown>
      </div>
    </section>
  );
}