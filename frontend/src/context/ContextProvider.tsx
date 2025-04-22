import { api } from "@/services/api/api";
import { createContext, ReactNode, useEffect, useState } from "react"

type ContextProviderProps = {
    children: ReactNode
}

export type ProductProps = {
    id: number
    name: string
    description: string
    price: string
    image: string
    isBestSeller: boolean
    isFeatured: boolean
    categoryId: number
    subCategoryId: number
}

export type ReviewProps = {
    id: number
    productId: string
    userId: string
    stars: number
    title: string
    comment: string
    timestamp: string
}

export type UserProps = {
    id: number
    name: string
    login: string
    password: string
}


type ProductsContextProps = {
    products : ProductProps[]
}

type ReviewsContextProps = {
    reviews : ReviewProps[]
}

type UsersContextProps = {
    users : UserProps[]
}


export const ProductsContext = createContext<ProductsContextProps>({
    products: []
});

export const ReviewsContext = createContext<ReviewsContextProps>({
    reviews: []
});

export const UsersContext = createContext<UsersContextProps>({
    users: []
});

export function ContextProvider({children} : ContextProviderProps) {

    const [users, setUsers] = useState<UserProps[]>([]);
    const [products, setProducts] = useState<ProductProps[]>([]);
    const [reviews, setReviews] = useState<ReviewProps[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await api.get("users");
        
            const { data } = response;

            if(data) {
                setUsers(data);
            }
        }

        const fetchProducts = async () => {
            const response = await api.get("products");
        
            const { data } = response;

            if(data) {
                setProducts(data);
            }
        }

        const fetchReviews = async () => {
            const response = await api.get("reviews");
        
            const { data } = response;

            if(data) {
                setReviews(data);
            }
        }

        const timeout = setTimeout(() => 
        {
            fetchUsers()
            fetchProducts()
            fetchReviews()
        }, 2000);

        return () => clearTimeout(timeout)
    }, [])


    return (
        <UsersContext.Provider value={{ users }}>
            <ProductsContext.Provider value={{ products, }}>
                <ReviewsContext.Provider value={{ reviews }}>
                    {children}
                </ReviewsContext.Provider>
            </ProductsContext.Provider>
        </UsersContext.Provider>

    )
}