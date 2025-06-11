import { UsersContext } from "@/context/ContextProvider";
import { api } from "@/services/api/api";
import { useContext } from "react";


export const useCart = () => {
    const { user } = useContext(UsersContext);

    const handleAddProductToCart = async (productId : number) => {
        try{
            await api.post(`/cart/${user.id}`, {
                productId: productId,
                userId: user.id,
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

