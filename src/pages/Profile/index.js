import React from "react";

import { Link } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";

import "./style.css";

import logoImg from "../../assets/logo-full.png";

export default function Profile() {
  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Polaris Store" />
        <span>Bem vinda Fischer Textil</span>
        <Link className="button" to="/product/new">
          Cadastrar novo caso
        </Link>
        <button type="button">
          {" "}
          <FiPower size={18} color="#e02037"></FiPower>
        </button>
      </header>

      <h1>Produtos cadastrados</h1>

      <ul>
        <li>
          <strong>PRODUTO:</strong>
          <p>Caso teste</p>

          <strong>DESCRICAO:</strong>
          <p>Produto 1 teste</p>

          <strong>Valor:</strong>
          <p>R$ 260,00</p>

          <button type="button">
            <FiTrash2 size={15} color="#666666"></FiTrash2>
          </button>
        </li>
        <li>
          <strong>PRODUTO:</strong>
          <p>Caso teste</p>

          <strong>DESCRICAO:</strong>
          <p>Produto 1 teste</p>

          <strong>Valor:</strong>
          <p>R$ 260,00</p>

          <button type="button">
            <FiTrash2 size={15} color="#666666"></FiTrash2>
          </button>
        </li>
        <li>
          <strong>PRODUTO:</strong>
          <p>Caso teste</p>

          <strong>DESCRICAO:</strong>
          <p>Produto 1 teste</p>

          <strong>Valor:</strong>
          <p>R$ 260,00</p>

          <button type="button">
            <FiTrash2 size={15} color="#666666"></FiTrash2>
          </button>
        </li>
        <li>
          <strong>PRODUTO:</strong>
          <p>Caso teste</p>

          <strong>DESCRICAO:</strong>
          <p>Produto 1 teste</p>

          <strong>Valor:</strong>
          <p>R$ 260,00</p>

          <button type="button">
            <FiTrash2 size={15} color="#666666"></FiTrash2>
          </button>
        </li>
      </ul>
    </div>
  );
}
