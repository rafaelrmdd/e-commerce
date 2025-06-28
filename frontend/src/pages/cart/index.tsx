import { Header } from "@/components/Header"
import { FaTrash } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { CartItemsContext, ProductProps, ProductsContext, UsersContext } from "@/context/ContextProvider";
import { api } from "@/services/api/api";
import { Footer } from "@/components/Footer";
import { usDolarFormat } from "@/utils/formatters";

import Image from "next/image";

export default function Cart() {

    const { user } = useContext(UsersContext);
    const { cartItems } = useContext(CartItemsContext);
    const { products } = useContext(ProductsContext);
    
    const [productsToShow, setProductsToShow] = useState<ProductProps[]>([]);

    useEffect(() => {
        const userCartItems = cartItems.filter(item => item.userId === user?.id);
        
        const productsInCart = userCartItems.map(cartItem => 
            products.find(product => product.id === cartItem.productId)
        ).filter(product => product !== undefined)
        
        setProductsToShow(productsInCart);
    }, [cartItems, products, user?.id]);

    const findCartProductId = (productId: string) => {
        const userCartItems = cartItems.filter(item => item.userId === user?.id);

        const product = userCartItems.find((product) => product.productId === productId)

        return product?.id;
    }

    const handleDeleteProductFromCart = async (productId : string | undefined) => {
        try {
            await api.delete(`/cart/${productId}`)
        }catch(error){
            console.log('delete error: ', error)
        }
    }

    const subtotal = productsToShow.reduce((sum, product) => sum + Number(product.price), 0);
    const shipping = 0;
    const tax = 0;
    const total = subtotal- shipping - tax;

    const subtotalFormatted = usDolarFormat.format(subtotal);
    const shippingFormatted = usDolarFormat.format(shipping);
    const taxFormatted = usDolarFormat.format(tax);
    const totalFormatted = usDolarFormat.format(total);

    return (
        <div className="h-full bg-gray-900">
            <Header />

            <main className="flex px-32 mt-8 rounded justify-between items-start mb-24">
                <section className="w-[67%] bg-gray-800 rounded p-6">
                    <h2 className="text-gray-50 font-semibold text-xl">Cart Items</h2>

                    <div className="mt-4 flex flex-col gap-y-4">
                        {productsToShow.map((product) => (
                            <div 
                                className="flex bg-gray-700 p-4 rounded gap-x-4"
                                key={Math.random()}
                            >
                                <div className="w-24 bg-gray-400 rounded relative"> 
                                    <Image 
                                        src={product.imageURL}
                                        alt="Product's image"
                                        fill
                                    />
                                </div>

                                <div className="w-[57%]">
                                    <h2 className="text-gray-50 font-semibold">{product.name}</h2>
                                    <h3 className="text-gray-400 text-[0.8rem] truncate">{product.description}</h3>
                                    <span className="block text-gray-50  mt-2">${product.price}</span>
                                </div>

                                <div className="flex ml-auto items-center gap-x-8">
                                    <span className="text-gray-400 text-xl hover:cursor-pointer">-</span>
                                    <span className="text-gray-50 text-xl font-semibold">3</span>
                                    <span className="text-gray-400 text-xl hover:cursor-pointer">+</span>

                                    <FaTrash 
                                        onClick={() => handleDeleteProductFromCart(findCartProductId(product.id))}
                                        className="text-red-400 hover:cursor-pointer text-xl "    
                                    />  
                                </div>
                            </div>
                        ))}

                        <hr className="text-gray-600 mt-6 mb-6"></hr>

                        <div 
                            className="flex items-center rounded text-red-400 hover:text-red-300
                            transition duration-300 hover:cursor-default"
                        >
                            <FaTrash 
                                className=" hover:cursor-pointer text-xr mr-2"    
                            />
                            <h3>Clear all items</h3>
                        </div>
                    </div>
                </section>

                <aside className="w-[30%] bg-gray-800 rounded p-6">
                    <h2 className="text-2xl font-semibold text-gray-50">Order Summary</h2>

                    <div className="mt-4">
                        <div className="flex justify-between">
                            <h3 className="text-gray-400 mb-2">Subtotal</h3>
                            <span className="text-gray-50">{subtotalFormatted}</span>
                        </div>
                        
                        <div className="flex justify-between">
                            <h3 className="text-gray-400 mb-2">Shipping</h3>
                            <span 
                                className={`text-gray-50 ${shipping == 0 ? "text-green-300" : null}`}
                            >
                                {shipping == 0 ? "Free" : shippingFormatted}
                            </span>
                        </div>

                        <div className="flex justify-between">
                            <h3 className="text-gray-400 mb-2">Tax</h3>
                            <span 
                                className={`text-gray-50 ${tax == 0 ? "text-green-300" : null}`}
                            >
                                {tax == 0 ? "Free" : taxFormatted}
                            </span>
                        </div>

                        <hr className="text-gray-600 mt-3 mb-3"></hr>

                        <div className="flex justify-between">
                            <h3 className="text-gray-50 font-semibold text-xl">Total</h3>
                            <span className="text-gray-50 font-semibold text-xl">{totalFormatted}</span>
                        </div>
                    </div>

                    <div className="mt-6">
                        <button 
                            className="w-full px-4 py-3 bg-purple-500 hover:bg-purple-400 transition 
                            duration-300 rounded mb-3 text-gray-50 font-semibold hover:cursor-pointer"
                        >
                            Proceed to Checkout
                        </button>
                        <button
                            className="w-full px-4 py-3 bg-gray-700 hover:bg-gray-600 transition 
                            duration-300 rounded text-gray-50 font-semibold hover:cursor-pointer"
                        >
                            Continue Shopping
                        </button>
                    </div>
                </aside>
            </main>

            <Footer />
        </div>
    )
}