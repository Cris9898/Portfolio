import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Loader from './components/Loader';
import './styles/App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula un tiempo de carga con un retraso de 2 segundos
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loader /> // Muestra el componente Loader mientras loading es true
      ) : (
        <>
          <Header />
          <About />
          <Projects />
          <Contact />
        </>
      )}
    </div>
  );
}

export default App;
