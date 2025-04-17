import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header"
import { ProductsContext } from "@/Context/ProductsContextProvider"
import { useContext, useState } from "react"
import { useSearchParams } from "next/navigation";

export default function Products() {

    const searchParams = useSearchParams();
    const categoryFromHome = searchParams.get("category");

    //Subcategories
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
    const [isElectronicsCategoryActive, setIsElectronicsCategoryActive] = useState(false);
    const [isFashionCategoryActive, setIsFashionCategoryActive] = useState(false);
    const [isSportsCategoryActive, setIsSportsCategoryActive] = useState(false);
    const [isHouseDecorationCategoryActive, setIsHomeDecorationCategoryActive] = useState(false);

    const handleClick = (e : React.MouseEvent<HTMLButtonElement>) => {
        setCategory(String(e.currentTarget.textContent));

        switch(category){
            case "Electronics":
                setIsElectronicsCategoryActive(!isElectronicsCategoryActive);
                break;
            case "Fashion":
                setIsFashionCategoryActive(!isFashionCategoryActive);
                break;
            case "House & Decoration":
                setIsHomeDecorationCategoryActive(!isHouseDecorationCategoryActive);
                break;
            case "Sports":
                setIsSportsCategoryActive(!isSportsCategoryActive);
                break;

        }
    }

    const convertCategoryToNumber = (category : string) => {
        switch(category) {
            case "Electronics":
                return 1;
            case "Fashion":
                return 2;
            case "House & Decoration":
                return 3;
            case "Sports":
                return 4
            default:
                return null;
        }
    }

    const categoryNumber = convertCategoryToNumber(category)

    const productsShowing = products.filter((p) => p.categoryId === categoryNumber)

    return (
        <div className="h-full bg-gray-900">
            <Header />

            <main className="px-8 mt-8">
                <div className="flex gap-x-8 h-full">
                    <aside className="w-1/5">
                        <div className="bg-gray-800 p-4 rounded w-full min-h-96">
                            <h2 className="text-gray-50 font-semibold text-xl mb-5">Filters</h2>

                            <div>
                                <h2 className="text-gray-50 font-semibold text-xl mb-2">Categories</h2>

                                <ul className="text-gray-50 flex flex-col gap-y-1">
                                    <button 
                                        onClick={(e) => handleClick(e)}
                                        className="py-2 px-1 rounded hover:bg-gray-700 text-left hover:cursor-pointer"
                                    >
                                        All
                                    </button>
                                    <button 
                                        onClick={(e) => handleClick(e)}
                                        className="py-2 px-1 rounded hover:bg-gray-700 text-left hover:cursor-pointer"
                                    >
                                        Electronics
                                    </button>
                                    <button 
                                        onClick={(e) => handleClick(e)}
                                        className="py-2 px-1 rounded hover:bg-gray-700 text-left hover:cursor-pointer"
                                    >
                                        Fashion
                                    </button>
                                    <button 
                                        onClick={(e) => handleClick(e)}
                                        className="py-2 px-1 rounded hover:bg-gray-700 text-left hover:cursor-pointer"
                                    >
                                        House & Decoration
                                    </button>
                                    <button 
                                        onClick={(e) => handleClick(e)}
                                        className="py-2 px-1 rounded hover:bg-gray-700 text-left hover:cursor-pointer"
                                    >
                                        Sports
                                    </button>
                                </ul>
                            </div>

                            <div className="mt-7">
                                <h2 className="text-gray-50 text-xl font-semibold">Price</h2>
                                <input 
                                    type="range" min={50} max={5000} step={100} 
                                    className="w-full bg-gray-700 appearance-none rounded-full
                                    accent-purple-500 h-2 mt-5"
                                />
                                
                                <div className="flex justify-between mt-2">
                                    <span className="text-gray-500 text-[0.8rem]">$50</span>
                                    <span className="text-gray-500 text-[0.8rem]">$5000</span>
                                </div>
                            </div>

                            <div className="mt-7">
                                <h2 className="text-gray-50 text-xl font-semibold">Reviews</h2>
                                
                                <div className="flex flex-col gap-y-2 mt-2">
                                    <span className="text-yellow-300 mr-1">
                                        ★★★★★ <span className="text-gray-300">ou mais</span>
                                    </span>
                                    <span className="text-yellow-300 mr-1">
                                        ★★★★☆ <span className="text-gray-300">ou mais</span>
                                    </span>
                                    <span className="text-yellow-300 mr-1">
                                        ★★★☆☆ <span className="text-gray-300">ou mais</span>
                                    </span>
                                    <span className="text-yellow-300 mr-1">
                                        ★★☆☆☆ <span className="text-gray-300">ou mais</span>
                                    </span>
                                    <span className="text-yellow-300 mr-1">
                                        ★☆☆☆☆ <span className="text-gray-300">ou mais</span>
                                    </span>
                                </div>
                            </div>

                            <button 
                                className="border border-purple-500 text-purple-400
                                px-3 py-2 mt-7 w-full rounded"
                            >
                                Clean Filters
                            </button>
                        </div>
                    </aside>
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold text-gray-50">Products</h2>
                        <h3 className="text-[0.8rem] text-gray-400 ">8 products found</h3>

                        <div className="flex flex-wrap mt-6 gap-x-4 gap-y-6">
                            {/* Products */}
                            {productsShowing.map((product) => (
                                <div 
                                    key={product.id}
                                    className="rounded bg-gray-800 w-[23.79%] h-[374px]">
                                    {/* Image */}
                                    <div className="bg-gray-950 w-full h-1/2 rounded-t">

                                    </div>

                                    {/* Informations */}
                                    <div className="px-3 pb-3">
                                        <div className="mb-1 mt-1">
                                            <span className="text-yellow-300 mr-1">★★★★☆</span>
                                            <span className="text-gray-400 text-[0.9rem]">(4.8)</span>
                                        </div>
                                        
                                        <h2 className="text-gray-50 font-semibold mb-3 text-[0.9rem]">{product.name}</h2>
                                        <span className="text-purple-400 font-semibold text-xl">${product.price}</span>

                                        <button 
                                            className="bg-purple-500 px-3 py-2 text-gray-950 font-semibold
                                            rounded block mt-5 w-full hover:bg-purple-400 hover:cursor-pointer "
                                        >
                                            Add To Cart
                                        </button>
                                    </div>
                                </div>  
                            ))}
                            <div className="rounded bg-gray-800 w-[23.79%] h-[374px]">
                                {/* Image */}
                                <div className="bg-gray-950 w-full h-1/2 rounded-t">

                                </div>

                                {/* Informations */}
                                <div className="px-3">
                                    <div className="mb-1 mt-1">
                                        <span className="text-yellow-300 mr-1">★★★★☆</span>
                                        <span className="text-gray-400 text-[0.9rem]">(4.8)</span>
                                    </div>
                                    
                                    <h2 className="text-gray-50 font-semibold mb-3 text-[0.9rem]">Fone de Ouvido Bluetooth Premium</h2>
                                    <span className="text-purple-400 font-semibold text-xl">$99.90</span>

                                    <button 
                                        className="bg-purple-500 px-3 py-2 text-gray-950 font-semibold
                                        rounded block mt-3 w-full"
                                    >
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                        

                        <div className="mt-6 w-full flex gap-x-1 justify-center">
                            <div className="rounded bg-gray-800 px-4 py-2 hover:cursor-pointer">
                                <span className="text-gray-400">&lt;</span>
                            </div>
                            <div className="rounded bg-gray-800 px-4 py-2 hover:cursor-pointer">
                                <span className="text-gray-400">&gt;</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}