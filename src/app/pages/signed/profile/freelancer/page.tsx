"use client";
import Image from "next/image";
import "../style.css";
import Input from "../components/Input";
import Link from "next/link";
import Selection from "../components/Selection";

type User = {
  id: number;
  nome: string;
  sobrenome: string;
  nomeSocial: string;
  genero: string;
  cpf: string;
  email: string;
  telefone: string;
  dataDeNascimento: string;
  telefoneFixo: string;
  senha: string;
  confirmarSenha?: string;
};

export default function ProfileFreelancer() {
  const imageStyle = {
    borderRadius: "40%",
  };

  const getCepData = async (cep: string) => {
    try {
      const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const updateMyAccount = async () => {
    try {
      const res = await fetch(`url para deletar a conta`);
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteMyAccount = async (id: number) => {
    try {
      const res = await fetch(`url para deletar a conta`);
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex min-h-screen flex-row bg-primary-default">
      <div className=" flex min-w-4/5 p-5 px-20">
        <div className="grid grid-cols-3 gap-10 py-16 text-text-default">
          <Input placeholder="Nome" type="text" color="text-text-default"/>
          <Input placeholder="Sobrenome" type="text" color="text-text-default"/>
          <Input placeholder="Nome Social" type="text" color="text-text-default"/>
          <Input placeholder="Genero" type="text" color="text-text-default"/>
          <Input placeholder="CPF" type="text" color="text-text-default"/>
          <Input placeholder="Data de Nascimento" type="date" color="text-text-default"/>
          <Input placeholder="Celular" type="text" color="text-text-default"/>
          <Input placeholder="Telefone Fixo" type="text" color="text-text-default"/>
          <Input placeholder="Senha Atual" type="password" color="text-text-default"/>
          <Input placeholder="Nova Senha" type="password" color="text-text-default"/>
          <Input placeholder="Confirmação de Senha" type="text" color="text-text-default"/>
        </div>
        
        <div className="absolute bottom-5">
          <button
            onClick={() => getCepData("38413354")}
            className="bg-warning w-48 py-2 rounded-full text-text-light mr-10"
          >
            <span>Deletar Conta</span>
          </button>
          <button className="text-text-light mt-10 bg-gradient-to-r from-primary-default to-primary-light w-48 py-2 rounded-full">
          <span>Confirmar</span>
        </button>
        </div>
      </div>
    </div>
  );
}
