import React from "react";
import { useTemplate } from "../context/TemplateContext";
import { useNavigate } from "react-router-dom";

const Preview = () => {
  const { contenido, templateSeleccionado } = useTemplate();
  const navigate = useNavigate();

  if (!templateSeleccionado) {
    return (
      <div className="p-6 text-center">
        <p className="text-xl text-red-600">
          No has seleccionado una plantilla. Por favor crea o elige una desde /crear.
        </p>
        <button
          onClick={() => navigate("/crear")}
          className="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark"
        >
          Volver a Crear
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="py-6 bg-primary text-white text-center shadow">
        <h1 className="text-4xl font-bold">{contenido.titulo}</h1>
        <p className="text-lg">{contenido.subtitulo}</p>
      </header>

      {/* Menú simulado */}
      <nav className="flex justify-center gap-6 py-4 bg-gray-100">
        {(contenido.menu || []).map((item, i) => (
          <a key={i} href="#" className="text-primary hover:underline">{item}</a>
        ))}
      </nav>

      {/* Contenido principal */}
      <main className="max-w-4xl mx-auto p-6 text-center">
        {contenido.imagenPrincipal && (
          <img
            src={contenido.imagenPrincipal}
            alt="Imagen Principal"
            className="w-full h-auto my-4 rounded shadow"
          />
        )}
        <p className="text-lg text-gray-700">{contenido.descripcion}</p>
      </main>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-6 border-t mt-10">
        {contenido.footer}
      </footer>
    </div>
  );
};

export default Preview;
