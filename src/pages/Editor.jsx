import React from "react";
import { useTemplate } from "../context/TemplateContext";
import { useNavigate } from "react-router-dom";

const Editor = () => {
  const { contenido, setContenido, templateSeleccionado } = useTemplate();
  const navigate = useNavigate();

  const handleChange = (campo, valor) => {
    setContenido(prev => ({ ...prev, [campo]: valor }));
  };

  const irAPreview = () => {
    navigate("/preview");
  };

  if (!templateSeleccionado) {
    return (
      <div className="p-6 text-center">
        <p className="text-xl text-red-600">
          No has seleccionado una plantilla. Por favor crea o elige una desde /crear.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 max-w-6xl mx-auto">
      {/* Panel de edición */}
      <div>
        <h2 className="text-2xl font-bold mb-4 text-primary">Editor de contenido</h2>

        <label className="block mb-2 font-medium">Título</label>
        <input
          className="border w-full p-2 rounded mb-4"
          value={contenido.titulo}
          onChange={(e) => handleChange("titulo", e.target.value)}
        />

        <label className="block mb-2 font-medium">Subtítulo</label>
        <input
          className="border w-full p-2 rounded mb-4"
          value={contenido.subtitulo}
          onChange={(e) => handleChange("subtitulo", e.target.value)}
        />

        <label className="block mb-2 font-medium">Descripción</label>
        <textarea
          className="border w-full p-2 rounded mb-4"
          rows="4"
          value={contenido.descripcion}
          onChange={(e) => handleChange("descripcion", e.target.value)}
        />

        <label className="block mb-2 font-medium">Footer</label>
        <input
          className="border w-full p-2 rounded mb-4"
          value={contenido.footer}
          onChange={(e) => handleChange("footer", e.target.value)}
        />

        <label className="block mb-2 font-medium">URL de imagen principal</label>
        <input
          className="border w-full p-2 rounded mb-4"
          value={contenido.imagenPrincipal}
          onChange={(e) => handleChange("imagenPrincipal", e.target.value)}
        />

        <button
          onClick={irAPreview}
          className="bg-secondary text-white px-4 py-2 rounded mt-4 hover:bg-secondary-dark"
        >
          Ver Vista Previa
        </button>
      </div>

      {/* Vista previa rápida */}
      <div className="border rounded shadow p-4 bg-white">
        <h2 className="text-3xl font-bold text-center">{contenido.titulo}</h2>
        <h3 className="text-xl text-center text-gray-600">{contenido.subtitulo}</h3>
        {contenido.imagenPrincipal && (
          <img
            src={contenido.imagenPrincipal}
            alt="Principal"
            className="w-full h-auto my-4 rounded"
          />
        )}
        <p className="text-gray-700 mt-4">{contenido.descripcion}</p>

        <footer className="mt-10 text-sm text-gray-500 text-center">
          {contenido.footer}
        </footer>
      </div>
    </div>
  );
};

export default Editor;
