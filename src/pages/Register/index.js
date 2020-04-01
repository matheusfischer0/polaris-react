import React from "react";

import { FiArrowLeft } from "react-icons/fi";

import { Link } from "react-router-dom";

import "./style.css";

import logoFullImg from "../../assets/logo-full.png";
import logoNameImg from "../../assets/logo-name.png";

export default function Register() {
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoNameImg} alt="Polaris Store" />
          <h1>Cadastro</h1>
          <p>Faça seu cadastro, ajude lojistas a encontrar seus produtos</p>
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#666666" />
            Já possuo cadastro
          </Link>
        </section>

        <form>
          <input placeholder="Nome da empresa" />
          <input placeholder="E-mail" type="email" />
          <input placeholder="whatsapp" />
          <div className="input-group">
            <input placeholder="Cidade" />
            <input placeholder="UF" style={{ width: 80 }} />
          </div>
          <button className="button" type="submit">
            {" "}
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
