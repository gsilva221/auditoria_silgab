import ReactMarkdown from 'react-markdown';
// Importamos los 3 ataques reales desde tu carpeta de documentos
import sqliMD from '../../docs_silgab/02_sqli_silgab.md?raw';
import xssMD from '../../docs_silgab/03_xss_silgab.md?raw';
import cmdMD from '../../docs_silgab/04_cmd_silgab.md?raw';

export default function Vulnerabilidades() {
  
  // FUNCIÓN MAGICA: Intercepta las imágenes del Markdown y ajusta la ruta 
  // para que Vite las encuentre en la carpeta "public" sin romper tu VS Code.
  const renderers = {
    img: (props: any) => {
      const imageSrc = props.src?.startsWith('/') ? props.src : `/${props.src}`;
      return <img src={imageSrc} alt={props.alt || 'Evidencia de auditoría'} />;
    }
  };

  return (
    <section id="ataques" className="informe-contenido">
      <h2>Evidencia de Vulnerabilidades (Informe A)</h2>
      
      {/* Contenedor de Inyección SQL con borde verde */}
      <div style={{ borderLeft: '4px solid #2ecc71', paddingLeft: '1rem', marginBottom: '2rem' }}>
        <ReactMarkdown components={renderers}>{sqliMD}</ReactMarkdown>
      </div>

      {/* Contenedor de XSS con borde naranja */}
      <div style={{ borderLeft: '4px solid #f39c12', paddingLeft: '1rem', marginBottom: '2rem' }}>
        <ReactMarkdown components={renderers}>{xssMD}</ReactMarkdown>
      </div>

      {/* Contenedor de Inyección de Comandos con borde rojo */}
      <div style={{ borderLeft: '4px solid #e74c3c', paddingLeft: '1rem' }}>
        <ReactMarkdown components={renderers}>{cmdMD}</ReactMarkdown>
      </div>
    </section>
  );
}