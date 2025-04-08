import { Header } from "@/components/Header";
import { ProductsContext } from "@/Context/ProductsContextProvider";
import { useContext } from "react";

export default function Offers() {

    const { products } = useContext(ProductsContext)

    return (
        <div className="bg-gray-900">
            <Header />

            <section className="w-full bg-gray-950 py-20">
                <div className="flex justify-center mb-3">
                    <button 
                        className="text-gray-950 font-bold bg-purple-500 rounded-full px-5 py-2"
                    >
                        LIMITED OFFERS
                    </button>
                </div>
                

                <h1 className="text-gray-50 text-5xl font-bold text-center mb-3">Super Offers</h1>
                <h3 className="text-gray-50 text-center">Economize até 50% em produtos selecionados. Promoção válida até 15/04/2025!</h3>

                <div className="flex justify-center gap-x-4 mt-6">
                    <div className="p-3 rounded bg-gray-800 w-20 h-20">
                        <span className="text-center block text-gray-50 font-bold text-3xl">07</span>
                        <h3 className="text-center text-gray-400 text-[0.8rem]">Days</h3>
                    </div>
                    <div className="p-3 rounded bg-gray-800 w-20 h-20">
                        <span className="text-center block text-gray-50 font-bold text-3xl">12</span>
                        <h3 className="text-center text-gray-400 text-[0.8rem]">Hours</h3>
                    </div>
                    <div className="p-3 rounded bg-gray-800 w-20 h-20">
                        <span className="text-center block text-gray-50 font-bold text-3xl">59</span>
                        <h3 className="text-center text-gray-400 text-[0.8rem]">Minutes</h3>
                    </div>
                    <div className="p-3 rounded bg-gray-800 w-20 h-20">
                        <span className="text-center block text-gray-50 font-bold text-3xl">30</span>
                        <h3 className="text-center text-gray-400 text-[0.8rem]">Seconds</h3>
                    </div>
                </div>
            </section>

            {/* Products on Offer */}
            <main className="px-8 mt-8">
                <div className="flex gap-x-8">
                    <aside className="bg-gray-800 p-4 rounded w-1/5 sticky">
                        <h2 className="text-gray-50 font-semibold text-xl mb-5">Filters</h2>

                        <div>
                            <h2 className="text-gray-50 font-semibold text-xl mb-2">Categories</h2>

                            <ul className="text-gray-50 flex flex-col gap-y-1">
                                <li className="py-2 px-1 rounded hover:bg-gray-700">
                                    All
                                </li>
                                <li className="py-2 px-1 rounded hover:bg-gray-700">
                                    Electronics
                                </li>
                                <li className="py-2 px-1 rounded hover:bg-gray-700">
                                    Smartphones
                                </li>
                                <li className="py-2 px-1 rounded hover:bg-gray-700">
                                    Computers
                                </li>
                                <li className="py-2 px-1 rounded hover:bg-gray-700">
                                    Audio & Sound
                                </li>
                                <li className="py-2 px-1 rounded hover:bg-gray-700">
                                    Acessories
                                </li>
                                <li className="py-2 px-1 rounded hover:bg-gray-700">
                                    Fashion
                                </li>
                                <li className="py-2 px-1 rounded hover:bg-gray-700">
                                    House & Decoration
                                </li>
                            </ul>
                        </div>

                        <div className="mt-7">
                            <h2 className="text-gray-50 text-xl font-semibold">Price</h2>
                            <input 
                                type="range" min={50} max={5000} step={100} 
                                className="w-full bg-gray-700 appearance-none rounded-full
                                accent-purple-500 h-2 mt-5"
                            />
                            
                            <div className="flex justify-between mt-2">
                                <span className="text-gray-500 text-[0.8rem]">$50</span>
                                <span className="text-gray-500 text-[0.8rem]">$5000</span>
                            </div>
                        </div>

                        <div className="mt-7">
                            <h2 className="text-gray-50 text-xl font-semibold">Reviews</h2>
                            
                            <div className="flex flex-col gap-y-2 mt-2">
                                <span className="text-yellow-300 mr-1">
                                    ★★★★★ <span className="text-gray-300">ou mais</span>
                                </span>
                                <span className="text-yellow-300 mr-1">
                                    ★★★★☆ <span className="text-gray-300">ou mais</span>
                                </span>
                                <span className="text-yellow-300 mr-1">
                                    ★★★☆☆ <span className="text-gray-300">ou mais</span>
                                </span>
                                <span className="text-yellow-300 mr-1">
                                    ★★☆☆☆ <span className="text-gray-300">ou mais</span>
                                </span>
                                <span className="text-yellow-300 mr-1">
                                    ★☆☆☆☆ <span className="text-gray-300">ou mais</span>
                                </span>
                            </div>
                        </div>

                        <button 
                            className="border border-purple-500 text-purple-400
                            px-3 py-2 mt-7 w-full rounded"
                        >
                            Clean Filters
                        </button>
                    </aside>

                    <div className="flex-1">
                        <h2 className="text-2xl font-bold text-gray-50">Offers</h2>
                        <h3 className="text-[0.8rem] text-gray-400 ">8 products found</h3>

                        {/* Products */}
                        <div className="flex flex-wrap mt-6 gap-x-4 gap-y-6">
                            <div className="rounded bg-gray-800 w-[23.79%] h-[374px]">
                                {/* Image */}
                                <div className="bg-gray-950 w-full h-1/2 rounded-t">

                                </div>

                                {/* Informations */}
                                <div className="px-3">
                                    <div className="mb-1 mt-1">
                                        <span className="text-yellow-300 mr-1">★★★★☆</span>
                                        <span className="text-gray-400 text-[0.9rem]">(4.8)</span>
                                    </div>
                                    
                                    <h2 className="text-gray-50 font-semibold mb-3 text-[0.9rem]">Fone de Ouvido Bluetooth Premium</h2>
                                    <span className="text-purple-400 font-semibold text-xl">$99.90</span>

                                    <button 
                                        className="bg-purple-500 px-3 py-2 text-gray-950 font-semibold
                                        rounded block mt-3 w-full"
                                    >
                                        Add To Cart
                                    </button>
                                </div>
                            </div>  

                            <div className="rounded bg-gray-800 w-[23.79%] h-[374px]">
                                {/* Image */}
                                <div className="bg-gray-950 w-full h-1/2 rounded-t">

                                </div>

                                {/* Informations */}
                                <div className="px-3">
                                    <div className="mb-1 mt-1">
                                        <span className="text-yellow-300 mr-1">★★★★☆</span>
                                        <span className="text-gray-400 text-[0.9rem]">(4.8)</span>
                                    </div>
                                    
                                    <h2 className="text-gray-50 font-semibold mb-3 text-[0.9rem]">Fone de Ouvido Bluetooth Premium</h2>
                                    <span className="text-purple-400 font-semibold text-xl">$99.90</span>

                                    <button 
                                        className="bg-purple-500 px-3 py-2 text-gray-950 font-semibold
                                        rounded block mt-3 w-full"
                                    >
                                        Add To Cart
                                    </button>
                                </div>
                            </div>  

                            <div className="rounded bg-gray-800 w-[23.79%] h-[374px]">
                                {/* Image */}
                                <div className="bg-gray-950 w-full h-1/2 rounded-t">

                                </div>

                                {/* Informations */}
                                <div className="px-3">
                                    <div className="mb-1 mt-1">
                                        <span className="text-yellow-300 mr-1">★★★★☆</span>
                                        <span className="text-gray-400 text-[0.9rem]">(4.8)</span>
                                    </div>
                                    
                                    <h2 className="text-gray-50 font-semibold mb-3 text-[0.9rem]">Fone de Ouvido Bluetooth Premium</h2>
                                    <span className="text-purple-400 font-semibold text-xl">$99.90</span>

                                    <button 
                                        className="bg-purple-500 px-3 py-2 text-gray-950 font-semibold
                                        rounded block mt-3 w-full"
                                    >
                                        Add To Cart
                                    </button>
                                </div>
                            </div>  

                            <div className="rounded bg-gray-800 w-[23.79%] h-[374px]">
                                {/* Image */}
                                <div className="bg-gray-950 w-full h-1/2 rounded-t">

                                </div>

                                {/* Informations */}
                                <div className="px-3">
                                    <div className="mb-1 mt-1">
                                        <span className="text-yellow-300 mr-1">★★★★☆</span>
                                        <span className="text-gray-400 text-[0.9rem]">(4.8)</span>
                                    </div>
                                    
                                    <h2 className="text-gray-50 font-semibold mb-3 text-[0.9rem]">Fone de Ouvido Bluetooth Premium</h2>
                                    <span className="text-purple-400 font-semibold text-xl">$99.90</span>

                                    <button 
                                        className="bg-purple-500 px-3 py-2 text-gray-950 font-semibold
                                        rounded block mt-3 w-full"
                                    >
                                        Add To Cart
                                    </button>
                                </div>
                            </div>  

                            <div className="rounded bg-gray-800 w-[23.79%] h-[374px]">
                                {/* Image */}
                                <div className="bg-gray-950 w-full h-1/2 rounded-t">

                                </div>

                                {/* Informations */}
                                <div className="px-3">
                                    <div className="mb-1 mt-1">
                                        <span className="text-yellow-300 mr-1">★★★★☆</span>
                                        <span className="text-gray-400 text-[0.9rem]">(4.8)</span>
                                    </div>
                                    
                                    <h2 className="text-gray-50 font-semibold mb-3 text-[0.9rem]">Fone de Ouvido Bluetooth Premium</h2>
                                    <span className="text-purple-400 font-semibold text-xl">$99.90</span>

                                    <button 
                                        className="bg-purple-500 px-3 py-2 text-gray-950 font-semibold
                                        rounded block mt-3 w-full"
                                    >
                                        Add To Cart
                                    </button>
                                </div>
                            </div>          
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}