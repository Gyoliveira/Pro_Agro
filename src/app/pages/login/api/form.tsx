import Input from "@/app/components/Input";
import { useState } from "react";
import Toggle from "../components/Toggle";
import { useFormik, Form, Formik, useFormikContext } from "formik";
import * as yup from "yup";
import FormField from "../components/FormField";

interface Account {
  email: string;
  password: string;
  confirmPassword: string;
}

export default function FormCreateAccount() {
  const [isToggle, setIsToggle] = useState(false);

  const [enabled, setEnabled] = useState(false);
  const [typeAccount, setTypeAccount] = useState("freelancer");

  const handleTypeAccount = () => {
    setEnabled(!enabled);
  };

  const createAccount = async (data: Account) => {
    try {
      Object.assign(data, {typeAccount: typeAccount})
      const JSONdata = JSON.stringify(data);
      console.log(JSONdata)
      const endpoint = "https://viacep.com.br/ws/38413354/json/";

      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        // body: JSONdata,
      };

      const response = await fetch(endpoint, options);

      const result = await response.json();
      alert(JSONdata);
    } catch (err) {}
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        passwordConfirm: "",
      }}
      onSubmit={async (values) => {
        createAccount(values);
      }}
      validationSchema={yup.object({
        email: yup.string().email().required("Email obrigatorio"),
        password: yup.string().trim().required("Senha obrigatorio"),
        passwordConfirm: yup.string().trim().required("As senhas não conferem"),
      })}
    >
      <Form>
        <FormField placeholder="Email" type="email" name="email" id="email" />
        <FormField
          placeholder="Senha"
          type="password"
          name="password"
          id="password"
        />
        <FormField
          placeholder="Confirmação de senha"
          type="password"
          name="passwordConfirm"
          id="passwordConfirm"
        />

        <div className="flex flex-row justify-center items-center my-6 -ml-2">
          <span
            className={`mr-5 text-sm font-medium ${enabled && "opacity-10"}`}
          >
            Sou Freelancer
          </span>
          <Toggle enabled={enabled} selectType={handleTypeAccount} />
          <span
            className={`ml-5 text-sm font-medium ${!enabled && "opacity-10"}`}
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
    </Formik>
  );
}
