// src/components/ProcessTimeline.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import descubrimiento from '../assets/descubrimiento.webp';
import disenioux      from '../assets/diseñoux.webp';
import desarrollo     from '../assets/desarrollo.webp';
import despegar       from '../assets/despegar.webp';

/* ---------------- datos ---------------- */
const steps = [
  {
    title: 'Descubrimiento',
    desc: `Profundizamos en tu modelo de negocio, competencia
           y público objetivo para definir una estrategia digital
           con metas claras y medibles.`,
    img: descubrimiento,
  },
  {
    title: 'Diseño UI/UX',
    desc: `Creamos wireframes y prototipos interactivos que reflejan
           tu marca y priorizan la experiencia del usuario.`,
    img: disenioux,
  },
  {
    title: 'Desarrollo',
    desc: `Convertimos los diseños en código limpio, responsive
           y optimizado para SEO, preparado para escalar.`,
    img: desarrollo,
  },
  {
    title: 'Despliegue & Acompañamiento',
    desc: `Publicamos tu sitio con analítica y monitoreo 24/7,
           garantizando rendimiento, seguridad y mejoras continuas.`,
    img: despegar,
  },
];

/* ---------------- componente ------------ */
export default function ProcessTimeline() {
  return (
    <section className="py-24 bg-bg text-text relative">
      <h2 className="text-center text-3xl font-bold mb-10 sm:mb-16">
        Nuestro Proceso
      </h2>

      {/* ---------- MOBILE (< sm) : cascada ---------- */}
      <div className="sm:hidden px-4 flex flex-col items-start space-y-12 ">
        {steps.map((step, idx) => {
          const isLeft = idx % 2 === 0;
          const lineWidth = 160,
            lineHeight = 70;

          return (
            <div key={step.title} className="relative w-full flex flex-col ">
              <div
                className={`bg-[linear-gradient(to_right,var(--grad-start),var(--grad-end))] max-w-[260px] rounded-xl border border-accent/40 shadow p-4
                            bg-bg/70 backdrop-blur
                            ${isLeft ? 'self-start' : 'self-end'}`}
              >
                <h3 className="font-semibold mb-2 text-left">{step.title}</h3>
                <p className="text-sm opacity-80 leading-relaxed whitespace-pre-line text-left">
                  {step.desc}
                </p>
              </div>

              {idx < steps.length - 1 && (
                <svg
                  width={lineWidth}
                  height={lineHeight}
                  viewBox={`0 0 ${lineWidth} ${lineHeight}`}
                  fill="none"
                  className={`absolute top-full mt-[-2px] ${
                    isLeft ? 'left-[125px]' : 'right-[125px]'
                  } animate-pulse`}
                >
                  <path
                    d={
                      isLeft
                        ? `M0 0 C 0 ${lineHeight * 0.6} ${lineWidth * 0.8} ${
                            lineHeight * 0.6
                          } ${lineWidth * 0.8} ${lineHeight}`
                        : `M${lineWidth} 0 C ${lineWidth} ${
                            lineHeight * 0.6
                          } ${lineWidth * 0.2} ${lineHeight * 0.6} ${
                            lineWidth * 0.2
                          } ${lineHeight}`
                    }
                    stroke="var(--accent)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </div>
          );
        })}
      </div>

      {/* ---------- DESKTOP (≥ sm) : timeline ---------- */}
      <span className="hidden sm:block absolute left-1/2 top-32 bottom-12 w-[2px] -translate-x-1/2 bg-accent/30" />

      <div className="hidden sm:block max-w-5xl mx-auto px-6 space-y-24">
        {steps.map((step, idx) => {
          const isLeft = idx % 2 === 0;
          const xFrom = isLeft ? -50 : 50;

          return (
            <motion.div
              key={step.title}
              className="flex flex-row items-center"
              initial={{ opacity: 0, x: xFrom, scale: 0.96 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
            >
              <div className={`w-1/2 ${isLeft ? 'pr-6' : 'pl-6 order-2'}`}>
                <img
                  src={step.img}
                  alt={step.title}
                  className="rounded-xl shadow-lg object-cover w-full h-64"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div
                className={`w-1/2 ${
                  isLeft ? 'pl-16 text-left' : 'pr-16 text-right order-1'
                }`}
              >
                <h3 className="font-semibold text-xl mb-3">{step.title}</h3>
                <p className="text-sm opacity-80 leading-relaxed whitespace-pre-line">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* ---------- CTA común a ambas vistas ---------- */}
      <div className="text-center mt-16">
        <Link
          to="/contacto"
          className="inline-block px-8 py-3 rounded-full bg-accent text-bg font-semibold hover:brightness-90 transition"
        >
          Solicita una cotización
        </Link>
      </div>
    </section>
  );
}
