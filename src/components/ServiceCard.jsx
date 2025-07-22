import React from 'react';

export default function ServiceCard({ icon, title, children }) {
  return (
    <div className="flex flex-col items-center text-center p-8 rounded-xl border border-accent/40 hover:shadow-lg transition">
      <div className="text-4xl text-accent mb-4">{icon}</div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="mt-2 text-sm opacity-80">{children}</p>
    </div>
  );
}
