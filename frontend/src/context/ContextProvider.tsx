import { api } from "@/services/api/api";
import { AxiosResponse } from "axios";
import { createContext, ReactNode, useEffect, useState } from "react"
import { useRouter } from "next/router";
import { setCookie } from "nookies";

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
    email: string
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
    signIn: (user : UserProps) => void
}

export const ProductsContext = createContext<ProductsContextProps>({
    products: []
});

export const ReviewsContext = createContext<ReviewsContextProps>({
    reviews: []
});

export const UsersContext = createContext<UsersContextProps>({
    users: [],
    signIn: () => {}
});

export function ContextProvider({children} : ContextProviderProps) {

    const router = useRouter();

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
        }, 5000);

        return () => clearTimeout(timeout)
    })

    const signIn = async ({email, password} : UserProps) => {

        try{
            const response : AxiosResponse = await api.post('/user/session', {
                email,
                password
            })

            console.log('response: ', response);
            if(response.data) {
                const { jwt, refreshToken } = response.data;

                setCookie(undefined, 'reifferce.jwt', jwt, {
                    maxAge: 60 * 60 * 24 * 30,
                    path: "/" 
                })

                setCookie(undefined, 'reifferce.refreshToken', refreshToken, {
                    maxAge: 60 * 60 * 24 * 30,
                    path: "/" 
                })

                api.defaults.headers['Authorization'] = `Bearer ${jwt}` 
                // router.push('/home');
            }

        }catch(error){
            console.log('error: ', error);
        }
    }

    return (
        <UsersContext.Provider value={{ users, signIn }}>
            <ProductsContext.Provider value={{ products, }}>
                <ReviewsContext.Provider value={{ reviews }}>
                    {children}
                </ReviewsContext.Provider>
            </ProductsContext.Provider>
        </UsersContext.Provider>

    )
}