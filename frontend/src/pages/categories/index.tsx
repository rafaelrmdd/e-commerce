import { Header } from "@/components/Header"
import { ProductsContext } from "@/Context/ProductsContextProvider"
import { useContext } from "react"

export default function Categories() {

    const { products } = useContext(ProductsContext);

    return (
        <div className="h-full bg-gray-900">
            <Header />

            <main className="mt-10">
                <h1 className="text-4xl font-bold text-gray-50 text-center">Categories</h1>

                {/* Categorie selection icons */}
                <div className="flex justify-center gap-4 mt-6">
                    <div className="flex items-center px-5 py-3 rounded-full bg-gray-700 hover:bg-gray-500">
                        <span className="text-gray-200">Electronics</span>
                    </div>
                    <div className="flex items-center px-5 py-3 rounded-full bg-gray-700 hover:bg-gray-500">
                        <span className="text-gray-200">Fashion</span>
                    </div>
                    <div className="flex items-center px-5 py-3 rounded-full bg-gray-700 hover:bg-gray-500">
                        <span className="text-gray-200">House & Decoration</span>
                    </div>
                    <div className="flex items-center px-5 py-3 rounded-full bg-gray-700 hover:bg-gray-500">
                        <span className="text-gray-200">Sports</span>
                    </div>
                </div>

                {/* Products */}
                <section className="flex flex-wrap gap-y-4 justify-between mt-6 px-10">
                    {products.map((product) => (
                        <div className="p-3" key={product.id}>
                            <div className="bg-gray-800 p-2.5 rounded-lg w-96">
                                    {/* Image */}
                                <div className="bg-black w-full h-56">
                                    
                                </div>

                                {/* Product Informations */}
                                <div className="">
                                    <h2 className="text-white font-semibold mb-2">{product.name}</h2>
                                    <span className="text-purple-400 text-xl block mb-4 font-bold">{product.price}</span>
                                    <button 
                                        className="px-4 py-2 bg-purple-500 text-gray-900 font-semibold rounded w-full"
                                    >
                                        Add to Cart
                                    </button>
                                </div>       
                            </div>        
                        </div>
                ))}
                    
                </section>
            </main>
        </div>
    )
}