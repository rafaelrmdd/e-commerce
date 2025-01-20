import categoryElectronics from "@/assets/categoryElectronics.png"
import { ProductsContext } from "@/pages/_app"
import Image from "next/image"
import { useContext } from "react"

import { BiTrash } from "react-icons/bi"

export const Card = () => {

    const products = useContext(ProductsContext)
    console.log(products)

    return (
        <div 
            className="w-[20%] h-70 p-4 rounded-lg shadow-sm hover:shadow-md hover:cursor-pointer transition-shadow duration-200"
        >
            <div className="h-60 mb-4">
                <Image src={categoryElectronics} alt="teste" className="object-cover w-full h-full rounded-lg" />
            </div> 
            <div className="h-10">
                <h3 className="font-medium text-lg mb-2">Wireless Headphones</h3>
                <span className="text-blue-600 font-semibold">$89.99</span>
            </div>
        </div>    
    )
}