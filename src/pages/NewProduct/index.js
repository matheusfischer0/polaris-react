import React from "react";

import { FiArrowLeft } from "react-icons/fi";

import { Link } from "react-router-dom";

import "./style.css";

import logoFullImg from "../../assets/logo-full.png";
import logoNameImg from "../../assets/logo-name.png";

export default function NewProduct() {
  return (
    <div className="new-product-container">
      <div className="content">
        <section>
          <img src={logoNameImg} alt="Polaris Store" />
          <h1>Cadastro de produto</h1>
          <p>
            Descreva seu produto detalhadamente para facilitar o entendimento de
            seu cliente
          </p>
          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#666666" />
            Retornar para seu perfil
          </Link>
        </section>

        <form>
          <input placeholder="Nome do produto" />
          <textarea placeholder="Descrição" />
          <input placeholder="Valor em reais" type="number" />
          <button className="button" type="submit">
            {" "}
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
