import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FormEvent, useState } from "react";
import { api } from "@/services/api/api";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation"

export default function Register() {

    

    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault();

        try{
            const response = await api.post('user/register', {
                email,
                password,
                confirmPassword
            })

            console.log('response register: ', response);
            router.push('/login');
        }catch(e){
            const error = e as AxiosError;
            console.log('error: ', error);
        }

    }

    return (
        <div className="h-full bg-gray-900">
            <Header />

            <main className="mt-20 mb-20 flex justify-center">
                <form 
                    onSubmit={onSubmit}
                    className="rounded p-8 bg-gray-800"   
                >
                    <h1 className="text-3xl text-gray-50 text-center font-bold">Create Account</h1>

                    <div className="mt-6 flex flex-col gap-y-6">
                        <div className="flex flex-col">
                            <label 
                                htmlFor="email"
                                className="mb-2 text-gray-50"
                            >
                                Email
                            </label>
                            <input 
                                type="text" 
                                placeholder="example@example.com"
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-96 px-4 py-2 bg-gray-700 rounded outline-0
                                placeholder:text-gray-400 text-gray-400"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label 
                                htmlFor="password"
                                className="mb-2 text-gray-50"
                            >
                                Password
                            </label>
                            <input 
                                type="password" 
                                placeholder="Enter your password"
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-96 px-4 py-2 bg-gray-700 rounded outline-0
                                placeholder:text-gray-400 text-gray-400"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label 
                                htmlFor="password"
                                className="mb-2 text-gray-50"
                            >
                                Confirm your Password
                            </label>
                            <input 
                                type="password" 
                                placeholder="Confirm your password"
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="w-96 px-4 py-2 bg-gray-700 rounded outline-0
                                placeholder:text-gray-400 text-gray-400"
                            />
                        </div>

                        <button 
                            type="submit"
                            className="text-gray-950 bg-purple-500 hover:bg-purple-400
                            transition duration-300 rounded px-4 py-2 mt-6 font-semibold hover:cursor-pointer"
                        >
                            Create Account
                        </button>
                    </div>
                </form>
            </main>
            
            <Footer />
        </div>
    )
}