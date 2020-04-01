import React, { useState } from "react";

import { FiArrowLeft } from "react-icons/fi";

import api from "../../services/api";

import { Link, useHistory } from "react-router-dom";

import "./style.css";

import logoNameImg from "../../assets/logo-name.png";

export default function NewProduct() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

  const history = useHistory();

  const companyId = localStorage.getItem("companyId");

  async function handleNewProduct(e) {
    e.preventDefault();

    const data = {
      name,
      description,
      value
    };

    try {
      await api.post("products", data, {
        headers: {
          Authorization: companyId
        }
      });
      history.push("/profile");
    } catch (error) {
      alert("Erro ao cadastrar caso, tente novamente");
    }
  }

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

        <form onSubmit={handleNewProduct}>
          <input
            placeholder="Nome do produto"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <textarea
            placeholder="Descrição"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <input
            placeholder="Valor em reais"
            type="number"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <button className="button" type="submit">
            {" "}
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
