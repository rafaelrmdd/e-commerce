import { Header } from "@/components/Header";
import { UsersContext } from "@/context/ContextProvider";
import { useAccount } from "@/hooks/components/useAccount";
import { useContext } from "react";

export default function Account(){
    const { user } = useContext(UsersContext);

    const {
        isAccountDataButtonActive,
        isChangePasswordButtonActive,
        isConfigurationsButtonActive,
        isLogoutButtonActive,
        setSection,
        switchSection,
        setIsAccountDataButtonActive,
        setIsChangePasswordButtonActive,
        setIsConfigurationsButtonActive,
        setIsLogoutButtonActive,
    } = useAccount();


    return (
        <div className="h-screen bg-gray-900">
            <Header />

            <div className="flex items-start px-20 mt-10">
                <aside className="bg-gray-800 rounded p-4 mr-8">
                    <div className="flex">
                        <div className="rounded-full bg-pink-400 w-14 h-14 mr-3"></div>
                        
                        <div className="flex items-center">
                            <h2 className="text-gray-50 text-[1.1rem]">{user?.email}</h2>
                        </div>
                    </div>

                    {/* Horizontal line */}
                    <hr className="mt-6 mb-6 text-gray-700"></hr>

                    <nav className="flex flex-col">
                        <button 
                            onClick={() => {
                                setSection("Account Data")
                                setIsAccountDataButtonActive(true);
                            }}
                            className={`rounded px-3 py-2 mb-2 text-gray-300 hover:bg-purple-500
                            transition duration-300 ${isAccountDataButtonActive ? "bg-purple-500" : ""}`}
                        >
                            Dados da Conta
                        </button>

                        <button 
                            onClick={() => {
                                setSection("Change Password")
                                setIsChangePasswordButtonActive(!isChangePasswordButtonActive);
                            }}
                            className={`rounded px-3 py-2 mb-2 text-gray-300 hover:bg-purple-500
                            transition duration-300 ${isChangePasswordButtonActive ? "bg-purple-500" : ""}`}
                        >
                            Alterar Senha
                        </button>

                        <button 
                            onClick={() => {
                                setSection("Configurations")
                                setIsConfigurationsButtonActive(!isConfigurationsButtonActive);
                            }}
                            className={`rounded px-3 py-2 mb-2 text-gray-300 hover:bg-purple-500
                            transition duration-300 ${isConfigurationsButtonActive ? "bg-purple-500" : ""}`}
                        >
                            Configurações
                        </button>

                        <button 
                            onClick={() => {
                                setSection("Log Out")
                                setIsLogoutButtonActive(!isLogoutButtonActive);
                            }}
                            className={`rounded px-3 py-2 mb-2 text-gray-300 hover:bg-red-500
                            transition duration-300 ${isLogoutButtonActive ? "bg-red-500" : ""}`}
                        >
                            Log Out
                        </button>
                    </nav>
                </aside>

                <main className="flex-1 rounded bg-gray-800 p-6">
                    {switchSection()}
                </main>
            </div>
        </div>
    )
}