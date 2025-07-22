import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTemplate } from "../context/TemplateContext";

const Crear = () => {
  const navigate = useNavigate();
  const {
    prompt,
    setPrompt,
    setTemplateSeleccionado,
    setContenido,
  } = useTemplate();

  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);

  const plantillasEjemplo = [
    { id: 1, nombre: "Restaurante", imagen: "https://via.placeholder.com/300x200?text=Restaurante" },
    { id: 2, nombre: "Estudio Creativo", imagen: "https://via.placeholder.com/300x200?text=Creativo" },
    { id: 3, nombre: "Tienda Online", imagen: "https://via.placeholder.com/300x200?text=Tienda" },
  ];

  const generarConIA = async () => {
    if (!prompt.trim()) return;
    setCargando(true);
    setError(null);

    try {
      const res = await fetch("http://localhost:3001/api/generar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      if (!res.ok) throw new Error("Error al generar contenido");

      const data = await res.json();

      setContenido({
        titulo: data.titulo || "Título generado",
        subtitulo: data.subtitulo || "",
        descripcion: data.descripcion || "",
        footer: data.footer || "",
        imagenPrincipal: data.imagen || "",
        menu: ["Inicio", "Servicios", "Contacto"],
      });

      setTemplateSeleccionado({
        id: "ia-generated",
        nombre: "Sitio generado con IA",
        imagen: "https://via.placeholder.com/300x200?text=IA+Site",
      });

      navigate("/editar");
    } catch (err) {
      console.error(err);
      setError("No se pudo generar el contenido. Intenta nuevamente.");
    } finally {
      setCargando(false);
    }
  };

  const seleccionarPlantilla = (tpl) => {
    setTemplateSeleccionado(tpl);
    navigate("/editar");
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-primary">Crea tu sitio con IA</h1>
      <p className="mb-4 text-lg text-gray-700">
        Describe tu idea o negocio y genera una web profesional automáticamente.
      </p>

      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Ej: una peluquería para mascotas con reserva online"
          className="flex-grow p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button
          onClick={generarConIA}
          disabled={cargando || !prompt.trim()}
          className="bg-secondary hover:bg-secondary-dark text-white px-6 py-3 rounded disabled:opacity-50"
        >
          {cargando ? "Generando..." : "Generar con IA"}
        </button>
      </div>

      {error && <p className="text-red-600 mb-4">{error}</p>}

      <h2 className="text-2xl font-semibold mb-4 text-primary">O elige una plantilla de ejemplo:</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {plantillasEjemplo.map((tpl) => (
          <div
            key={tpl.id}
            onClick={() => seleccionarPlantilla(tpl)}
            className="cursor-pointer border border-gray-200 rounded shadow hover:shadow-md transition-all duration-200 bg-white"
          >
            <img src={tpl.imagen} alt={tpl.nombre} className="w-full h-48 object-cover rounded-t" />
            <div className="p-4 text-center font-medium text-gray-800">{tpl.nombre}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Crear;
