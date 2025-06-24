import { UsersContext } from "@/context/ContextProvider";
import { api } from "@/services/api/api";
import { useContext, useState } from "react";

export const useCart = () => {
    const { user, isUserLogged } = useContext(UsersContext);
    const [hasError, setHasError] = useState(false);

    const handleAddProductToCart = async (productId : string) => {
        if(!isUserLogged){
            console.log('User must be logged to add producs to cart')
        }

        try{
            await api.post(`/cart/${user?.id}`, {
                productId: productId,
                userId: user?.id,
                quantity: 1
            });
        }catch(error){
            setHasError(true);
            console.log('error: ', error);
        }
    }

    return {
        handleAddProductToCart,
        hasError
    }
}

