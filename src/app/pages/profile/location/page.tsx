"use client";
import Image from "next/image";
import "../style.css";
import Input from "../components/Input";
import Link from "next/link";
import Selection from "../components/Selection";


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
        <main className="flex min-h-screen flex-row min-w bg-bg_profile bg-no-repeat bg-cover ">
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
                    <Link href="/pages/profile">
                        <Selection icon="home" name="home" />
                    </Link>

                    <Selection icon="user" name="perfil" />
                    <Selection icon="place" name="localização" />
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
                    <Input placeholder="Endereço" type="text" color="text-text-default" />
                    <Input placeholder="Número Da Residência" type="text" color="text-text-default" />
                    <Input placeholder="Complemento (Opcional)" type="text" color="text-text-default" />
                    <Input placeholder="Bairro" type="text" color="text-text-default" />
                    <Input placeholder="CEP" type="text" color="text-text-default" />
                    <Input placeholder="País/Região" type="text" color="text-text-default" />
                    <Input placeholder="Ponto de Referência" type="text" color="text-text-default" />

                    <div className="flex flex-col">

                        <label className="mb-4">Selecione o Tipo de Propriedade</label>

                        <select id="underline_select" className="block py-2.5 px-0 w-full text-sm text-text-default bg-transparent border-0 border-b-2 border-gray-200 appearance-none  dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                        <option selected value="">Selecione</option>
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
                        <label className="relative float-right ">Tornar este meu endereço padrão</label>
                    </div>
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
    )
}