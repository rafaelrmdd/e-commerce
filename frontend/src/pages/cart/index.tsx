import { Header } from "@/components/Header"
import { FaTrash } from "react-icons/fa";
import { useContext, useEffect } from "react";
import { UsersContext } from "@/context/ContextProvider";

export default function Cart() {
    const { verifyIfUserIsLogged } = useContext(UsersContext);

    useEffect(() => {
        verifyIfUserIsLogged();
    }, [verifyIfUserIsLogged])

    return (
        <div className="h-screen bg-gray-900">
            <Header />

            <main className="flex px-32 mt-8 rounded justify-between items-start">
                <section className="w-[67%] bg-gray-800 rounded p-6">
                    <h2 className="text-gray-50 font-semibold text-xl">Cart Items</h2>

                    <div className="mt-4">
                        <div className="flex bg-gray-700 p-4 rounded gap-x-4">
                            <div className="w-20 bg-gray-400 rounded">
                                {/* <Image
                                    src={}
                                    fill
                                    alt="Product's Image"
                                /> */}
                            </div>

                            <div className="w-[57%]">
                                <h2 className="text-gray-50 font-semibold">Wireless Headphones</h2>
                                <h3 className="text-gray-400 text-[0.8rem] truncate">High-quality wireless headphones</h3>
                                <span className="block text-gray-50  mt-2">$89.90</span>
                            </div>

                            <div className="flex ml-auto items-center gap-x-8">
                                <span className="text-gray-400 text-xl hover:cursor-pointer">-</span>
                                <span className="text-gray-50 text-xl font-semibold">3</span>
                                <span className="text-gray-400 text-xl hover:cursor-pointer">+</span>

                                <FaTrash 
                                    className="text-red-400 hover:cursor-pointer text-xl "    
                                />  
                            </div>
                        </div>

                        <hr className="text-gray-600 mt-6 mb-6"></hr>

                        <div 
                            className="flex items-center rounded text-red-400 hover:text-red-300
                            transition duration-300 hover:cursor-default"
                        >
                            <FaTrash 
                                className=" hover:cursor-pointer text-xr mr-2"    
                            />
                            <h3>Clear all items</h3>
                        </div>
                    </div>
                </section>

                <aside className="w-[30%] bg-gray-800 rounded p-6">
                    <h2 className="text-2xl font-semibold text-gray-50">Order Summary</h2>

                    <div className="mt-4">
                        <div className="flex justify-between">
                            <h3 className="text-gray-400 mb-2">Subtotal</h3>
                            <span className="text-gray-50">$89.90</span>
                        </div>
                        
                        <div className="flex justify-between">
                            <h3 className="text-gray-400 mb-2">Shipping</h3>
                            <span className="text-gray-50">$0.00</span>
                        </div>

                        <div className="flex justify-between">
                            <h3 className="text-gray-400 mb-2">Tax</h3>
                            <span className="text-gray-50">$27.35</span>
                        </div>

                        <hr className="text-gray-600 mt-3 mb-3"></hr>

                        <div className="flex justify-between">
                            <h3 className="text-gray-50 font-semibold text-xl">Total</h3>
                            <span className="text-gray-50 font-semibold text-xl">$89.90</span>
                        </div>
                    </div>

                    <div className="mt-6">
                        <button 
                            className="w-full px-4 py-3 bg-purple-500 hover:bg-purple-400 transition 
                            duration-300 rounded mb-3 text-gray-50 font-semibold hover:cursor-pointer"
                        >
                            Proceed to Checkout
                        </button>
                        <button
                            className="w-full px-4 py-3 bg-gray-700 hover:bg-gray-600 transition 
                            duration-300 rounded text-gray-50 font-semibold hover:cursor-pointer"
                        >
                            Continue Shopping
                        </button>
                    </div>
                </aside>
            </main>
        </div>
    )
}