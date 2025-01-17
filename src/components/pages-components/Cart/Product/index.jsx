import categoryElectronics from "@/assets/categoryElectronics.png"
import Image from "next/image"

import { BiMinus, BiPlus, BiTrash } from 'react-icons/bi';

export const Product = () => {
    return (
        <div className="flex p-4 items-center">
            <div className="h-28 w-28 mr-8">
                <Image src={categoryElectronics} alt="teste" className="object-cover w-full h-full rounded-lg" />
            </div>
            
            <div>
                <h3 className="font-medium text-base mb-2">Wireless Headphones</h3>
                <span className="text-blue-600 font-semibold">$89.99</span>
            </div>

            <div className="flex items-center ml-auto gap-4">
                <BiMinus />
                <span>1</span>
                <BiPlus />
                <BiTrash className="w-5 h-5" color="red"/>
            </div>
        </div>
    )
}