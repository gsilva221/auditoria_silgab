
import ReactMarkdown from 'react-markdown';
// Importamos los activos y la matriz de riesgos reales
import activosMD from '../../docs_silgab/05_activos_silgab.md?raw';
import matrizMD from '../../docs_silgab/06_matriz_silgab.md?raw';

export default function Matriz() {
  return (
    <section id="matriz" className="informe-contenido">
      <h2>Activos de Información y Matriz de Riesgo (Informe B)</h2>
      
      <div style={{ marginBottom: '2rem' }}>
        <ReactMarkdown>{activosMD}</ReactMarkdown>
      </div>
      
      <div>
        <ReactMarkdown>{matrizMD}</ReactMarkdown>
      </div>
    </section>
  );
}