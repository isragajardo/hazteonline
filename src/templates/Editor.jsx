import React, { useState } from "react";

const Editor = () => {
  const [contenido, setContenido] = useState({
    titulo: "Bienvenido a mi sitio",
    subtitulo: "Tu negocio comienza aquí",
    descripcion: "Este es un sitio web generado con IA para mostrar tus servicios o productos.",
    menu: ["Inicio", "Servicios", "Contacto"],
    footer: "© 2025 HazteOnline.com - Todos los derechos reservados",
    imagenPrincipal: ""
  });

  const handleChange = (campo, valor) => {
    setContenido(prev => ({ ...prev, [campo]: valor }));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {/* Panel de edición */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Editor de contenido</h2>

        <label className="block mb-2">Título</label>
        <input
          className="border w-full p-2 rounded mb-4"
          value={contenido.titulo}
          onChange={(e) => handleChange("titulo", e.target.value)}
        />

        <label className="block mb-2">Subtítulo</label>
        <input
          className="border w-full p-2 rounded mb-4"
          value={contenido.subtitulo}
          onChange={(e) => handleChange("subtitulo", e.target.value)}
        />

        <label className="block mb-2">Descripción</label>
        <textarea
          className="border w-full p-2 rounded mb-4"
          rows="4"
          value={contenido.descripcion}
          onChange={(e) => handleChange("descripcion", e.target.value)}
        />

        <label className="block mb-2">Footer</label>
        <input
          className="border w-full p-2 rounded mb-4"
          value={contenido.footer}
          onChange={(e) => handleChange("footer", e.target.value)}
        />

        <label className="block mb-2">URL de imagen principal</label>
        <input
          className="border w-full p-2 rounded mb-4"
          value={contenido.imagenPrincipal}
          onChange={(e) => handleChange("imagenPrincipal", e.target.value)}
        />
      </div>

      {/* Vista previa */}
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

        <nav className="mt-6 flex justify-center gap-4 text-blue-600">
          {contenido.menu.map((item, i) => (
            <a key={i} href="#" className="hover:underline">{item}</a>
          ))}
        </nav>

        <footer className="mt-10 text-sm text-gray-500 text-center">
          {contenido.footer}
        </footer>
      </div>
    </div>
  );
};

export default Editor;
