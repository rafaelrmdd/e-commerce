import { api } from "@/services/api/api";
import { AxiosResponse } from "axios";
import { createContext, ReactNode, useEffect, useState } from "react"
import { useRouter } from "next/router";
import { destroyCookie, parseCookies, setCookie } from "nookies";

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
    user: UserProps
}

export const ProductsContext = createContext<ProductsContextProps>({
    products: []
});

export const ReviewsContext = createContext<ReviewsContextProps>({
    reviews: []
});

export const UsersContext = createContext<UsersContextProps>({
    users: [],
    signIn: () => {},
    user: {
        email: "",
        password: ""
    }
});


export function ContextProvider({children} : ContextProviderProps) {

    const router = useRouter();

    const [users, setUsers] = useState<UserProps[]>([]);
    const [products, setProducts] = useState<ProductProps[]>([]);
    const [reviews, setReviews] = useState<ReviewProps[]>([]);
    const [user, setUser] = useState<UserProps>({
        email: "",
        password: ""
    });

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

    useEffect(() => {
        const { 'reifferce.jwt': jwt } = parseCookies();
        const { 'reifferce.refreshToken': refreshToken } = parseCookies();

        if(refreshToken && jwt) {
            api.get(`/user/refreshToken/${refreshToken}`).then(response => {
                const { email, password } = response.data;

                setUser({
                    email,
                    password
                })
            }).catch(() => {
                signOut();
            })
        }
    }, [])

    const signIn = async ({email, password} : UserProps) => {

        try{
            const response : AxiosResponse = await api.post('/user/session', {
                email,
                password
            })

            if(response.data) {
                const { jwt, refreshToken } = response.data;

                setUser({
                    email,
                    password
                })

                setCookie(undefined, 'reifferce.jwt', jwt, {
                    maxAge: 60 * 60 * 24 * 30,
                    path: "/" 
                })

                setCookie(undefined, 'reifferce.refreshToken', refreshToken, {
                    maxAge: 60 * 60 * 24 * 30,
                    path: "/" 
                })

                api.defaults.headers['Authorization'] = `Bearer ${jwt}` 

                router.push('/home');
            }

        }catch(error){
            console.log('error: ', error);
        }
    }

    const signOut = () => {
        destroyCookie(undefined, 'reifferce.jwt');
        destroyCookie(undefined, 'reifferce.refreshToken');

        router.push('/login');  
    }

    return (
        <UsersContext.Provider value={{ users, signIn, user }}>
            <ProductsContext.Provider value={{ products, }}>
                <ReviewsContext.Provider value={{ reviews }}>
                    {children}
                </ReviewsContext.Provider>
            </ProductsContext.Provider>
        </UsersContext.Provider>

    )
}