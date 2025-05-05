import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Register() {
    return (
        <div className="h-full bg-gray-900">
            <Header />

            <main className="mt-20 mb-20 flex justify-center">
                <form 
                    action=""
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
                                name="email"  
                                placeholder="example@example.com"
                                className="w-96 px-4 py-2 bg-gray-700 rounded outline-0
                                placeholder:text-gray-400"
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
                                name="password" 
                                placeholder="Enter your password"
                                className="w-96 px-4 py-2 bg-gray-700 rounded outline-0
                                placeholder:text-gray-400"
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
                                name="confirm-password" 
                                placeholder="Confirm your password"
                                className="w-96 px-4 py-2 bg-gray-700 rounded outline-0
                                placeholder:text-gray-400"
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