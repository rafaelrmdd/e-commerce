import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header"
import { ProductsContext, ReviewsContext, UsersContext } from "@/context/ContextProvider"
import { useContext, useEffect, useState } from "react"
import { useSearchParams } from "next/navigation";
import { SlMagnifier } from "react-icons/sl";

import Image from "next/image";

export default function Products() {

    const { verifyIfUserIsLogged } = useContext(UsersContext);

    useEffect(() => {
        verifyIfUserIsLogged();
    }, [verifyIfUserIsLogged])

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
    const [priceRange, setPriceRange] = useState("")
    const [starsFilter, setStarsFilter] = useState(0);

    // const [productAverage, setProductAverage] = useState<[string, number][]>([]);
    // const [productAverage, setProductAverage] = useState<Map<string, number>>();
    const productStars = new Map<string, number[]>();
    const productAverages = new Map<string, number>()

    // const [productIdsToFilter, setProductIdsToFilter] = useState([]);

    reviews.forEach((review) => {
        const productId = review.productId;
        const products = productStars.get(productId) || [];

        productStars.set(productId, [...products, review.stars])

    })

    for (const [key, value] of productStars){
        const sum = value.reduce((acc, value) => acc + value, 0);
        const average = sum / value.length;

        productAverages.set(key, average);    
    }

    const productIds = new Set();

    reviews.map((review) => {
        const hasId = productAverages.has(review.productId);

        if (hasId){
            productIds.add(review.productId);
        }
    })

    // const productsToShow = products.filter((product) => {
    //     const hasId = productIds.has(product.id)
    //     const thisProductStarsAverage = productAverages.get(String(product.id));
        
    //     if(thisProductStarsAverage){  
    //         const isStarsGreaterThanFilter = thisProductStarsAverage >= starsFilter;

    //         if(hasId && isStarsGreaterThanFilter){    
    //             return true;
    //         }
    //     }
    // })

    const [isElectronicsCategoryActive, setIsElectronicsCategoryActive] = useState(false);
    const [isFashionCategoryActive, setIsFashionCategoryActive] = useState(false);
    const [isSportsCategoryActive, setIsSportsCategoryActive] = useState(false);
    const [isHouseDecorationCategoryActive, setIsHomeDecorationCategoryActive] = useState(false);

    const [isFiveStarsActive, setIsFiveStarsActive] = useState(false);
    const [isFourOrMoreStarsActive, setIsFourOrMoreStarsActive] = useState(false);
    const [isThreeOrMoreStarsActive, setIsThreeOrMoreStarsActive] = useState(false);
    const [isTwoOrMoreStarsActive, setIsTwoOrMoreStarsActive] = useState(false);
    const [isOneOrMoreStarsActive, setIsOneOrMoreStarsActive] = useState(false);

    //Avoid multiple categories active at the same time
    useEffect(() => {
        setIsElectronicsCategoryActive(category === "Electronics");
        setIsFashionCategoryActive(category === "Fashion");
        setIsHomeDecorationCategoryActive(category === "House & Decoration");
        setIsSportsCategoryActive(category === "Sports");
    }, [category]);

    useEffect(() => {
        setIsFiveStarsActive(starsFilter === 5)
        setIsFourOrMoreStarsActive(starsFilter === 4)
        setIsThreeOrMoreStarsActive(starsFilter === 3)
        setIsTwoOrMoreStarsActive(starsFilter === 2)
        setIsOneOrMoreStarsActive(starsFilter === 1)
    }, [starsFilter]);

    const handleCategory = (e : React.MouseEvent<HTMLButtonElement>) => {
        if (e.currentTarget.textContent === "Reset Filters"){
            resetFilters();
        }

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

    const handleStarsFilter = (quantity : number) => {
        switch(quantity){
            case 5:
                setIsFiveStarsActive(!isFiveStarsActive);
                break;
            case 4:
                setIsFourOrMoreStarsActive(!isFourOrMoreStarsActive);
                break;
            case 3:
                setIsThreeOrMoreStarsActive(!isThreeOrMoreStarsActive);
                break;
            case 2:
                setIsTwoOrMoreStarsActive(!isTwoOrMoreStarsActive);
                break;
            case 1:
                setIsOneOrMoreStarsActive(!isOneOrMoreStarsActive);
                break;
        }
    }

    const resetFilters = () => {
        setCategory("");
        setSearchKeyword("");
        setTemporarySearchKeyword("");
        setPriceRange("2500")
    }

    const convertCategoryToNumber = (category : string) => {
        switch(category) {
            case "Electronics":   
                if(!isElectronicsCategoryActive) return null
                return 1;
            case "Fashion": 
                if(!isFashionCategoryActive) return null
                return 2;
            case "House & Decoration":
                if(!isHouseDecorationCategoryActive) return null
                return 3;
            case "Sports": 
                if(!isSportsCategoryActive) return null
                return 4;
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

    const filteredProducts = products.filter((product) => {
        const categoryNumber = convertCategoryToNumber(category);
        const hasCategory = categoryNumber !== null;
        const hasKeyword = searchKeyword.trim() !== "";
        const hasPriceRange = priceRange !== "";
        const hasStarsFilter = starsFilter !== 0;
        const hasId = productIds.has(product.id)
        const thisProductStarsAverage = productAverages.get(String(product.id));
        
        if(hasCategory && hasKeyword && hasPriceRange) {
            return product.categoryId === categoryNumber && 
                   product.name.toLowerCase().includes(searchKeyword.toLowerCase()) && 
                   product.price <= priceRange;
        }
        else if(hasCategory && hasKeyword) {
            return product.categoryId === categoryNumber &&
                   product.name.toLowerCase().includes(searchKeyword.toLowerCase());
        }
        else if(hasCategory) {
            return product.categoryId === categoryNumber;
        }
        else if(hasKeyword) {
            return product.name.toLowerCase().includes(searchKeyword.toLowerCase());
        }
        else if(hasPriceRange) {
            return product.price <= priceRange;
        }
        else if(hasStarsFilter){
            if(thisProductStarsAverage){
                const isStarsGreaterThanFilter = thisProductStarsAverage >= starsFilter;
    
                if(hasId){    
                    return isStarsGreaterThanFilter;
                }
            }
        }
        
        return true;
    })

    const getProductAverageStars = (id : number) => {
        const productReviews = getProductReview(id);
        const starsTotal = productReviews.reduce((a, review) => a + review.stars, 0);
        const totalReviews = productReviews.length;

        if(totalReviews === 0){
            return 0;   
        }

        const starsAverage = starsTotal / totalReviews;

        return Math.round(starsAverage);
    }

    const getProductReview = (id : number) => {
        const productReviews = reviews.filter((review) => review.productId === String(id));

        return productReviews;
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
                                        onClick={(e) => handleCategory(e)}
                                        className={`py-2 px-1 rounded hover:bg-gray-700 text-left hover:cursor-pointer
                                        ${isElectronicsCategoryActive ? "bg-gray-700" : ""}`}
                                    >
                                        Electronics
                                    </button>
                                    <button 
                                        onClick={(e) => handleCategory(e)}
                                        className={`py-2 px-1 rounded hover:bg-gray-700 text-left hover:cursor-pointer
                                        ${isFashionCategoryActive ? "bg-gray-700" : ""}`}
                                    >
                                        Fashion
                                    </button>
                                    <button 
                                        onClick={(e) => handleCategory(e)}
                                        className={`py-2 px-1 rounded hover:bg-gray-700 text-left hover:cursor-pointer
                                        ${isHouseDecorationCategoryActive ? "bg-gray-700" : ""}`}
                                    >
                                        House & Decoration
                                    </button>
                                    <button 
                                        onClick={(e) => handleCategory(e)}
                                        className={`py-2 px-1 rounded hover:bg-gray-700 text-left hover:cursor-pointer
                                        ${isSportsCategoryActive ? "bg-gray-700" : ""}`}
                                    >
                                        Sports
                                    </button>
                                </ul>
                            </div>

                            <div className="mt-7">
                                <h2 className="text-gray-50 text-xl font-semibold">Price Range</h2>
                                <input 
                                    type="range" min={50} max={5000} step={100} value={priceRange}
                                    onChange={(e) => setPriceRange(e.target.value)}
                                    className="w-full bg-gray-700 appearance-none rounded-full
                                    accent-purple-500 h-2 mt-5"
                                />
                                
                                <div className="flex justify-between mt-2">
                                    <span className="text-gray-500 text-[0.8rem]">$50</span>
                                    <span className="text-gray-500 text-[0.8rem]">{priceRange}</span>
                                    <span className="text-gray-500 text-[0.8rem]">$5000</span>
                                </div>
                            </div>

                            <div className="mt-7">
                                <h2 className="text-gray-50 text-xl font-semibold">Reviews</h2>
                                
                                <div className="flex flex-col gap-y-2 mt-2">
                                    <span 
                                        onClick={() => {
                                            setStarsFilter(5);
                                            handleStarsFilter(5)
                                        }}
                                        className={`py-2 px-1 rounded hover:bg-gray-700 text-yellow-400 text-left hover:cursor-pointer
                                        ${isFiveStarsActive ? "bg-gray-700" : ""}`}
                                    >
                                        ★★★★★
                                    </span>
                                    <span 
                                        onClick={() => {
                                            setStarsFilter(4);
                                            handleStarsFilter(4)
                                        }}
                                        className={`py-2 px-1 rounded hover:bg-gray-700 text-yellow-400 text-left hover:cursor-pointer
                                        ${isFourOrMoreStarsActive ? "bg-gray-700" : ""}`}
                                    >
                                        ★★★★☆ <span className="text-gray-300">ou mais</span>
                                    </span>
                                    <span 
                                        onClick={() => {
                                            setStarsFilter(3);
                                            handleStarsFilter(3)
                                        }}
                                        className={`py-2 px-1 rounded hover:bg-gray-700 text-yellow-400 text-left hover:cursor-pointer
                                        ${isThreeOrMoreStarsActive ? "bg-gray-700" : ""}`}
                                    >
                                        ★★★☆☆ <span className="text-gray-300">ou mais</span>
                                    </span>
                                    <span 
                                        onClick={() => {
                                            setStarsFilter(2);
                                            handleStarsFilter(2)
                                        }}
                                        className={`py-2 px-1 rounded hover:bg-gray-700 text-yellow-400 text-left hover:cursor-pointer
                                        ${isTwoOrMoreStarsActive ? "bg-gray-700" : ""}`}
                                    >
                                        ★★☆☆☆ <span className="text-gray-300">ou mais</span>
                                    </span>
                                    <span 
                                        onClick={() => {
                                            setStarsFilter(1);
                                            handleStarsFilter(1)
                                        }}
                                        className={`py-2 px-1 rounded hover:bg-gray-700 text-yellow-400 text-left hover:cursor-pointer
                                        ${isOneOrMoreStarsActive ? "bg-gray-700" : ""}`}
                                    >
                                        ★☆☆☆☆ <span className="text-gray-300">ou mais</span>
                                    </span>
                                </div>
                            </div>

                            <button 
                                onClick={(e) => handleCategory(e)}
                                className="border border-purple-500 text-purple-400
                                px-3 py-2 mt-7 w-full rounded hover:cursor-pointer"
                            >
                                Reset Filters
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
                                    <div className="relative w-full h-1/2 rounded-t">
                                        {product.imageURL ? <Image
                                            className="rounded"
                                            src={product.imageURL}
                                            alt="Product's Image"
                                            fill      
                                        /> : 
                                        <h2 
                                            className="text-center text-gray-50 absolute top-24 left-20"
                                        >
                                            No Image
                                        </h2>
                                        }
                                    </div>

                                    {/* Informations */}
                                    <div className="px-3 pb-3">
                                        <div className="mb-1 mt-1">
                                            <span className="text-yellow-300 mr-1">
                                                {generateStars(getProductAverageStars(product.id))}
                                            </span>
                                            <span className="text-gray-400 text-[0.9rem]">({getProductReview(product.id).length})</span>
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