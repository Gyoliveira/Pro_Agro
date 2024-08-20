import Input from "@/app/components/Input";
import { useState } from "react";
import Toggle from "../components/Toggle";
import { useFormik, Form, Formik, useFormikContext } from "formik";
import * as yup from "yup";
import FormField from "../components/FormField";
import { useRouter } from "next/navigation";
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
  const [errorLogin, setErrorLogin] = useState("");

  const handleSubmit = async (data: Login) => {
    try {
      setErrorLogin("");
      const dataBody = {
        email: data.email,
        // password: data.password,
      };

      const JSONdata = JSON.stringify(dataBody);

      const response = await fetch(
        `http://localhost:8080/usuarios/` + data.email,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
          },
        }
      );

      const result = await response.json();
      console.log(result);
      await localStorage.setItem("user", JSON.stringify(result));

      router.push(`/pages/signed/profile/freelancer/?email=${data.email}`);
    } catch (err) {
      setErrorLogin("Email não encontrado");
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
          <h1 className="text-warning text-center my-5">{errorLogin}</h1>

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
  const [errorRegister, setErrorRegister] = useState("");

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

      // PUT usuarios/id
      // DELETE usuarios/id

      const response = await fetch("http://localhost:8080/cadastro", {
        method: "POST",
        body: JSONdata,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
      });

      const result = await response.json();
      console.log(result);

      router.push(`/pages/signed/profile/freelancer/?email=${data.email}`);
    } catch (err) {
      setErrorRegister("Este email ja esta sendo utilizado")
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
        passwordConfirm: yup
          .string()
          .label("confirm password")
          .required("Senha obrigatorio")
          .oneOf([yup.ref("password"), ""], "Senhas não conferem"),
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
          <h1 className="text-warning text-center my-5">{errorRegister}</h1>

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
