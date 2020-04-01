import React from "react";

import { Link } from "react-router-dom";

import { FiLogIn } from "react-icons/fi";

import "./style.css";

import logoFullImg from "../../assets/logo-full.png";
import peopleImg from "../../assets/people-clothes.png";

export default function Login() {
  return (
    <div>
      <div className="login-container">
        <section className="form">
          <img src={logoFullImg} alt="Polaris Store" />
          <form>
            <h1>Faça seu Login</h1>
            <input placeholder="Seu ID" />
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
