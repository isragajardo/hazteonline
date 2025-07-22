// src/components/Hero.jsx
import React from 'react';
import heroImg from '../assets/hero-workspace.webp';

export default function Hero() {
  return (
    <section
      className="
        relative
        h-[40vh]        /* móviles: 40 % de alto */
        sm:h-[50vh]     /* ≥640 px: 50 % de alto */
        flex items-center justify-center text-center
      "
    >
      {/* Imagen de fondo */}
      <img
        src={heroImg}
        alt="Persona trabajando en un MacBook Pro — HazteOnline"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        decoding="async"
      />

      {/* Capa oscura para contraste */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Contenido */}
      <div className="relative z-10 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
          HazteOnline
        </h2>
        <p className="text-lg sm:text-xl text-white">
          Tu presencia digital empieza aquí
        </p>
      </div>
    </section>
  );
}
