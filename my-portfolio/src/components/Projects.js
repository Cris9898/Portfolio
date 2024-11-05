import React from 'react';

function Projects() {
  return (
    <section className="container my-5">
      <h2>Proyectos</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Proyecto 1</h5>
              <p className="card-text">Descripción breve del proyecto.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Proyecto 2</h5>
              <p className="card-text">Descripción breve del proyecto.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;