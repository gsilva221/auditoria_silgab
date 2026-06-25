
import ReactMarkdown from 'react-markdown';
// Importamos el archivo Markdown real como texto plano usando Vite (?raw)
import resumenMD from '../../docs_silgab/01_resumen_silgab.md?raw';

export default function Resumen() {
  return (
    <section id="resumen" className="informe-contenido">
      <ReactMarkdown>{resumenMD}</ReactMarkdown>
    </section>
  );
}