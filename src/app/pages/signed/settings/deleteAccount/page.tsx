"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Field, Form, Formik } from "formik";
import * as yup from "yup";
import { useRouter } from "next/router";
import { useParams } from "next/navigation";

export default function DeleteAccount() {
  const [userDate, setUserDataStorage] = useState({
    id: 0,
    cpf: "",
    name: "",
    lastName: "",
    gender: "",
    phone: "",
  });

  const handleSubmit = async (data: any) => {
    try {
      const dataBody = {
        id: data.id,
      };

      const JSONdata = JSON.stringify(dataBody);
      console.log(JSONdata);

      const response = await fetch(
        "http://localhost:8080/usuarios/" + userDate?.id,
        {
          method: "DELETE",
        }
      );

      const result = await response.json();
      console.log(result);
      // push("/pages/profile");
    } catch (err) {
      alert("Erro ao deletar");
    }
  };

  useEffect(() => {
    return () => {
      const data = JSON.parse(localStorage.getItem("user")!);

      setUserDataStorage(data);
    };
  }, []);

  return (
    <div className="flex min-h-80vh flex-row bg-slate-100">
      <div className=" flex flex-col p-5">
        <button className="text-text-light mt-10 bg-warning w-48 py-2 rounded-full">
          <span>Deletar Conta</span>
        </button>
      </div>
    </div>
  );
}
