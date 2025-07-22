// src/pages/TemplatePreview.jsx
import React, { useEffect, useState } from 'react';

export default function TemplatePreview() {
  const [template, setTemplate] = useState(null);

  useEffect(() => {
    fetch('/template_paradigm_shift.json')
      .then((res) => res.json())
      .then((data) => setTemplate(data))
      .catch((err) => console.error('Error cargando template:', err));
  }, []);

  if (!template) {
    return <div className="p-8 text-center text-lg">Cargando template...</div>;
  }

  return (
    <div className="p-6 space-y-12 bg-white text-gray-800 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-indigo-700">
        {template.templateName}
      </h1>
      <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto">
        {template.description}
      </p>

      {template.sections.map((section, index) => (
        <section key={section.id} className="bg-gray-50 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-2 text-gray-900">
            {section.variables?.title || section.title}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {section.variables?.content || section.content}
          </p>
        </section>
      ))}
    </div>
  );
}
