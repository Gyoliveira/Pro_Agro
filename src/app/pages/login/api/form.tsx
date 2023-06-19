import Input from "@/app/components/Input";
import { useState } from "react";
import Toggle from "../components/Toggle";
import { useFormik, Form, Formik, useFormikContext } from "formik";
import * as yup from "yup";
import FormField from "../components/FormField";
import { useRouter } from 'next/navigation';
interface Login {
  email: string;
  password: string;
}
interface Account {
  email: string;
  password: string;
  passwordConfirm: string;
}

enum EAccountType {
  freelancer = 0,
  enterprise = 1,
}

export function FormLogin() {
  const router = useRouter();

  const handleSubmit = async (data: Login) => {
    try {
      // const dataBody = {
      //   email: data.email,
      //   // password: data.password,
      // };

      // const JSONdata = JSON.stringify(dataBody);

      // const response = await fetch(
      //   `http://localhost:8080/cadastro/email/` + data.email,
      //   {
      //     method: "GET",
      //   }
      // );

      // const result = await response.json();
      // console.log(result);
      let email = 'markus@gmail.com'
      router.push(`/pages/signed/dashboard?email=${email}`);
    } catch (err) {
      alert("N achei nenhum usuario");
    }
  };

  return (
    <Formik
      validateOnChange={false}
      validateOnBlur={false}
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={async (values) => {
        handleSubmit(values);
      }}
      validationSchema={yup.object({
        email: yup.string().email().required("Email obrigatorio"),
        password: yup.string().trim().required("Senha obrigatorio"),
      })}
    >
      {({ errors, touched }) => (
        <Form>
          <FormField
            placeholder="Email"
            type="email"
            name="email"
            id="email"
            error={errors.email}
          />
          <FormField
            placeholder="Senha"
            type="password"
            name="password"
            id="password"
            error={errors.password}
          />
          <div className="mb-8  flex flex-row justify-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-primary-default to-primary-light w-48 py-2 rounded-full"
            >
              <span>Entrar</span>
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export function FormCreateAccount() {
  const router = useRouter();

  const [isToggle, setIsToggle] = useState(false);

  const [enabled, setEnabled] = useState(false);
  const [typeAccount, setTypeAccount] = useState<EAccountType>(
    EAccountType.freelancer
  );

  const handleTypeAccount = () => {
    setEnabled(!enabled);
  };

  const handleSubmit = async (data: Account) => {
    try {
      const dataBody = {
        email: data.email,
        password: data.password,
        typeAccount: !enabled ? 1 : 2,
      };

      const JSONdata = JSON.stringify(dataBody);
      console.log(JSONdata);

      const response = await fetch("http://localhost:8080/cadastro", {
        method: "POST",
        body: JSONdata,
        headers: {
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        }
      });

      const result = await response.json();
      console.log(result);
      // push(`/pages/signed/profile/${data.email}/freelancer/`);

      router.push(`/pages/signed/profile/freelancer/?email=${data.email}`);

    } catch (err) {
      alert("deu n mano");
    }
  };

  return (
    <Formik
      validateOnChange={false}
      validateOnBlur={false}
      initialValues={{
        email: "",
        password: "",
        passwordConfirm: "",
      }}
      onSubmit={async (values) => {
        handleSubmit(values);
      }}
      validationSchema={yup.object({
        email: yup.string().email().required("Email obrigatorio"),
        password: yup.string().trim().required("Senha obrigatorio"),
        passwordConfirm: yup.string().trim().required("As senhas não conferem"),
      })}
    >
      {({ errors, touched }) => (
        <Form>
          <FormField
            placeholder="Email"
            type="email"
            name="email"
            id="email"
            error={errors.email}
          />
          <FormField
            placeholder="Senha"
            type="password"
            name="password"
            id="password"
            error={errors.password}
          />
          <FormField
            placeholder="Confirmação de senha"
            type="password"
            name="passwordConfirm"
            id="passwordConfirm"
            error={errors.passwordConfirm}
          />

          <div className="flex flex-row justify-center items-center my-6 -ml-2">
            <span
              className={`mr-5 text-sm font-medium ${enabled && "opacity-30"}`}
            >
              Sou Freelancer
            </span>
            <Toggle enabled={enabled} selectType={handleTypeAccount} />
            <span
              className={`ml-5 text-sm font-medium ${!enabled && "opacity-30"}`}
            >
              Sou Empresa
            </span>
          </div>

          <div className="mb-8  flex flex-row justify-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-primary-default to-primary-light w-48 py-2 rounded-full"
            >
              <span>Entrar</span>
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
