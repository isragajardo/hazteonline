import { FaRocket, FaShieldAlt, FaTools } from 'react-icons/fa';

export default function Benefits() {
  const items = [
    {
      icon: <FaRocket className="text-3xl text-accent" />,
      title: 'Velocidad',
      text: 'Sitios web desarrollados con tecnología de punta para una velocidad ultrarrápida.',
    },
    {
      icon: <FaShieldAlt className="text-3xl text-accent" />,
      title: 'Seguridad',
      text: 'Navegación segura para tus clientes: certificado SSL y copias de seguridad sin esfuerzo.',
    },
    {
      icon: <FaTools className="text-3xl text-accent" />,
      title: 'Soporte',
      text: 'Acompañamiento y mantenimiento continuo, siempre que tu proyecto lo requiera.',
    },
  ];

  return (
    <section className="py-16 bg-[linear-gradient(to_right,var(--grad-start),var(--grad-end))]
   text-text">
      <div className="max-w-6xl mx-auto px-6 grid gap-8 sm:grid-cols-3">
        {items.map(({ icon, title, text }) => (
          <div
            key={title}
            className="flex flex-col items-center text-center p-6 rounded-xl border border-accent/40 hover:-translate-y-1 transition shadow"
          >
            {icon}
            <h3 className="mt-4 font-semibold text-lg">{title}</h3>
            <p className="mt-2 text-sm opacity-80">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
