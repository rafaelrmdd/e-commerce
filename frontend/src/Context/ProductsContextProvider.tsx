import { api } from "@/services/api/api";
import { createContext, ReactNode, useEffect, useState } from "react"

export type ProductProps = {
    id: number
    name: string
    description: string
    price: string
    image: string
    isBestSeller: boolean
    isFeatured: boolean
}

type ProductsContextProps = {
    products : ProductProps[]
}

type ProductsProviderProps = {
    children: ReactNode
}

export const ProductsContext = createContext<ProductsContextProps>({
    products: []
});

export function ProductsContextProvider({children} : ProductsProviderProps) {

    const [products, setProducts] = useState<ProductProps[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await api.get("products");
        
            const { data } = response;

            if(data) {
                setProducts(data);
                console.log(products);
            }
        }

        setTimeout(fetchData, 2000);
    })


    return (
        <ProductsContext.Provider value={{ products, }}>
            {children}
        </ProductsContext.Provider>
    )
}