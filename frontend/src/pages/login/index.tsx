import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useForm } from "react-hook-form";

export default function Login() {

    const { register, handleSubmit } = useForm();

    const onSubmit = (data: object) => {
        console.log(data);
    }

    return (
        <div className="h-full bg-gray-900">
            <Header />

            <main className="mt-20 mb-36 flex justify-center">
                <form 
                    onSubmit={handleSubmit(onSubmit)}
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
                                {...register("email")}
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
                                {...register("password")}
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