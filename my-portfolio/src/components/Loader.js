import React from 'react';
import '../styles/Loader.css';

function Loader() {
  return (
    <div className="loader-container">
      <div className="spinner"></div>
      <p className="loading-text">Cargando...</p>
    </div>
  );
}

export default Loader;