import React, { createContext, useContext, useState } from "react";

// Crear el contexto
const TemplateContext = createContext();

// Hook personalizado para consumir el contexto
export const useTemplate = () => {
  return useContext(TemplateContext);
};

// Componente proveedor del contexto global
export const TemplateProvider = ({ children }) => {
  const [prompt, setPrompt] = useState(""); // Descripción del sitio ingresada por el usuario
  const [templateSeleccionado, setTemplateSeleccionado] = useState(null); // Template elegido
  const [contenido, setContenido] = useState({
    titulo: "Bienvenido a mi sitio",
    subtitulo: "Tu negocio comienza aquí",
    descripcion:
      "Este es un sitio web generado con IA para mostrar tus servicios o productos.",
    menu: ["Inicio", "Servicios", "Contacto"],
    footer: "© 2025 HazteOnline.com - Todos los derechos reservados",
    imagenPrincipal: "",
  });

  return (
    <TemplateContext.Provider
      value={{
        prompt,
        setPrompt,
        templateSeleccionado,
        setTemplateSeleccionado,
        contenido,
        setContenido,
      }}
    >
      {children}
    </TemplateContext.Provider>
  );
};
