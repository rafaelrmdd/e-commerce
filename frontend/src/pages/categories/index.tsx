import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header"
import { ProductsContext } from "@/Context/ProductsContextProvider"
import { useContext, useState } from "react"
import { useSearchParams } from "next/navigation";

export default function Categories() {

    const searchParams = useSearchParams();

    const categoryFromHome = searchParams.get("category");

    //Subcategorie
    // [
    //     {
    //       "id": 1,
    //       "name": "Smartphones & Mobile Devices"
    //     },
    //     {
    //       "id": 2,
    //       "name": "Laptops & Computers"
    //     },
    //     {
    //       "id": 3,
    //       "name": "Peripherals & Accessories"
    //     },
    //     {
    //       "id": 4,
    //       "name": "Women's Clothing"
    //     },
    //     {
    //       "id": 5,
    //       "name": "Men's Clothing"
    //     },
    //     {
    //       "id": 6,
    //       "name": "Watches & Jewelry"
    //     },
    //     {
    //       "id": 7,
    //       "name": "Lighting"
    //     },
    //     {
    //       "id": 8,
    //       "name": "Kitchen & Utilities"
    //     },
    //     {
    //       "id": 9,
    //       "name": "Furniture"
    //     },
    //     {
    //       "id": 10,
    //       "name": "Team Sports"
    //     },
    //     {
    //       "id": 11,
    //       "name": "Cycling"
    //     },
    //     {
    //       "id": 12,
    //       "name": "Fitness & Weight Training"
    //     }
    //   ]


    const { products } = useContext(ProductsContext);
    const [category, setCategory] = useState(categoryFromHome || "");

    const handleClick = (e : React.MouseEvent<HTMLButtonElement>) => {
        setCategory(String(e.currentTarget.textContent));
        console.log(category);
    }

    const convertCategoryToNumber = (category : string) => {
        switch(category) {
            case "Electronics":
                return 1;
                break;
            case "Fashion":
                return 2;
                break;
            case "House & Decoration":
                return 3;
                break;
            case "Sports":
                return 4
                break;
            default:
                return null;
        }
    }

    const categoryNumber = convertCategoryToNumber(category)

    const productsShowing = products.filter((p) => p.categoryId === categoryNumber)

    return (
        <div className="h-full bg-gray-900">
            <Header />

            <main className="mt-10 min-h-screen">
                <h1 className="text-4xl font-bold text-gray-50 text-center">Categories</h1>

                {/* Category selection icons */}
                <div className="flex justify-center gap-4 mt-6">
                    <button
                        onClick={(e) => handleClick(e)}
                        className="flex items-center px-5 py-3 rounded-full bg-gray-700
                        hover:bg-gray-500 hover:cursor-pointer text-gray-200"
                    >
                        Electronics
                    </button>
                    <button 
                        onClick={(e) => handleClick(e)}
                        className="flex items-center px-5 py-3 rounded-full bg-gray-700
                        hover:bg-gray-500 hover:cursor-pointer"
                    >
                        <span className="text-gray-200">Fashion</span>
                    </button>
                    <button
                        onClick={(e) => handleClick(e)}
                        className="flex items-center px-5 py-3 rounded-full bg-gray-700
                        hover:bg-gray-500 hover:cursor-pointer"
                    >
                        <span className="text-gray-200">House & Decoration</span>
                    </button>
                    <button 
                        onClick={(e) => handleClick(e)}
                        className="flex items-center px-5 py-3 rounded-full bg-gray-700
                        hover:bg-gray-500 hover:cursor-pointer"
                    >
                        <span className="text-gray-200">Sports</span>
                    </button>
                </div>

                {/* Products */}
                <section className="flex flex-wrap gap-y-4 justify-between mt-6 px-10">
                    {productsShowing.length > 0 ? productsShowing.map((product) => (
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
                )) : products.map((product) => (
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

            <Footer />
        </div>
    )
}