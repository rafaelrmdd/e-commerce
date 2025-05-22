import { Header } from "@/components/Header";
import { FormEvent, useState } from "react";

export default function Account(){

    const [section, setSection] = useState("");

    const handleSubmit = (e : FormEvent) => {
        e.preventDefault();
    }

    const accountData = () => {
        return (
            <>
                <div className="flex justify-between">
                    <h1 className="text-gray-50 text-2xl ">Dados da Conta</h1>

                    <button className="rounded px-3 py-2 mb-2 text-gray-950 bg-purple-500">Editar</button>
                </div>
            </>
        )
    }

    const changePassword = () => {
        return (
            <>
                <h1 className="text-gray-50 text-2xl mb-4">Change Password</h1>

                <form
                    onSubmit={handleSubmit}
                    className=""
                >
                    <div>
                        <label
                            className="text-gray-50 mb-1"
                            htmlFor="password"
                        >
                            Actual Password
                        </label>

                        <input 
                            className="block mb-2 bg-gray-700 rounded outline-0 px-3 py-2
                            placeholder:text-gray-400 w-80"
                            name="password"
                            type="password" 
                            placeholder="Enter your actual password"
                        />
                    </div>

                    <div>
                        <label
                            className="text-gray-50 mb-1"
                            htmlFor="newPassword"
                        >
                            New Password
                        </label>

                        <input 
                            className="block mb-2 bg-gray-700 rounded outline-0 px-3 py-2
                            placeholder:text-gray-400 w-80"
                            name="newPassword"
                            type="password" 
                        />
                    </div>

                    <div>
                        <label
                            className="text-gray-50 mb-1"
                            htmlFor="confirmNewPassword"
                        >
                            Confirm New Password
                        </label>

                        <input 
                            className="block mb-2 bg-gray-700 rounded outline-0 px-3 py-2
                            placeholder:text-gray-400 w-80"
                            name="confirmNewPassword"
                            type="password" 
                        />
                    </div>

                    <div>
                        <button 
                            className="px-3 py-2 rounded bg-purple-500 hover:bg-purple-400
                            hover:cursor-pointer"
                        >
                            Change Password
                        </button>
                    </div>
                   
                </form>

            </>
        )
    }
    
    const configurations = () => {
        return (
            <div>

            </div>
        )
    }

    const logOut = () => {
        return (
            <div>

            </div>
        )
    }

    const switchSection = () => {
        switch(section){
            case "Account Data": return accountData();
            case "Change Password": return changePassword();
            case "Configurations": return configurations();
            case "Log out": return logOut();
        }
    }

    return (
        <div className="h-screen bg-gray-900">
            <Header />

            <div className="flex px-20 mt-10">
                <aside className="bg-gray-800 rounded p-4 mr-8">
                    <div className="flex">
                        <div className="rounded-full bg-pink-400 w-14 h-14 mr-3"></div>
                        
                        <div>
                            <h2 className="text-gray-50 text-[1.2rem]">João Silva</h2>
                            <h2 className="text-gray-400 text-[0.9rem]">Member since 01/2023</h2>
                        </div>
                    </div>

                    {/* Horizontal line */}
                    <div className="border-b border-gray-700 mt-6 mb-6"></div>

                    <div className="flex flex-col">
                        <button 
                            onClick={() => setSection("Account Data")}
                            className="rounded px-3 py-2 mb-2 text-gray-400"
                        >
                            Dados da Conta
                        </button>

                        <button 
                            onClick={() => setSection("Change Password")}
                            className="rounded px-3 py-2 mb-2 text-gray-400"
                        >
                            Alterar Senha
                        </button>

                        <button 
                            onClick={() => setSection("Configurations")}
                            className="rounded px-3 py-2 mb-2 text-gray-400"
                        >
                            Configurações
                        </button>

                        <button 
                            onClick={() => setSection("Log out")}
                            className="rounded px-3 py-2 mb-2 text-gray-400"
                        >
                            Sair da Conta
                        </button>
                    </div>
                </aside>

                <main className="flex-1 rounded bg-gray-800 p-6">
                    {switchSection()}
                </main>
            </div>
        </div>
    )
}