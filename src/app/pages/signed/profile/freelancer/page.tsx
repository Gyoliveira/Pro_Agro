"use client";
import Image from "next/image";
import "../style.css";
import Input from "../components/Input";
import Link from "next/link";
import Selection from "../components/Selection";
import { Field, Form, Formik } from "formik";
import * as yup from "yup";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

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

export default function ProfileFreelancer(props: any) {
  const [userDate, setUserDataStorage] = useState({
    cpf: '',
    name: '',
    lastName: '',
    gender: '',
    phone: '',
  });
  const email  = "router.query";

  const imageStyle = {
    borderRadius: "40%",
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
        email: email,
        cpf: data.cpf,
        name: data.name,
        lastName: data.lastName,
        dataBirth: "1999-01-01",
        gender: 0,
        phone: data.phone,
        oldPassword: data.oldPassword,
        newPassword: data.newPassword,
      };

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

  useEffect(() => {
    return () => {
      const data = JSON.parse(localStorage.getItem("user")!);

      setUserDataStorage(data);
    };
  }, []);

  return (
    <Formik
      validateOnChange={false}
      validateOnBlur={false}
      initialValues={{
        cpf: userDate?.cpf,
        name: userDate?.name,
        lastName: userDate?.lastName,
        dataBirth: "2001-01-01",
        gender: userDate?.gender,
        phone: userDate?.phone,
        oldPassword: "",
        newPassword: "",
        passwordConfirm: "",
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
        passwordConfirm: yup
          .string()
          .label("confirm password")
          .required("Senha obrigatorio")
          .oneOf([yup.ref("newPassword"), ""], "Senhas não conferem"),
      })}
    >
      {({ errors, touched }) => (
        <Form>
          <div className="flex min-h-80vh flex-row bg-slate-100">
            <div className=" flex flex-col p-5">
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
                <div>
                  <span className="text-base text-text-default text-opacity-80 relative px-1 transition duration-200 input-text">
                    Gênero
                  </span>
                  <Field
                    as="select"
                    name="gender"
                    className="h-14 w-50 px-6 pt-5 text-base text-black bg-transparent border-text-default border-b-2 rounded-sm border-opacity-50 outline-none focus:border-primary-default placeholder-gray-300 placeholder-opacity-0 transition duration-200"
                  >
                    <option value="0">MASCULINO</option>
                    <option value="1">FEMININO</option>
                    <option value="2">OUTROS</option>
                    <option value="3">PREFIRO NÃO DIVULGAR</option>
                  </Field>
                </div>
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
                <Input
                  placeholder="Confirmação de Senha"
                  type="text"
                  color="text-text-default"
                  name="passwordConfirm"
                  error={errors.passwordConfirm}
                />
              </div>
              <div className="flex flex-row justify-end">
                <button
                  type="submit"
                  className="text-text-light mt-10 bg-gradient-to-r from-primary-default to-primary-light w-48 py-2 rounded-full"
                >
                  <span>Confidrmar</span>
                </button>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}
