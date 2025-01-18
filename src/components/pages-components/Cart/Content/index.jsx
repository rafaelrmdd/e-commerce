import { Product } from "../Product";

export const Content = () => {
    return (
        <div className="bg-gray-50">
            <div className="px-10 mt-6">
                <h3><span>Home </span>/<span> Cart</span></h3>
            </div>

            <div className="px-10 mt-6">
                <h2 className="text-2xl font-semibold">Your Cart</h2>

                <div className="flex mt-6">

                    {/* Products on Cart */}
                    <div className="flex flex-col w-3/4 h-36">
                        <Product />
                        <Product />
                    </div>
                    
                    {/* Purchase Informations */}
                    <div className="p-4 w-1/4 ml-8 mt-6">
                        <h2 className="font-medium text-lg">Order Summary</h2>
                        <div className="justify-between flex gap-y-4 mt-4">
                            <h3>Subtotal</h3>
                            <span>$799.99</span>
                        </div>
                        
                        <div className="flex justify-between gap-y-4 mt-2">
                            <h3>Shipping</h3>
                            <span>Free</span>
                        </div>

                        <div className="flex justify-between gap-y-4 mt-8">
                            <h2 className="font-medium">Total</h2>
                            <span className="font-medium">$799.99</span>
                        </div>

                        <div className="flex flex-col gap-y-4 mt-6">
                            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white">Proceed to Checkout</button>
                            <button className="text-blue-600" >Continue Shopping</button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}