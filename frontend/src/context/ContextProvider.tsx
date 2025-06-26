import { api } from "@/services/api/api";
import { AxiosResponse } from "axios";
import { createContext, ReactNode, useEffect, useState } from "react"
import { useRouter } from "next/router";
import { destroyCookie, parseCookies, setCookie } from "nookies";

type ContextProviderProps = {
    children: ReactNode
}

export type ProductProps = {
    id: string
    name: string
    description: string
    price: string
    imageURL: string
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
}

export type UserProps = {
    id: string 
    email: string
    password: string 
}

export type CartItemsProps = {
    id: string
    productId: string
    userId : string
    quantity: number
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
    signOut: () => void
    user: UserProps | undefined
    isUserLogged: boolean
    verifyIfUserIsLogged: () => void
}

type CartItemsContextProps = {
    cartItems: CartItemsProps[]
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
    signOut: () => {},
    user: undefined,
    isUserLogged: false,
    verifyIfUserIsLogged: () => {}
});

export const CartItemsContext = createContext<CartItemsContextProps>({
    cartItems: []
});

export function ContextProvider({children} : ContextProviderProps) {

    const router = useRouter();

    const [users, setUsers] = useState<UserProps[]>([]);
    const [products, setProducts] = useState<ProductProps[]>([]);
    const [reviews, setReviews] = useState<ReviewProps[]>([]);
    const [cartItems, setCartItems] = useState<CartItemsProps[]>([]);
    const [user, setUser] = useState<UserProps | undefined>();

    const isUserLogged = !!user;

    const REFRESH_INTERVAL = 7000;

    //Updates the users, products, reviews and carts data every specified interval
    //Keeps the user variable updated for its using through the application
    //Verifies if cookies data exists and if not, signOut the user
    useEffect(() => {
        const fetchData = async () => {
            try {
                const [usersResponse, productsResponse, reviewsResponse, cartItemsResponse] = await Promise.all([
                    api.get('users'),
                    api.get('products'),
                    api.get('reviews'),
                    api.get('carts')
                ])

                setUsers(usersResponse.data);
                setProducts(productsResponse.data);
                setReviews(reviewsResponse.data);
                setCartItems(cartItemsResponse.data);
            }catch
            {
                console.log('Error fetching data');
            }
        }

        const initializeUser = async () => {
            const { 'reifferce.jwt': jwt } = parseCookies();
            const { 'reifferce.refreshToken': refreshToken } = parseCookies();

            if(!jwt || !refreshToken){
                signOut();
                return;
            }

            try{
                const response : AxiosResponse = await api.get(`/user/refreshToken/${refreshToken}`)

                if (!response.data) {
                    signOut();
                    return;
                }

                const { id, email, password } = response.data;
                setUser({
                    id,
                    email,
                    password
                })
            }catch(e){
                console.log('error keeping user updated: ', e)
                signOut();
            }
        }

        fetchData();
        initializeUser();

        const intervalId = setInterval(() => {
            fetchData();
            // keepUserUpdated();
        }, REFRESH_INTERVAL);

        return () => {
            clearInterval(intervalId);
        }
    }, [])

    const signIn = async ({email, password} : UserProps) => {
        try{
            const response : AxiosResponse = await api.post('/user/session', {
                email,
                password
            })

            if(response.data) {
                const { jwt, refreshToken, id } = response.data;

                setUser({
                    id,
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

                // api.defaults.headers.common['Authorization'] = `Bearer ${jwt}` 

                router.push('/home');
            }

        }catch(error){
            console.log('error in signIn: ', error);
        }
    }

    const signOut = () => {
        destroyCookie(undefined, 'reifferce.jwt');
        destroyCookie(undefined, 'reifferce.refreshToken');

        setUser(undefined);

        router.push('/login');  
    }

    const verifyIfUserIsLogged = () => {
        if (!isUserLogged){
            signOut();
        }
    }

    return (
        <UsersContext.Provider value={{ users, signIn, signOut, user, isUserLogged, verifyIfUserIsLogged }}>
            <ProductsContext.Provider value={{ products, }}>
                <ReviewsContext.Provider value={{ reviews }}>
                    <CartItemsContext.Provider value={{ cartItems }}>
                        {children}
                    </CartItemsContext.Provider>
                </ReviewsContext.Provider>
            </ProductsContext.Provider>
        </UsersContext.Provider>

    )
}