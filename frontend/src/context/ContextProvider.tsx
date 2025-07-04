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
    price: number
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
    timestamp: string
}

export type UserProps = {
    id: string 
    email: string
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
    // users : UserProps[]
    signIn: ({email, password} : {email: string, password: string}) => void
    signOut: () => void
    user: UserProps | undefined
    isUserLogged: boolean
    verifyIfUserIsLogged: () => void
    hasCredentialsError: boolean
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
    // users: [],
    signIn: () => {},
    signOut: () => {},
    user: undefined,
    isUserLogged: false,
    verifyIfUserIsLogged: () => {},
    hasCredentialsError: false
});

export const CartItemsContext = createContext<CartItemsContextProps>({
    cartItems: []
});

export function ContextProvider({children} : ContextProviderProps) {

    const router = useRouter();

    // const [users, setUsers] = useState<UserProps[]>([]);
    const [products, setProducts] = useState<ProductProps[]>([]);
    const [reviews, setReviews] = useState<ReviewProps[]>([]);
    const [cartItems, setCartItems] = useState<CartItemsProps[]>([]);
    const [user, setUser] = useState<UserProps | undefined>();

    const [hasCredentialsError, setHasCredentialsError] = useState(false);

    const isUserLogged = !!user;

    const REFRESH_INTERVAL = 7000;

    //Updates the users, products, reviews and carts data every specified interval
    //Keeps the user variable updated for its using through the application
    //Verifies if cookies data exists and if not, signOut the user
    useEffect(() => {
        const fetchData = async () => {
            const { 'reifferce.jwt': jwt } = parseCookies();

            try {
                if(!jwt){
                    setUser(undefined);

                    //For now just the user, but later add the rest (products, reviews, cartItems)

                    return;
                }

                const [productsResponse, reviewsResponse, cartItemsResponse] = await Promise.all([
                    //Maybe add api.get('users'); later
                    api.get('products'),
                    api.get('reviews'),
                    api.get('carts')
                ])

                // setUsers(usersResponse.data);
                setProducts(productsResponse.data);
                setReviews(reviewsResponse.data);
                setCartItems(cartItemsResponse.data);
            }catch
            {
                console.log('Error fetching data');
                signOut();
            }
        }

        const initializeUser = async () => {
            const { 'reifferce.refreshToken': refreshToken } = parseCookies();

            try{
                if(!refreshToken){
                    return;
                }

                const response : AxiosResponse = await api.get(`/user/me/${refreshToken}`)

                const { id, email } = response.data;
                setUser({
                    id,
                    email
                })
            }catch(e){
                console.log('Error keeping user updated: ', e)
                signOut();
            }
        }

        fetchData();
        initializeUser();

        const intervalId = setInterval(() => {
            fetchData();
        }, REFRESH_INTERVAL);

        return () => {
            clearInterval(intervalId);
        }
    }, [])

    const signIn = async ({email, password} : {email: string, password: string}) => {
        try{
            const response : AxiosResponse = await api.post('/user/session', {
                email,
                password
            })

            if(response.data) {
                const { jwt, refreshToken, id } = response.data;

                setUser({
                    id,
                    email
                })

                setCookie(undefined, 'reifferce.jwt', jwt, {
                    path: "/" 
                })

                setCookie(undefined, 'reifferce.refreshToken', refreshToken, {
                    path: "/" 
                })

                router.push('/home');
            }

        }catch{
            console.log('Login or password is incorrect')
            setHasCredentialsError(true);
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
        <UsersContext.Provider 
            value={{ signIn, signOut, user, isUserLogged, verifyIfUserIsLogged, hasCredentialsError }
        }>
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