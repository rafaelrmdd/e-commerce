import { UsersContext } from "@/context/ContextProvider";
import { api } from "@/services/api/api";
import { useContext } from "react";

export const useCart = () => {
    const { user, isUserLogged } = useContext(UsersContext);

    const handleAddProductToCart = async (productId : number) => {
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
            console.log('error: ', error);
        }
    }

    return {
        handleAddProductToCart,
    }
}

