import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { UsersContext } from "@/context/ContextProvider";
import { useFilterLogic } from "@/hooks/useProductsFilter";
import { useContext, useEffect } from "react";
import { SlMagnifier } from "react-icons/sl";
import Image from "next/image";
import { useCart } from "@/hooks/useCart";

export default function Offers() {

    const { verifyIfUserIsLogged } = useContext(UsersContext);
    const { handleAddProductToCart } = useCart();
    const {
        handleCategory,
        handleStarsFilter,
        handleKeyPress,
        setStarsFilter,
        setTemporarySearchKeyword,
        setPriceRange,
        getProductAverageStars,
        generateStars,
        handleSearch,
        getProductReview,
        setProductsPerPage,
        setInitialValue,
        filteredProducts,
        isElectronicsCategoryActive,
        isFashionCategoryActive,
        isSportsCategoryActive,
        isHouseDecorationCategoryActive,
        isFiveStarsActive,
        isFourOrMoreStarsActive,
        isThreeOrMoreStarsActive,
        isTwoOrMoreStarsActive,
        isOneOrMoreStarsActive,
        priceRange,
        productsPerPage,      
        initialValue,
    } = useFilterLogic(null);

    useEffect(() => {
        verifyIfUserIsLogged();
    }, [verifyIfUserIsLogged])

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
                                        className={`py-2 px-1 rounded hover:bg-gray-700 text-left
                                        hover:cursor-pointer transition duration-300
                                        ${isElectronicsCategoryActive ? "bg-gray-700" : ""}`}
                                    >
                                        Electronics
                                    </button>
                                    <button 
                                        onClick={(e) => handleCategory(e)}
                                        className={`py-2 px-1 rounded hover:bg-gray-700 text-left
                                        hover:cursor-pointer transition duration-300
                                        ${isFashionCategoryActive ? "bg-gray-700" : ""}`}
                                    >
                                        Fashion
                                    </button>
                                    <button 
                                        onClick={(e) => handleCategory(e)}
                                        className={`py-2 px-1 rounded hover:bg-gray-700 text-left 
                                        hover:cursor-pointer transition duration-300
                                        ${isHouseDecorationCategoryActive ? "bg-gray-700" : ""}`}
                                    >
                                        House & Decoration
                                    </button>
                                    <button 
                                        onClick={(e) => handleCategory(e)}
                                        className={`py-2 px-1 rounded hover:bg-gray-700 text-left
                                        hover:cursor-pointer transition duration-300
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
                                        className={`py-2 px-1 rounded hover:bg-gray-700 text-yellow-400
                                        text-left hover:cursor-pointer transition duration-300
                                        ${isFiveStarsActive ? "bg-gray-700" : ""}`}
                                    >
                                        ★★★★★
                                    </span>
                                    <span 
                                        onClick={() => {
                                            setStarsFilter(4);
                                            handleStarsFilter(4)
                                        }}
                                        className={`py-2 px-1 rounded hover:bg-gray-700 text-yellow-400
                                        text-left hover:cursor-pointer transition duration-300
                                        ${isFourOrMoreStarsActive ? "bg-gray-700" : ""}`}
                                    >
                                        ★★★★☆ <span className="text-gray-300">ou mais</span>
                                    </span>
                                    <span 
                                        onClick={() => {
                                            setStarsFilter(3);
                                            handleStarsFilter(3)
                                        }}
                                        className={`py-2 px-1 rounded hover:bg-gray-700 text-yellow-400
                                        text-left hover:cursor-pointer transition duration-300
                                        ${isThreeOrMoreStarsActive ? "bg-gray-700" : ""}`}
                                    >
                                        ★★★☆☆ <span className="text-gray-300">ou mais</span>
                                    </span>
                                    <span 
                                        onClick={() => {
                                            setStarsFilter(2);
                                            handleStarsFilter(2)
                                        }}
                                        className={`py-2 px-1 rounded hover:bg-gray-700 text-yellow-400
                                        text-left hover:cursor-pointer transition duration-300
                                        ${isTwoOrMoreStarsActive ? "bg-gray-700" : ""}`}
                                    >
                                        ★★☆☆☆ <span className="text-gray-300">ou mais</span>
                                    </span>
                                    <span 
                                        onClick={() => {
                                            setStarsFilter(1);
                                            handleStarsFilter(1)
                                        }}
                                        className={`py-2 px-1 rounded hover:bg-gray-700 text-yellow-400
                                        text-left hover:cursor-pointer transition duration-300
                                        ${isOneOrMoreStarsActive ? "bg-gray-700" : ""}`}
                                    >
                                        ★☆☆☆☆ <span className="text-gray-300">ou mais</span>
                                    </span>
                                </div>
                            </div>

                            <button 
                                onClick={(e) => handleCategory(e)}
                                className="bg-purple-500 text-gray-50 hover:bg-purple-400
                                px-3 py-2 mt-7 w-full rounded hover:cursor-pointer
                                transition duration-300 "
                            >
                                Reset Filters
                            </button>
                        </div>
                    </aside>
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold text-gray-50">Products On Offer</h2>
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
                                            onClick={() => handleAddProductToCart(product.id)}
                                            className="bg-purple-500 px-3 py-2 text-gray-50 font-semibold
                                            rounded block mt-5 w-full hover:bg-purple-400 hover:cursor-pointer
                                            transition duration-300"
                                        >
                                            Add To Cart
                                        </button>
                                    </div>
                                </div>  
                            ))}
                        </div>
                        

                        <div className="mt-6 w-full flex gap-x-1 justify-center">
                            <div 
                                className="rounded bg-gray-800 px-4 py-2 hover:cursor-pointer"
                                onClick={() => {
                                    if (initialValue !== 0){
                                        setInitialValue(initialValue - 8)
                                        setProductsPerPage(productsPerPage - 8)
                                    }
                                }}
                            >
                                <span className="text-gray-400">&lt;</span>
                            </div>
                            <div 
                                className="rounded bg-gray-800 px-4 py-2 hover:cursor-pointer"
                                onClick={() => {
                                    if(initialValue < filteredProducts.length){
                                        setInitialValue(initialValue + 8)
                                        setProductsPerPage(productsPerPage + 8)
                                    }
                                }}
                            >
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