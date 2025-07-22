import React from 'react';

const planes = [
  { nombre: "Básico", precio: "$120.000", descripcion: "Sitio informativo de 1 a 3 secciones, diseño responsive." },
  { nombre: "Medio", precio: "$180.000", descripcion: "Sitio con hasta 5 secciones, formulario, galería." },
  { nombre: "Ecommerce", precio: "$250.000", descripcion: "Tienda online con carrito, productos, pagos." }
];

export default function PlanesPrecios() {
  return (
    <section className="px-6 py-16 bg-gray-50 text-center">
      <h3 className="text-3xl font-bold text-fuchsia-700 mb-10">Planes y Precios</h3>
      <div className="grid md:grid-cols-3 gap-8">
        {planes.map(plan => (
          <div key={plan.nombre} className="border rounded-xl p-6 shadow hover:shadow-lg transition">
            <h4 className="text-2xl font-bold text-fuchsia-600 mb-2">{plan.nombre}</h4>
            <p className="text-xl font-semibold mb-4">{plan.precio}</p>
            <p className="text-gray-600">{plan.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
}