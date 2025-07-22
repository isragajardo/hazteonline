// src/pages/Servicios.jsx
import React from 'react';
import { FaGlobe, FaShoppingCart, FaSearch, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';

export default function Servicios() {
  return (
    <section className="py-20 bg-bg text-text">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-fuchsia-700 text-3xl font-bold mb-12 text-accent">
          Nuestros Servicios
        </h2>

        {/* Grid responsivo */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <ServiceCard icon={<FaGlobe />} title="Web Informativa">
            Diseño responsive y contenido autoadministrable.
          </ServiceCard>

          <ServiceCard icon={<FaShoppingCart />} title="Tienda Online">
            Catálogo, pagos en línea y logística integrada.
          </ServiceCard>

          <ServiceCard icon={<FaSearch />} title="SEO Básico">
            Optimización de velocidad, meta‑tags y schema.
          </ServiceCard>

          <ServiceCard icon={<FaEnvelope />} title="Dominios & Correos">
            Configuración de DNS y cuentas corporativas.
          </ServiceCard>
        </div>

        {/* CTA final */}
        <div className="text-center">
          <Link
            to="/contacto"
            className="
              mt-12 inline-block
              px-8 py-3 rounded-full
              bg-accent text-bg font-semibold
              hover:brightness-90 transition
            "
          >
            Solicita una cotización
          </Link>
        </div>
      </div>
    </section>
  );
}

