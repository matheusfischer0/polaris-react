import React, { useEffect, useState } from "react";

import { Link, useHistory } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";

import api from "../../services/api";

import "./style.css";

import logoImg from "../../assets/logo-full.png";

export default function Profile() {
  const [products, setProducts] = useState([]);

  const history = useHistory();

  const companyId = localStorage.getItem("companyId");
  const companyName = localStorage.getItem("companyName");

  useEffect(() => {
    api
      .get("profile", {
        headers: {
          Authorization: companyId
        }
      })
      .then(response => {
        setProducts(response.data);
      });
  }, []);

  async function handleDeleteProduct(id) {
    try {
      await api.delete(`products/${id}`, {
        headers: {
          Authorization: companyId
        }
      });

      setProducts(products.filter(product => product.id !== id));
    } catch (error) {
      alert("Erro ao deletar caso, tente novamente");
    }
  }

  function handleLogout() {
    localStorage.clear();
    history.push("/");
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Polaris Store" />
        <span>Bem vinda {companyName}</span>
        <Link className="button" to="/product/new">
          Cadastrar novo caso
        </Link>
        <button type="button" onClick={handleLogout}>
          {" "}
          <FiPower size={18} color="#e02037"></FiPower>
        </button>
      </header>

      <h1>Produtos cadastrados</h1>

      <ul>
        {products.map(product => (
          <li key={product.id}>
            <strong>PRODUTO:</strong>
            <p>{product.name}</p>

            <strong>DESCRICAO:</strong>
            <p>{product.description}</p>

            <strong>Valor:</strong>
            <p>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
              }).format(product.value)}
            </p>

            <button
              type="button"
              onClick={() => handleDeleteProduct(product.id)}
            >
              <FiTrash2 size={15} color="#666666"></FiTrash2>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
