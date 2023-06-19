"use client";
import { useState } from "react";
import Link from "next/link";

import Input from "../../components/Input";
import { FormCreateAccount, FormLogin } from "./api/form";

export default function Login() {
  const [createAccount, setCreateAccount] = useState(false);

  const showCreateAccount = () => {
    setCreateAccount(!createAccount);
  };

  const handleSignIn = async () => {
    try {
      const res = await fetch(`url para logar a conta`);
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleCreateAccount = async () => {
    try {
      const res = await fetch(`url para criar a conta`);
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <main className="flex flex-row static min-h-screen bg-login_page bg-cover bg-no-repeat bg-center">
      <div
        className={`absolute min-w-1/2 h-screen bg-slate-950 transition duration-200  ${
          createAccount && "translate-x-full"
        }`}
      />
      <div
        className={
          !createAccount
            ? "z-10 flex flex-col justify-center px-16 min-w-1/2 text-text-light transition duration-200"
            : "min-w-1/2"
        }
      >
        {createAccount ? (
          <div className="flex flex-row justify-end text-text-light">
            <button
              className="bg-gradient-to-r from-primary-default to-primary-light w-40 p-3"
              onClick={() => showCreateAccount()}
            >
              <span>Entrar</span>
            </button>
          </div>
        ) : (
          <>
            <h1 className="text-6xl mb-5">Login</h1>
            <span className="mb-10">
              Faça login aqui se você ja tem uma conta
            </span>

            <FormLogin />

            {/* <div className="flex flex-row justify-center">
              <span>ou</span>
            </div> */}
          </>
        )}
      </div>

      <div
        className={
          createAccount
            ? "z-10 flex flex-col justify-center px-16 bg-slate-950 min-w-1/2 text-text-light transition duration-200"
            : "min-w-1/2"
        }
      >
        {!createAccount ? (
          <div className="flex flex-row text-text-light">
            <button
              className="bg-gradient-to-r from-primary-default to-primary-light w-40 p-3"
              onClick={() => showCreateAccount()}
            >
              <span>Cadastre-se</span>
            </button>
          </div>
        ) : (
          <>
            <h1 className="text-6xl mb-5">Cadastre-se</h1>
            <span className="mb-10">
              Faça seu cadastro para conseguir acessar a plataforma
            </span>

            {/* <form action="/pages/login/api" method="post">
           
            </form> */}
            <FormCreateAccount />

            {/* <div className="flex flex-row justify-center">
              <span>ou</span>
            </div> */}
          </>
        )}
      </div>
    </main>
  );
}
