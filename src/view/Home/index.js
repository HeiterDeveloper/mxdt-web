import React from "react"

import "./style.css";

const Home = () => {
    return(
        <section className="container">
        <div className="card">
          <img src="https://static.thenounproject.com/png/158278-200.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Profissional</h5>
            <a href="/listagem/profissional" className="btn btn-primary">Ir para cadastro</a>
          </div>
        </div>

        <div className="card">
          <img src="https://static.thenounproject.com/png/1924175-200.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Tipos de profissional</h5>
            <a href="/listagem/tipoDeProfissional" className="btn btn-primary">Ir para cadastro</a>
          </div>
        </div>
      </section>
    );
};

export default Home;