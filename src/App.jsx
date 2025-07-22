import React from 'react';
import AppRouter from './routes/AppRouter';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800 bg-[linear-gradient(to_right,var(--grad-start),var(--grad-end))]">
      <Header />
      <main className="flex-grow">
        
        <AppRouter />
      </main>
      <Footer />
    </div>
  );
}

export default App;