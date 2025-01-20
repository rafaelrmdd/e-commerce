import Image from "next/image"

import electronics from "@/assets/electronics.jpg"
import categoryElectronics from "@/assets/categoryElectronics.png"
import { Card } from "../Card"
import { useContext } from "react"
import { ProductsContext } from "@/pages/_app"

export const Content = () => {

    const products = useContext(ProductsContext)
    console.log("Products: ", products)

    const featuredProducts = products.filter((product) => product.is_featured === true)

    const usdFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 2
    });


    return (
        <div className="bg-gray-50">
            {/* Hero Section*/}
            <div className="flex items-center bg-blue-600 h-96 px-10">
                <div className="flex items-start flex-col gap-y-4 ">
                    <h1 className="text-4xl font-bold text-white">Summer Collection 2025 </h1> 
                    <h2 className="text-1xl font-semibold text-white">Discover the latest trends and amazing deals</h2>
                    <button
                        className="bg-white px-6 py-2 rounded-lg font-semibold text-blue-600"
                    >
                        Shop now
                    </button>
                </div>
            </div>

            {/* Categories Section*/}
            <div className="py-12 px-10">
                <h2 className="text-2xl font-semibold">Shop by Category</h2>

                {/* Categories*/}
                <div className="flex flex-wrap justify-between mt-8">
                    <div className="w-[23%] h-60 flex justify-center items-center bg-slate-500 rounded-lg">
                        <h2 className="text-white text-xl font-semibold">Electronics</h2>
                    </div>
                    <div className="w-[23%] h-60 flex justify-center items-center bg-slate-500 rounded-lg">
                        <h2 className="text-white text-xl font-semibold">Electronics</h2>
                    </div>
                    <div className="w-[23%] h-60 flex justify-center items-center bg-slate-500 rounded-lg">
                        <h2 className="text-white text-xl font-semibold">Electronics</h2>
                    </div>
                    <div className="w-[23%] h-60 flex justify-center items-center bg-slate-500 rounded-lg">
                        <h2 className="text-white text-xl font-semibold">Electronics</h2>
                    </div>
                </div>
            </div>

            {/* Featured Products Section */}
            <div className="py-12 px-10">
                <h2 className="text-2xl font-semibold" >Featured Products</h2>

                {/* Featured Products */}
                <div className="flex justify-between gap-x-20 mt-8">
                    {featuredProducts.map((product) => (
                        <div 
                            className="w-[20%] h-70 p-4 rounded-lg shadow-sm hover:shadow-md hover:cursor-pointer transition-shadow duration-200"
                        >
                            <div className="h-60 mb-4">
                                <Image src={categoryElectronics} alt="teste" className="object-cover w-full h-full rounded-lg" />
                            </div> 
                            <div className="h-10">
                                <h3 className="font-medium text-lg mb-2">{product.name}</h3>
                                <span className="text-blue-600 font-semibold">{usdFormat.format(product.price)}</span>
                            </div>
                        </div>  
                    ))}
                </div>
            </div>
            
            
            <div>
                {/* Special Offer */}
                <div className="bg-gray-900 py-16 text-white">
                    <div className="flex justify-center">
                        <div className="flex flex-col items-center">
                            <h2 className="text-3xl font-bold mb-4">Special Offer</h2>
                            <h3 className="text-xl mb-8">Get 20% off on your first purchase</h3>
                            <button className="px-6 py-2 rounded-lg font-semibold bg-white text-gray-900">
                                Shop Now
                            </button>
                        </div>
                    </div>
                </div>

                <footer className="bg-gray-50 py-16 px-10">
                    a
                </footer>
            </div>
            
        </div>
    )
}