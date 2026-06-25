
import Resumen from './components/Resumen';
import Vulnerabilidades from './components/Vulnerabilidades';
import Matriz from './components/Matriz';
import Mitigacion from './components/Mitigacion';
import './App.css'; // Asegúrate de importar tus estilos

function App() {
  return (
    <>
      <header>
        <div className="logo">TurBus - Informe IA</div>
        <nav className="topics">
            <a href="#resumen">Resumen Ejecutivo</a>
            <a href="#ataques">Vulnerabilidades</a>
            <a href="#matriz">Matriz de Riesgo</a>
            <a href="#mitigacion">Mitigación y DR</a>
        </nav>
      </header>

      <main>
        {/* Aquí llamas a los componentes que renderizarán tus .md */}
        <Resumen />
        <Vulnerabilidades />
        <Matriz />
        <Mitigacion />
      </main>

      <footer>
        <p>&copy; 2026 Auditoría de Seguridad - Evaluación Unidad 3. Desarrollado en React.</p>
      </footer>
    </>
  );
}

export default App;