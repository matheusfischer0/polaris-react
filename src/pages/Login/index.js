import React, { useState } from "react";

import { Link, useHistory } from "react-router-dom";

import api from "../../services/api";

import { FiLogIn } from "react-icons/fi";

import "./style.css";

import logoFullImg from "../../assets/logo-full.png";
import peopleImg from "../../assets/people-clothes.png";

export default function Login() {
  const [id, setId] = useState("");

  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post("sessions", { id });

      localStorage.setItem("companyId", id);
      localStorage.setItem("companyName", response.data.name);
      history.push("profile");
    } catch (error) {
      alert("Falha no login");
      setId("");
    }
  }

  return (
    <div>
      <div className="login-container">
        <section className="form">
          <img src={logoFullImg} alt="Polaris Store" />
          <form onSubmit={handleLogin}>
            <h1>Faça seu Login</h1>
            <input
              placeholder="Seu ID"
              value={id}
              onChange={e => {
                setId(e.target.value);
              }}
            />
            <button className="button" type="submit">
              Entrar
            </button>
            <Link className="back-link" to="/register">
              <FiLogIn size={16} color="#666666" />
              Não tenho cadastro
            </Link>
          </form>
        </section>
        <img src={peopleImg} alt="People Clothes" />
      </div>
    </div>
  );
}
