import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Home from "./paginas/Home";
import Sobre from "./paginas/Sobre";
import CadastroEvento from "./paginas/CadastroEvento";
import "./style.css";
import "./header/header.css";
import "./footer/footer.css";
import "./paginas/cadastroEvento.css";
import "./componentes/modal.css";


function App() {
  const [eventos, setEventos] = useState([]);

  const handleCadastrar = (novoEvento) => {
    setEventos((prev) => [...prev, novoEvento]);
  };

  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home eventos={eventos} />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route
            path="/CadastroEvento"
            element={<CadastroEvento onCadastrar={handleCadastrar} />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
