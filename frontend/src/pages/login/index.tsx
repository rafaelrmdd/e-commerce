import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FormEvent, useContext, useState } from "react";
import { UsersContext } from "@/context/ContextProvider";

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signIn } = useContext(UsersContext);

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault();

        console.log(email, password);

        signIn({
            email,
            password
        });

    }

    return (
        <div className="h-full bg-gray-900">
            <Header />

            <main className="mt-20 mb-36 flex justify-center">
                <form 
                    onSubmit={onSubmit}
                    className="rounded p-8 bg-gray-800"   
                >
                    <h1 className="text-3xl text-gray-50 text-center font-bold">Log In</h1>

                    <div className="mt-6 flex flex-col gap-y-6">
                        <div className="flex flex-col">
                            <label 
                                htmlFor="email"
                                className="mb-1 text-gray-50"
                            >
                                Email
                            </label>
                            <input 
                                type="text" 
                                placeholder="example@example.com"
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-96 px-4 py-2 bg-gray-700 rounded outline-0
                                placeholder:text-gray-400"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label 
                                htmlFor="password"
                                className="mb-1 text-gray-50"
                            >
                                Password
                            </label>
                            <input 
                                type="password" 
                                placeholder="Enter your password"
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-96 px-4 py-2 bg-gray-700 rounded outline-0
                                placeholder:text-gray-400"
                            />
                        </div>

                        <button 
                            type="submit"
                            className="text-gray-950 bg-purple-500 hover:bg-purple-400
                            transition duration-300 rounded px-4 py-2 mt-6 font-semibold hover:cursor-pointer"
                        >
                            Log In
                        </button>
                    </div>
                </form>
            </main>
            
            <Footer />
        </div>
    )
}