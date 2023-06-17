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
                <div className="flex flex-row justify-around pt-28">
                    <div>
                        <Input placeholder="Endereço" type="text" />
                        <Input placeholder="Número Da Residência" type="text" />
                        <Input placeholder="Complemento (Opcional)" type="text" />
                        <Input placeholder="Bairro" type="text" />
                    </div>
                    <div>
                        <Input placeholder="CEP" type="text" />
                        <Input placeholder="País/Região" type="text" />
                        <Input placeholder="Ponto de Referência" type="text" />
                        <br></br>
                        <label>Selecione o Tipo de Propriedade</label>
                        <br></br>
                        <select id="selecione o tipo de propriedade">
                            <option selected value="">Selecione</option>
                            <option>Empresa de Implementos</option>
                            <option>Empresa de Insumos</option>
                            <option>Fazenda</option>
                        </select>
                    </div>
                    <div>
                        <Input placeholder="Cidade" type="text" />
                        <Input placeholder="Estado" type="text" />
                        {/* <Input placeholder="Tornar este meu endereço padrão" type="Checkbox" /> */}
                        <div className="flex mb-5 ">
                        <input  type ="checkbox" value="" id= "checkboxDefault" />
                        <label>Tornar este meu endereço padrão</label>
                        </div>
                        

                        <button className="text-text-light mt-10 bg-gradient-to-r from-primary-default to-primary-light w-48 py-2 rounded-full">
                            <span>Confirmar</span>
                        </button>
                    </div>
                </div>

                <div className="absolute bottom-5">
                    <button onClick={() => getCepData('38413354')} className="bg-warning w-48 py-2 rounded-full text-text-light">
                        <span>Deletar Conta</span>
                    </button>
                </div>

            </div>

        </main>
    )
}