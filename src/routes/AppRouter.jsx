import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Servicios from '../pages/Servicios';
import Precios from '../pages/Precios';
import Contacto from '../pages/Contacto';
import Crear from "../pages/Crear";
import Editor from "../templates/Editor"
import Preview from "../templates/Preview"
import TemplatePreview from '../pages/TemplatePreview.jsx';



export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/servicios" element={<Servicios />} />
      <Route path="/precios" element={<Precios />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/crear" element={<Crear />} />
      <Route path="/editar" element={<Editor />} />
      <Route path="/preview" element={<Preview />} />
      <Route path="/probar-template" element={<TemplatePreview />} />


    </Routes>
  );
}