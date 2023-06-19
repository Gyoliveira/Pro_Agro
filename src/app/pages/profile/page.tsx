"use client";
import Image from "next/image";
import "./style.css";
import Input from "./components/Input";
import Link from "next/link";
import Selection from "./components/Selection";

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

export default function Profile() {
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
    <main className="flex min-h-screen flex-row min-w bg-bg_profile bg-no-repeat bg-cover">
      <div className="flex flex-col text-text-light relative bg-my_bg_lateral_image bg-primary-default min-w-1/5 p-5">
        <div className="flex flex-row justify-between mb-5">
          <div className="relative w-28 h-36 rounded-full">
            <Image
              src="/img/rogerio.png"
              fill
              className="object-cover"
              alt={`alt`}
              style={imageStyle}
            />
          </div>

          <h1>Pro Agro</h1>
        </div>

        <div className="mb-10">
          <h1 className="-ml-3">Bem vindo,</h1>
          <h1>~nome</h1>
        </div>

        <div>
          <Selection icon="home" name="home" />
          <Selection icon="user" name="perfil" />
          <Link href="/pages/profile/location">
            <Selection icon="place" name="localização" />
          </Link>
          <Link href="/pages/profile/company">
            <Selection icon="work" name="empresa" />
          </Link>
        </div>

        <div className="absolute bottom-5">
          <Link href="/pages/login">
            <Selection icon="logout" name="desconectar" />
          </Link>
        </div>
      </div>
      <div className=" flex min-w-4/5 p-5 px-20">
        <div className="grid grid-cols-3 gap-10 py-16">
          <Input placeholder="Nome" type="text" color="text-text-default"/>
          <Input placeholder="Sobrenome" type="text" color="text-text-default"/>
          <Input placeholder="Nome Social" type="text" color="text-text-default"/>
          <Input placeholder="Gênero" type="text" color="text-text-default"/>
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
    </main>
  );
}
