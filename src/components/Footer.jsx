// src/components/Footer.jsx
import React from 'react';
import ThemeToggleButton from '../components/ThemeToggleButton';
import { FaInstagram, FaTiktok, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="
    text-text py-6 mt-16
    bg-[linear-gradient(to_right,var(--grad-start),var(--grad-end))]
  ">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        {/* Iconos de RR. SS. + botón de tema */}
        <div className="flex justify-center items-center gap-6 text-2xl mb-4">
          <a
            href="https://www.instagram.com/hazteonline/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-300"
          >
            <FaTiktok />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-300"
          >
            <FaLinkedin />
          </a>

          {/* 🎨 Botón para alternar temas */}
          <ThemeToggleButton className="border-none hover:text-pink-300" />
        </div>

        <p className="text-xs">
          © 2025 HazteOnline ‑ Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
