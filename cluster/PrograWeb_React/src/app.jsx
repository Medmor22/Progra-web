import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from './components/Footer';
import { Home } from '../pages/Home';

// Componentes temporales para las rutas
const Nosotros = () => <div className="p-10 text-center text-2xl">Página Nosotros</div>;
const Servicios = () => <div className="p-10 text-center text-2xl">Página Servicios</div>;
const Contacto = () => <div className="p-10 text-center text-2xl">Página Contacto</div>;

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
        {/* Aquí se agrega el componente <Footer /> */}
      </div>
    </Router>
  );
}

export default App;