"use client";
import Image from "next/image";
import "../profile/style.css";
import Link from "next/link";
import Input from "@/app/components/Input";
import Selection from "../../profile/components/Selection";

export default function ProfileCompany() {
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
    <div className="flex min-h-80vh w-auto flex-row bg-slate-100 justify-center items-center">
      <div className=" flex flex-col">
        <div className="grid grid-cols-3 gap-2">
          <Input placeholder="Endereço" type="text" color="text-text-default" />
          <Input
            placeholder="Número Da Residência"
            type="text"
            color="text-text-default"
          />
          <Input
            placeholder="Complemento (Opcional)"
            type="text"
            color="text-text-default"
          />
          <Input placeholder="Bairro" type="text" color="text-text-default" />
          <Input placeholder="CEP" type="text" color="text-text-default" />
          <Input
            placeholder="País/Região"
            type="text"
            color="text-text-default"
          />
          <Input
            placeholder="Ponto de Referência"
            type="text"
            color="text-text-default"
          />

          <div className="flex flex-col">
            <label className="mb-4">Selecione o Tipo de Propriedade</label>

            <select
              id="underline_select"
              className="block py-2.5 px-0 w-full text-sm text-text-default bg-transparent border-0 border-b-2 border-gray-200 appearance-none  dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            >
              <option selected value="">
                Selecione
              </option>
              <option>Empresa de Implementos</option>
              <option>Empresa de Insumos</option>
              <option>Fazenda</option>
            </select>
            {/* <select id="selecione o tipo de propriedade">
                            <option selected value="">Selecione</option>
                            <option>Empresa de Implementos</option>
                            <option>Empresa de Insumos</option>
                            <option>Fazenda</option>
                        </select> */}
          </div>
          <Input placeholder="Cidade" type="text" color="text-text-default" />
          <Input placeholder="Estado" type="text" color="text-text-default" />
          <div className="mt-16 mr-8">
            <input type="checkbox" value="" id="checkboxDefault" />
            <label className="relative float-right ">
              Tornar este meu endereço padrão
            </label>
          </div>
        </div>

        <div className="relative bottom-5">
       
          <button className="text-text-light mt-10 bg-gradient-to-r from-primary-default to-primary-light w-48 py-2 rounded-full">
            <span>Confirmar</span>
          </button>
        </div>
      </div>
    </div>
  );
}
