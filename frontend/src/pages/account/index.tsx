import { Header } from "@/components/Header";
import { UsersContext } from "@/context/ContextProvider";
import { FormEvent, useContext, useEffect, useState } from "react";
import { HiLogout } from "react-icons/hi";

export default function Account(){
    const { user, signOut } = useContext(UsersContext);


    const [section, setSection] = useState("Account Data");
    const [isAccountDataButtonActive, setIsAccountDataButtonActive] = useState(true);
    const [isChangePasswordButtonActive, setIsChangePasswordButtonActive] = useState(false);
    const [isConfigurationsButtonActive, setIsConfigurationsButtonActive] = useState(false);
    const [isLogoutButtonActive, setIsLogoutButtonActive] = useState(false);

    useEffect(() => {
        setIsAccountDataButtonActive(section === "Account Data" || section === "Edit Account Data");
        setIsChangePasswordButtonActive(section === "Change Password");
        setIsConfigurationsButtonActive(section === "Configurations");
        setIsLogoutButtonActive(section === "Log Out");
    }, [section])

    const handleSubmit = (e : FormEvent) => {
        e.preventDefault();
    }

    const accountData = () => {
        return (
            <>
                <div className="flex justify-between">
                    <h1 className="text-gray-50 text-2xl ">Account Data</h1>

                    <button 
                        className="rounded px-3 py-2 mb-2 text-gray-950 bg-purple-500
                        font-semibold hover:bg-purple-400 hover:cursor-pointer 
                        transition duration-300"
                        onClick={() => setSection("Edit Account Data")}
                    >
                        Edit
                    </button>
                </div>

                {/* Each one of these divs is one row with 2 inputs of the same size */}
                <div className="flex gap-x-4 mb-6">
                    <div className="w-[50%]">
                        <label htmlFor="full-name" className="text-gray-50">Full Name</label>
                        <input 
                            className="block mt-1 bg-gray-700 rounded px-3 py-2
                            placeholder:text-gray-400 w-full outline-0"
                            name="full-name"
                            type="text" 
                            placeholder="Rafael R"
                            disabled
                        />
                    </div>

                    <div className="w-[50%]">
                        <label htmlFor="email" className="text-gray-50">Email</label>
                        <input 
                            className="block mt-1 bg-gray-700 rounded px-3 py-2
                            placeholder:text-gray-400 w-[100%] outline-0"
                            name="email"
                            type="text" 
                            placeholder="Rafael R"
                            disabled
                        />
                    </div>
                </div>         

                <div className="flex gap-x-4 mb-6">
                    <div className="w-[50%]">
                        <label htmlFor="password" className="text-gray-50">Password</label>
                        <input 
                            className="block mt-1 bg-gray-700 rounded px-3 py-2
                            placeholder:text-gray-400 w-full outline-0"
                            name="password"
                            type="password" 
                            placeholder="1234"
                            disabled
                        />
                    </div>

                    <div className="w-[50%]">
                        <label htmlFor="date-birth" className="text-gray-50">Date Of Birth</label>
                        <input 
                            className="block mt-1 bg-gray-700 rounded px-3 py-2
                            placeholder:text-gray-400 w-[100%] outline-0"
                            name="date-birth"
                            type="password" 
                            placeholder="Rafael R"
                            disabled
                        />
                    </div>
                </div>      

                <div className="flex gap-x-4 mb-6">
                    <div className="w-[50%]">
                        <label htmlFor="full-name" className="text-gray-50">Full Name</label>
                        <input 
                            className="block mt-1 bg-gray-700 rounded px-3 py-2
                            placeholder:text-gray-400 w-full outline-0"
                            name="full-name"
                            type="text" 
                            placeholder="Rafael R"
                            disabled
                        />
                    </div>

                    <div className="w-[50%]">
                        <label htmlFor="full-name" className="text-gray-50">Full Name</label>
                        <input 
                            className="block mt-1 bg-gray-700 rounded px-3 py-2
                            placeholder:text-gray-400 w-[100%] outline-0"
                            name="full-name"
                            type="text" 
                            placeholder="Rafael R"
                            disabled
                        />
                    </div>
                </div>  
            </>
        )
    }

    const [isDisabled, setIsDisabled] = useState(false);
    const editAccountData = () => {
        return (
            <>
                <div className="flex justify-between">
                    <h1 className="text-gray-50 text-2xl ">Account Data</h1>

                    <button 
                        className="rounded px-3 py-2 mb-2 text-gray-950 bg-purple-500
                        font-semibold hover:bg-purple-400 hover:cursor-pointer 
                        transition duration-300"
                        onClick={() => setSection("Account Data")}
                    >
                        Back
                    </button>
                </div>

                {/* Each one of these divs is one row with 2 inputs of the same size */}
                <div className="flex gap-x-4 mb-6">
                    <div className="w-[50%]">
                        <label htmlFor="full-name" className="text-gray-50">Full Name</label>
                        <input 
                            className="block mt-1 bg-gray-700 rounded px-3 py-2
                            placeholder:text-gray-400 w-full outline-0"
                            name="full-name"
                            type="text" 
                            placeholder="Rafael R"
                        />
                    </div>

                    <div className="w-[50%]">
                        <label htmlFor="email" className="text-gray-50">Email</label>
                        <input 
                            className="block mt-1 bg-gray-700 rounded px-3 py-2
                            placeholder:text-gray-400 w-[100%] outline-0"
                            name="email"
                            type="text" 
                            placeholder={user?.email}
                        />
                    </div>
                </div>         

                <div className="flex gap-x-4 mb-6">
                    <div className="w-[50%]">
                        <label htmlFor="password" className="text-gray-50">Password</label>
                        <input 
                            className="block mt-1 bg-gray-700 rounded px-3 py-2
                            placeholder:text-gray-400 w-full outline-0 hover:cursor-pointer"
                            name="password"
                            type="password" 
                            placeholder="1234"
                            onMouseOver={() => {
                                setIsChangePasswordButtonActive(true)
                                setIsDisabled(false);
                            }}
                            onMouseOut={() => {
                                setIsChangePasswordButtonActive(false)
                                setIsDisabled(true);
                            }}
                            onClick={() => setSection("Change Password")}
                            disabled={isDisabled}
                        />
                    </div>

                    <div className="w-[50%]">
                        <label htmlFor="date-birth" className="text-gray-50">Date Of Birth</label>
                        <input 
                            className="block mt-1 bg-gray-700 rounded px-3 py-2
                            placeholder:text-gray-400 w-[100%] outline-0"
                            name="date-birth"
                            type="text" 
                            placeholder="17/01/2004"
                        />
                    </div>
                </div>      

                <div className="flex gap-x-4 mb-6">
                    <div className="w-[50%]">
                        <label htmlFor="full-name" className="text-gray-50">Full Name</label>
                        <input 
                            className="block mt-1 bg-gray-700 rounded px-3 py-2
                            placeholder:text-gray-400 w-full outline-0"
                            name="full-name"
                            type="text" 
                            placeholder="Rafael R"
                        />
                    </div>

                    <div className="w-[50%]">
                        <label htmlFor="full-name" className="text-gray-50">Full Name</label>
                        <input 
                            className="block mt-1 bg-gray-700 rounded px-3 py-2
                            placeholder:text-gray-400 w-[100%] outline-0"
                            name="full-name"
                            type="text" 
                            placeholder="Rafael R"
                        />
                    </div>
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
                    <div className="mb-4">
                        <label
                            className="text-gray-50 mb-1"
                            htmlFor="password"
                        >
                            Actual Password
                        </label>

                        <input 
                            className="block mb-2 mt-2 bg-gray-700 rounded outline-0 px-3 py-2
                            placeholder:text-gray-400 w-80"
                            name="password"
                            type="password" 
                            placeholder="Enter your actual password"
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            className="text-gray-50 mb-1"
                            htmlFor="newPassword"
                        >
                            New Password
                        </label>

                        <input 
                            className="block mb-2 mt-2 bg-gray-700 rounded outline-0 px-3 py-2
                            placeholder:text-gray-400 w-80"
                            name="newPassword"
                            type="password" 
                            placeholder="Enter your new password"
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            className="text-gray-50"
                            htmlFor="confirmNewPassword"
                        >
                            Confirm New Password
                        </label>

                        <input 
                            className="block mb-2 mt-2 bg-gray-700 rounded outline-0 px-3 py-2
                            placeholder:text-gray-400 w-80"
                            name="confirmNewPassword"
                            type="password" 
                            placeholder="Confirm your new password"
                        />
                    </div>

                    <div>
                        <button 
                            className="px-3 py-2 rounded bg-purple-500 hover:bg-purple-400
                            hover:cursor-pointer font-semibold mt-4"
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
            <>
                <h1 className="text-2xl text-gray-50 font-semibold mb-4">Configurations</h1>

                <div>
                    <h2 className="text-gray-50 font-semibold mb-2">Notifications</h2>

                    <div>
                        <div className="flex justify-between">
                            <h2 className="text-gray-50">Promotional Emails</h2>
                            <input type="checkbox" />
                        </div>
                        <div className="flex justify-between">
                            <h2 className="text-gray-50">Promotional Emails</h2>
                            <input type="checkbox" />
                        </div>
                        <div className="flex justify-between">
                            <h2 className="text-gray-50">Promotional Emails</h2>
                            <input type="checkbox" />
                        </div>
                    </div>

                    <div className="border-b border-gray-500 mt-4 mb-4"></div>

                    <div>
                        <h2 className="text-gray-50 font-semibold mb-2">Privacy</h2>

                        <div className="flex justify-between">
                            <h2 className="text-gray-50">Promotional Emails</h2>
                            <input type="checkbox" />
                        </div>
                        <div className="flex justify-between">
                            <h2 className="text-gray-50">Promotional Emails</h2>
                            <input type="checkbox" />
                        </div>
                    </div>

                    <div className="border-b border-gray-500 mt-4 mb-4"></div>

                    <div>
                        <h2 className="text-gray-50 mb-2">Idiom and Region</h2>

                        <div className="flex gap-x-2">
                            <select 
                                className="w-[50%] outline-0 text-gray-50 bg-gray-700 rounded
                                px-3 py-2"
                                name="languages" 
                            >
                                <option value="teste">PT-BR</option>
                                <option value="teste">EN-US</option>
                            </select>

                            <select 
                                className="w-[50%] outline-0 text-gray-50 bg-gray-700 rounded
                                px-3 py-2"
                                name="currency" 
                            >
                                <option value="teste">Real</option>
                                <option value="teste">Dolar</option>
                            </select>
                        </div>

                        <button className="px-3 py-2 bg-purple-500 hover:bg-purple-400
                        hover:cursor-pointer text-gray-950 font-semibold rounded mt-6
                        transition duration-300">Save Configurations</button>
                    </div>
                </div>
            </>
        )
    }

    const logOut = () => {
        return (
            <>
                <div className="flex justify-center items-center flex-col">
                    <HiLogout 
                        className="h-24 w-24 text-red-500"
                    />

                    <div className="mt-4">
                        <h2 className="text-gray-50 block mb-2 text-center
                        text-4xl font-bold"
                        >
                            Log Out
                        </h2>

                        <h3 
                            className="text-gray-50 text-center"
                        >
                            Are you sure you want to log out from your account?
                        </h3>
                    </div>

                    <button
                        onClick={() => signOut()}
                        className="px-3 py-2 bg-red-500 rounded font-semibold
                        text-gray-950 mt-6 hover:bg-red-400 hover:cursor-pointer "
                    >
                        Confirm Log Out
                    </button>

                </div>
            </>
        )
    }

    const switchSection = () => {
        switch(section){
            case "Account Data": return accountData();
            case "Edit Account Data": return editAccountData();
            case "Change Password": return changePassword();
            case "Configurations": return configurations();
            case "Log Out": return logOut();
        }
    }

    return (
        <div className="h-screen bg-gray-900">
            <Header />

            <div className="flex items-start px-20 mt-10">
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
                    </div>
                </aside>

                <main className="flex-1 rounded bg-gray-800 p-6">
                    {switchSection()}
                </main>
            </div>
        </div>
    )
}