import categoryElectronics from "@/assets/categoryElectronics.png"
import Image from "next/image"

import { BiTrash } from "react-icons/bi"

export const Card = () => {
    return (
        <div 
            className="w-[20%] h-80 p-4 rounded-lg shadow-sm hover:shadow-md hover:cursor-pointer transition-shadow duration-200"
        >
            <div className="h-60 mb-4">
                <Image src={categoryElectronics} alt="teste" className="object-cover w-full h-full rounded-lg" />
            </div> 
            <div>
                <h3 className="font-medium text-lg mb-2">Wireless Headphones</h3>
                <span className="text-blue-600 font-semibold">$89.99</span>
            </div>
            <div className="flex items-center gap-2 mt-4">
                <button 
                    className="px-4 py-2 flex-1 text-white bg-blue-600 hover:bg-blue-700 rounded-lg "
                >
                    Add to Cart
                </button>
                <BiTrash className="h-6 w-6" color="red" />
            </div>
        </div>  
    )
}