import { useRouter } from "next/router"
import { Header } from "@/components/Header";

export default function ProductPage() {

    // const router = useRouter();

    return (
        <div className="bg-gray-900 h-full">
            <Header />

            <main className="px-8 mt-8">
                <section className="flex justify-between">
                    <div className="w-[47%] min-h-[380px]">
                        {/* Main Image */}
                        <div className="w-full h-[380px] bg-gray-800 rounded p-2">

                        </div>

                        {/* Other Images Selection */}
                        <div className="mt-4 flex gap-x-3">
                            <div className="w-36 h-28 rounded bg-gray-800">

                            </div>
                            <div className="w-36 h-28 rounded bg-gray-800">

                            </div >
                            <div className="w-36 h-28 rounded bg-gray-800">

                            </div>
                            <div className="w-36 h-28 rounded bg-gray-800">

                            </div>
                        </div>
                    </div>

                    <div className="w-[48%] min-h-[380px]">
                        <h1 className="text-gray-50 text-3xl font-bold mb-2">Smartphone 5G Pro Max</h1>
                        <span className="text-gray-300 block mb-2">4.7 (153 avalições)</span>
                        <span className="text-purple-400 text-3xl font-bold">$3.499.90</span>

                        {/* Color choose */}
                        <div className="mt-6">
                            <h2 className="text-gray-50 text-xl font-bold mb-3">Color</h2>
                            <div className="flex gap-x-2">
                                <div className="text-gray-400 bg-gray-800 px-4 py-2 rounded">
                                    Black
                                </div>
                                <div className="text-gray-400 bg-gray-800 px-4 py-2 rounded">
                                    Blue
                                </div>
                                <div className="text-gray-400 bg-gray-800 px-4 py-2 rounded">
                                    White
                                </div>
                            </div>
                        </div>

                        {/* Quantity */}
                        <div className="mt-4">
                            <h2 className="text-gray-50 text-xl font-bold mb-3">Quantity</h2>
                            <div className="flex">
                                <div className="border border-gray-700 bg-gray-800 px-3 py-1.5 w-10 h-10 rounded-l">
                                    <h2 className="text-gray-50 text-center">-</h2>
                                </div>
                                <div className="border-t border-b border-gray-700 bg-gray-800 px-3 py-1.5 w-10 h-10 ">
                                    <h2 className="text-gray-50 text-center">1</h2>
                                </div>
                                <div className="border border-gray-700 bg-gray-800 px-3 py-1.5 w-10 h-10 rounded-r">
                                    <h2 className="text-gray-50 text-center">+</h2>
                                </div>
                            </div>
                            <h2 className="text-gray-400 text-[0.9rem] mt-2">Avaiable: 15 items</h2>
                        </div>

                        <div className="mt-7.5">
                            <button 
                                className="w-full bg-purple-500 px-4 py-4 text-black font-bold text-xl 
                                rounded mb-4"
                            >
                                BUY NOW
                            </button>
                            <button     
                                className="w-full bg-gray-800 px-4 py-4 text-gray-50 font-bold text-xl 
                                rounded"
                            >
                                ADD TO CART
                            </button>
                        </div>
                    </div>
                </section>

                {/* Informations */}
                <section className="flex justify-between mt-20">
                    <div className="w-[70%]">
                        {/* Description */}
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold text-gray-50 mb-3">Description</h2>
                            <div className="bg-gray-800 rounded p-5">
                                <h3 className="text-gray-50">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
                                    voluptatem quos veritatis deserunt, asperiores nostrum libero quam est expedita ipsa?
                                </h3>
                            </div>
                        </div>

                        <div className="mb-6">
                            <h2 className="text-2xl font-bold text-gray-50 mb-3">Traits</h2>
                            <div className="bg-gray-800 rounded p-5">
                                <ul className="flex flex-col gap-y-2">
                                    <li>
                                        <span className="mr-2 text-purple-400">✓</span>
                                        <h3 className="inline text-gray-400">Câmera principal de 108MP com estabilização óptica</h3>
                                    </li>
                                    <li>
                                        <span className="mr-2 text-purple-400">✓</span>
                                        <h3 className="inline text-gray-400">Câmera principal de 108MP com estabilização óptica</h3>
                                    </li>
                                    <li>
                                        <span className="mr-2 text-purple-400">✓</span>
                                        <h3 className="inline text-gray-400">Câmera principal de 108MP com estabilização óptica</h3>
                                    </li>
                                    <li>
                                        <span className="mr-2 text-purple-400">✓</span>
                                        <h3 className="inline text-gray-400">Câmera principal de 108MP com estabilização óptica</h3>
                                    </li>
                                    <li>
                                        <span className="mr-2 text-purple-400">✓</span>
                                        <h3 className="inline text-gray-400">Câmera principal de 108MP com estabilização óptica</h3>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-50 mb-3">Specifications</h2>
                            <div className="bg-gray-800 rounded p-5">

                            </div>
                        </div>
                    </div>
                    
                    <div className="w-[25%]">
                        <h2 className="text-2xl font-bold text-gray-50 mb-3">Related Products</h2>

                        <div className="flex flex-col gap-y-3">
                            <div className="p-2 bg-gray-800 flex rounded hover:cursor-pointer">
                                {/* Image */}
                                <div>

                                </div>

                                {/* Informations */}
                                <div>
                                    <h3 className="text-gray-50 text-xl font-semibold">Fone de ouvido</h3>
                                    <span className="text-purple-500 text-xl font-bold">$75.90</span>
                                </div>
                            </div>
                            <div className="p-2 bg-gray-800 rounded hover:cursor-pointer">
                                <div>

                                </div>

                                <div>
                                    <h3 className="text-gray-50 text-xl font-semibold">Fone de ouvido</h3>
                                    <span className="text-purple-500 text-xl font-bold">$75.90</span>
                                </div>

                            </div>
                            <div className="p-2 bg-gray-800 rounded hover:cursor-pointer">
                                <div>

                                </div>

                                <div>
                                    <h3 className="text-gray-50 text-xl font-semibold">Fone de ouvido</h3>
                                    <span className="text-purple-500 text-xl font-bold">$75.90</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}