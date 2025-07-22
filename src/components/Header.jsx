// src/components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-letras-blancas.png';
import ThemeToggleButton from '../components/ThemeToggleButton';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="
        relative z-50                           /* ← clave para el menú */
        w-full flex justify-center text-text
        py-6
        bg-[linear-gradient(to_right,var(--grad-start),var(--grad-end))]
      "
    >
      <div className="flex items-center justify-between w-full max-w-7xl bg-[rgba(0,0,0,0.25)] backdrop-blur-md px-6 py-2 rounded-full shadow-md">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="HazteOnline" className="h-[90px] w-auto object-contain" />
        </Link>

        {/* Botón Hamburguesa */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-text sm:hidden text-2xl focus:outline-none"
        >
          ☰
        </button>

        {/* Menú de navegación grande */}
        <nav className="hidden sm:flex items-center gap-6 text-text text-sm sm:text-base">
          <ThemeToggleButton className="border-none hover:text-pink-300 transition" />
          <Link to="/" className="hover:text-purple-300 transition">Inicio</Link>
          <Link to="/servicios" className="hover:text-purple-300 transition">Servicios</Link>
          <Link to="/precios" className="hover:text-purple-300 transition">Precios</Link>
          <Link to="/contacto" className="hover:text-purple-300 transition">Contacto</Link>
          <Link
            to="/contacto"
            className="ml-4 px-4 py-2 border border-purple-400 text-purple-300 rounded-full hover:bg-purple-500 hover:text-white transition"
          >
            Pedir Cotizacion
          </Link>
        </nav>
      </div>

      {/* Menú desplegable para móviles */}
      {isOpen && (
        <div className="absolute top-full mt-2 w-[90%] max-w-7xl bg-[rgba(0,0,0,0.25)] backdrop-blur-md rounded-xl text-text flex flex-col items-center py-4 space-y-4 shadow-md sm:hidden">
          <ThemeToggleButton />
          <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-purple-300 transition">Inicio</Link>
          <Link to="/servicios" onClick={() => setIsOpen(false)} className="hover:text-purple-300 transition">Servicios</Link>
          <Link to="/precios" onClick={() => setIsOpen(false)} className="hover:text-purple-300 transition">Precios</Link>
          <Link to="/contacto" onClick={() => setIsOpen(false)} className="hover:text-purple-300 transition">Contacto</Link>
          <Link
            to="/contacto"
            onClick={() => setIsOpen(false)}
            className="text-text px-4 py-2 border border-purple-400 bg-[linear-gradient(to_right,var(--grad-start),var(--grad-end))] text-purple-300 rounded-full hover:bg-purple-500 hover:text-white transition"
          >
            Pedir Suscripción
          </Link>
        </div>
      )}
    </header>
  );
}
