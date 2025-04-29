import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header"
import { ProductsContext, ReviewsContext } from "@/context/ContextProvider"
import { useContext, useEffect, useState } from "react"
import { useSearchParams } from "next/navigation";
import { SlMagnifier } from "react-icons/sl";

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
    const { reviews } = useContext(ReviewsContext);

    const [category, setCategory] = useState(categoryFromHome || "");
    const [searchKeyword, setSearchKeyword] = useState("");
    const [temporarySearchKeyword, setTemporarySearchKeyword] = useState("");

    const [isAllCategoryActive, setIsAllCategoryActive] = useState(false);
    const [isElectronicsCategoryActive, setIsElectronicsCategoryActive] = useState(false);
    const [isFashionCategoryActive, setIsFashionCategoryActive] = useState(false);
    const [isSportsCategoryActive, setIsSportsCategoryActive] = useState(false);
    const [isHouseDecorationCategoryActive, setIsHomeDecorationCategoryActive] = useState(false);

    //Avoid multiple categories active at the same time
    useEffect(() => {
        setIsAllCategoryActive(category === "All");
        setIsElectronicsCategoryActive(category === "Electronics");
        setIsFashionCategoryActive(category === "Fashion");
        setIsHomeDecorationCategoryActive(category === "House & Decoration");
        setIsSportsCategoryActive(category === "Sports");
    }, [category]);

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
            case "All":
                resetFilters(); 
                setIsAllCategoryActive(!isAllCategoryActive);
                break;
        }
    }

    const resetFilters = () => {
        setCategory("");
        setSearchKeyword("");
        setTemporarySearchKeyword("");
    }

    const convertCategoryToNumber = (category : string) => {
        switch(category) {
            case "Electronics": return 1;
            case "Fashion": return 2;
            case "House & Decoration": return 3;
            case "Sports": return 4
            default: return null;
        }
    }

    const handleSearch = () => {
        setSearchKeyword(temporarySearchKeyword);
    }

    interface KeyEvent {
        code : string
    }

    const handleKeyPress = (e : KeyEvent) => {
        if (e.code === 'Enter'){
            handleSearch();
        }
    } 


    const getSpecifiedProductAverageStars = (id : number) => {
        const specifiedProductReview = reviews.filter((review) => review.productId === String(id));
        const starsTotal = specifiedProductReview.reduce((a, review) => a + review.stars, 0);
        const totalReviews = specifiedProductReview.length;

        if(totalReviews === 0){
            return 0;   
        }

        const starsAverage = starsTotal / totalReviews;

        console.log("avg: ", starsAverage);
        return Math.round(starsAverage);
    }

    const generateStars = (quantity : number | undefined) => {
        const stars = [];


        if(quantity === undefined || isNaN(quantity)){
            return "No reviews found";
        }

        for(let x = 0; x < quantity; x++) {
            stars.push("★")
        }

        for(let x = quantity; x < 5; x++){
            stars.push("☆")
        }

        return stars;
    } 

    const filteredProducts = products.filter((product) => {
        const categoryNumber = convertCategoryToNumber(category);
        const hasCategory = categoryNumber !== null;
        const hasKeyword = searchKeyword.trim() !== "";

        if(hasCategory && hasKeyword) {
            return product.categoryId === categoryNumber && product.name.toLowerCase().includes(searchKeyword.toLowerCase());
        }
        else if(hasCategory) {
            return product.categoryId === categoryNumber;
        }
        else if(hasKeyword) {
            return product.name.toLowerCase().includes(searchKeyword.toLowerCase());
        }
        
        return true;
    })


    return (
        <div className="h-full bg-gray-900">
            <Header />

            <main className="px-8 mt-8 mb-20">
                <div className="flex justify-center">
                    <div 
                        className="flex items-center justify-between mb-8 rounded bg-gray-700 w-3/5">
                        <input
                            onChange={(e) => setTemporarySearchKeyword(e.target.value)} 
                            type="text" 
                            placeholder="Enter the product's name"
                            onKeyDown={handleKeyPress}
                            className="rounded p-2 flex-1 outline-0 text-gray-50
                            placeholder:text-gray-400"
                        />
                        <SlMagnifier 
                            size={24} 
                            className="mx-4 hover:cursor-pointer text-gray-50"
                            onClick={handleSearch}
                        />
                    </div>
                </div>
                

                <div className="flex gap-x-8 h-full">
                    <aside className="w-1/5">
                        <div className="bg-gray-800 p-4 rounded w-full min-h-96">
                            <h2 className="text-gray-50 font-semibold text-xl mb-5">Filters</h2>

                            <div>
                                <h2 className="text-gray-50 font-semibold text-xl mb-2">Categories</h2>

                                <ul className="text-gray-50 flex flex-col gap-y-1">
                                    <button 
                                        onClick={(e) => handleClick(e)}
                                        className={`py-2 px-1 rounded hover:bg-gray-700 text-left hover:cursor-pointer
                                        ${isAllCategoryActive ? "bg-gray-700" : ""}`}
                                    >
                                        All
                                    </button>
                                    <button 
                                        onClick={(e) => handleClick(e)}
                                        className={`py-2 px-1 rounded hover:bg-gray-700 text-left hover:cursor-pointer
                                        ${isElectronicsCategoryActive ? "bg-gray-700" : ""}`}
                                    >
                                        Electronics
                                    </button>
                                    <button 
                                        onClick={(e) => handleClick(e)}
                                        className={`py-2 px-1 rounded hover:bg-gray-700 text-left hover:cursor-pointer
                                        ${isFashionCategoryActive ? "bg-gray-700" : ""}`}
                                    >
                                        Fashion
                                    </button>
                                    <button 
                                        onClick={(e) => handleClick(e)}
                                        className={`py-2 px-1 rounded hover:bg-gray-700 text-left hover:cursor-pointer
                                        ${isHouseDecorationCategoryActive ? "bg-gray-700" : ""}`}
                                    >
                                        House & Decoration
                                    </button>
                                    <button 
                                        onClick={(e) => handleClick(e)}
                                        className={`py-2 px-1 rounded hover:bg-gray-700 text-left hover:cursor-pointer
                                        ${isSportsCategoryActive ? "bg-gray-700" : ""}`}
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
                            {filteredProducts.map((product) => (
                                <div 
                                    key={product.id}
                                    className="rounded bg-gray-800 w-[23.79%] h-[374px]">
                                    {/* Image */}
                                    <div className="bg-gray-950 w-full h-1/2 rounded-t">

                                    </div>

                                    {/* Informations */}
                                    <div className="px-3 pb-3">
                                        <div className="mb-1 mt-1">
                                            <span className="text-yellow-300 mr-1">
                                                {generateStars(getSpecifiedProductAverageStars(product.id))}
                                            </span>
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