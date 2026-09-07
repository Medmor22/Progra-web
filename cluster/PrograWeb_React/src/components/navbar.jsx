import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-claugto-navy text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* LOGO */}
          <div className="flex items-center space-x-3">
            <Link to="/" className="text-2xl font-bold tracking-wider text-claugto-cyan">
              CLAUGTO
            </Link>
            <span className="hidden md:inline text-xs border-l border-gray-500 pl-3 text-gray-300">
              Cluster Automotriz de Guanajuato
            </span>
          </div>

          {/* MENÚ DESKTOP */}
          <div className="hidden lg:flex space-x-6 text-sm font-medium">
            <Link to="/" className="hover:text-claugto-cyan transition-colors">Inicio</Link>
            <Link to="/nosotros" className="hover:text-claugto-cyan transition-colors">Nosotros</Link>
            <Link to="/asociados" className="hover:text-claugto-cyan transition-colors">Asociados</Link>
            <Link to="/servicios" className="hover:text-claugto-cyan transition-colors">Servicios</Link>
            <Link to="/proyectos" className="hover:text-claugto-cyan transition-colors">Proyectos</Link>
            <Link to="/contacto" className="hover:text-claugto-cyan transition-colors">Contacto</Link>
          </div>

          {/* BOTÓN DE AFILIACIÓN */}
          <div className="hidden lg:block">
            <Link 
              to="/contacto" 
              className="bg-claugto-cyan hover:bg-claugto-blue text-white px-4 py-2 rounded-md font-semibold text-sm transition-all shadow"
            >
              Unete al Cluster
            </Link>
          </div>

          {/* BOTÓN MÓVIL */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* MENÚ MÓVIL DESPLEGABLE */}
      {isOpen && (
        <div className="lg:hidden bg-claugto-navy border-t border-gray-700 px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/" className="block px-3 py-2 rounded-md hover:bg-claugto-blue">Inicio</Link>
          <Link to="/nosotros" className="block px-3 py-2 rounded-md hover:bg-claugto-blue">Nosotros</Link>
          <Link to="/asociados" className="block px-3 py-2 rounded-md hover:bg-claugto-blue">Asociados</Link>
          <Link to="/servicios" className="block px-3 py-2 rounded-md hover:bg-claugto-blue">Servicios</Link>
          <Link to="/proyectos" className="block px-3 py-2 rounded-md hover:bg-claugto-blue">Proyectos</Link>
          <Link to="/contacto" className="block px-3 py-2 rounded-md hover:bg-claugto-blue">Contacto</Link>
        </div>
      )}
    </nav>
  );
};