import React from 'react';

export const Home = () => {
  return (
    <div className="bg-claugto-light min-h-screen text-claugto-dark">
      {/* HEROSECTION */}
      <section className="bg-gradient-to-r from-claugto-navy to-claugto-blue text-white py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Impulsando la Industria Automotriz de Guanajuato
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Red de colaboración entre empresas, academia y gobierno para el desarrollo de la competitividad y la mentofactura en el sector automotriz.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <button className="bg-claugto-cyan hover:bg-blue-400 text-white font-bold py-3 px-6 rounded-lg transition-all shadow-md">
              Conoce los Comités
            </button>
            <button className="border border-white hover:bg-white hover:text-claugto-navy font-bold py-3 px-6 rounded-lg transition-all">
              Directorio de Proveedores
            </button>
          </div>
        </div>
      </section>

      {/* MÉTRICAS / IMPACTO */}
      <section className="max-w-7xl mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-claugto-cyan">
          <h3 className="text-4xl font-extrabold text-claugto-navy">180+</h3>
          <p className="text-gray-600 mt-2">Empresas e Instituciones Miembros</p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-claugto-blue">
          <h3 className="text-4xl font-extrabold text-claugto-navy">80,000+</h3>
          <p className="text-gray-600 mt-2">Empleos Directos Representados</p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-claugto-navy">
          <h3 className="text-4xl font-extrabold text-claugto-navy">100%</h3>
          <p className="text-gray-600 mt-2">Compromiso con la Innovación</p>
        </div>
      </section>
    </div>
  );
};