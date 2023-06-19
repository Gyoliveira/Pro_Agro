"use client";
import Image from "next/image";
import "../style.css";
import Input from "../components/Input";
import Link from "next/link";
import Selection from "../components/Selection";
import { Form, Formik } from "formik";
import * as yup from "yup";
import { useRouter } from "next/router";

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

export default function ProfileFreelancer(props) {
  const router = useRouter();

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

  const handleSubmit = async (data: any) => {
    try {
      const dataBody = {
        email: router?.query?.email,
        cpf: data.cpf,
        name: data.name,
        lastName: data.lastName,
        dataBirth: "1999-01-01",
        gender: 0,
        phone: data.phone,
        oldPassword: data.oldPassword,
        newPassword: data.newPassword,
      }
      

      const JSONdata = JSON.stringify(dataBody);
      console.log(JSONdata);

      const response = await fetch("http://localhost:8080/usuarios", {
        method: "POST",
        body: JSONdata,
      });

      const result = await response.json();
      console.log(result);
      // push("/pages/profile");
    } catch (err) {
      alert("deu n mano");
    }
  };

  return (
    <Formik
      validateOnChange={false}
      validateOnBlur={false}
      initialValues={{
        cpf: "",
        name: "",
        lastName: "",
        dataBirth: Date,
        gender: "",
        phone: "",
        oldPassword: "",
        newPassword: "",
      }}
      onSubmit={async (values) => {
        handleSubmit(values);
        // console.log(values)
      }}
      validationSchema={yup.object({
        cpf: yup.string().required("Cpf obrigatorio"),
        name: yup.string().required("Nome obrigatorio"),
        lastName: yup.string().required("Sobrenome obrigatorio"),
        phone: yup.string().required("Contato obrigatorio"),
        oldPassword: yup.string().trim().required("Senha obrigatorio"),
        newPassword: yup.string().trim().required("Senha obrigatorio"),
      })}
    >
      {({ errors, touched }) => (
        <Form>
          <div className="flex min-h-80vh flex-row bg-slate-100">
            <div className=" flex min-w-4/5 p-5 px-20">
              <div className="grid grid-cols-3 gap-16 py-16 text-text-default">
                <Input
                  placeholder="Nome"
                  type="text"
                  color="text-text-default"
                  name="name"
                  error={errors.name}
                />
                <Input
                  placeholder="Sobrenome"
                  type="text"
                  color="text-text-default"
                  name="lastName"
                  error={errors.lastName}
                />
                {/* <Input
                  placeholder="Genero"
                  type="text"
                  color="text-text-default"
                /> */}
                <Input
                  placeholder="CPF"
                  type="text"
                  color="text-text-default"
                  name="cpf"
                  error={errors.cpf}
                />
                {/* <Input
                  placeholder="Data de Nascimento"
                  type="date"
                  color="text-text-default"
                /> */}
                <Input
                  placeholder="Contato"
                  type="text"
                  color="text-text-default"
                  name="phone"
                  error={errors.phone}
                />
                <Input
                  placeholder="Senha Atual"
                  type="password"
                  color="text-text-default"
                  name="oldPassword"
                  error={errors.oldPassword}
                />
                <Input
                  placeholder="Nova Senha"
                  type="password"
                  color="text-text-default"
                  name="newPassword"
                  error={errors.newPassword}
                />
                {/* <Input
                  placeholder="Confirmação de Senha"
                  type="text"
                  color="text-text-default"
                /> */}
                <div className="">
                  <button
                    type="submit"
                    className="text-text-light mt-10 bg-gradient-to-r from-primary-default to-primary-light w-48 py-2 rounded-full"
                  >
                    <span>Confirmar</span>
                  </button>
                  {/* <button
                    onClick={() => getCepData("38413354")}
                    className="bg-warning w-48 py-2 rounded-full text-text-light"
                  >
                    <span>Deletar Conta</span>
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}
