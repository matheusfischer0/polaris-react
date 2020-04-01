import React, { useState } from "react";

import api from "../../services/api";

import { FiArrowLeft } from "react-icons/fi";

import { Link, useHistory } from "react-router-dom";

import "./style.css";

import logoNameImg from "../../assets/logo-name.png";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [uf, setUf] = useState("");

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();
    const data = {
      name,
      email,
      whatsapp,
      city,
      uf
    };
    try {
      const response = await api.post("companies", data);
      alert(`Seu ID de acesso: ${response.data.id}`);
      history.push("/");
    } catch {
      alert("Erro no cadastro: não cadastrado");
    }
  }

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

        <form onSubmit={handleRegister}>
          <input
            placeholder="Nome da empresa"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            placeholder="E-mail"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            placeholder="whatsapp"
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
          />
          <div className="input-group">
            <input
              placeholder="Cidade"
              value={city}
              onChange={e => setCity(e.target.value)}
            />
            <input
              placeholder="UF"
              value={uf}
              onChange={e => setUf(e.target.value)}
              style={{ width: 80 }}
            />
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
