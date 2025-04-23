import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

import { Header } from "@/components/Header"
import { useContext } from "react";
import { ProductsContext } from "@/context/ContextProvider";

import Slider from "react-slick"
import Link from "next/link";
import { Footer } from "@/components/Footer";


export default function Home() {

    const { products } = useContext(ProductsContext);

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        variableWidth: false,
        centerMode: false,
        adaptiveHeight: true
    }

    const productsBestSellers = products.filter(p => p.isBestSeller);
    const productsFeatureds = products.filter(p => p.isFeatured);

    return (
        <div className="h-screen bg-gray-900">
            <Header/>
            
            <section className="flex justify-center py-20 w-full bg-gray-950">
                <div className="text-center">
                    <h1 className="text-4xl text-white font-bold mb-4">The Best Products with the Best Prices</h1>
                    <h3 className="text-lg mb-16 text-gray-300">Discover our exclusive products collection with up to 50% discount this week</h3>

                    <Link
                        href="/offers"
                        className="px-6 py-3 bg-purple-500 hover:bg-purple-400 rounded font-bold
                        hover:cursor-pointer transition duration-300"
                    >
                        BUY NOW
                    </Link>
                </div>   
            </section>

            <main className="bg-gray-900">
                <div className="py-16 px-8">
                    <div className="flex justify-center items-center gap-4">
                        <hr className="text-gray-600 w-52"/>
                        <h2 className="font-bold text-white text-2xl">BEST SELLERS</h2>
                        <hr className="text-gray-600 w-52"/>
                    </div>

                    {/* Carousel */}
                    <div className="bg-gray-800 p-6 rounded mt-16">
                        <Slider {...settings}>
                            {productsBestSellers.map((product) => (
                                <div className="p-3" key={product.id}>
                                    <Link
                                        href={`/product/${product.id}`}
                                        className="bg-gray-700 p-2.5 rounded-lg w-96 
                                        hover:cursor-pointer block"
                                    >
                                        
                                        {/* Image */}
                                        <div className="bg-black w-full h-56 rounded mb-2">
                                            
                                        </div>

                                        {/* Product Informations */}
                                        <div className="">
                                            <h2 className="text-white font-semibold mb-2">{product.name}</h2>
                                            <span className="text-purple-400 text-2xl block mb-4 font-bold">${product.price}</span>
                                            <button 
                                                className="px-4 py-2 bg-purple-500 text-gray-900 font-semibold
                                                rounded w-full hover:cursor-pointer hover:bg-purple-400 transition duration-300"
                                            >
                                                Add to Cart
                                            </button>
                                        </div>       
                                    </Link>      
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
                
                {/* Categories */}
                <section className="px-8">
                    <div className="flex justify-center items-center gap-4">
                        <hr className="text-gray-600 w-52"/>
                        <h2 className="font-bold text-white text-2xl">CATEGORIES</h2>
                        <hr className="text-gray-600 w-52"/>
                    </div>

                    <div className="flex justify-between mt-16">
                        <Link
                            href={`/products?category=Electronics`}
                            className="flex items-center justify-center 
                          bg-gray-800 rounded w-72 h-44 hover:bg-gray-700 hover:cursor-pointer
                            transition duration-300"
                        >
                            <span className="text-gray-50 text-xl font-bold ">Electronics</span>
                        </Link>
                        <Link 
                            href={`/products?category=Fashion`}
                            className="flex items-center justify-center 
                          bg-gray-800 rounded w-72 h-44 hover:bg-gray-700 hover:cursor-pointer
                            transition duration-300"
                        >
                            <span className="text-gray-50 text-xl font-bold ">Fashion</span>
                        </Link>
                        <Link 
                            //encode so that i can use & and space
                            href={`/products?category=${encodeURIComponent("House & Decoration")}`}
                            className="flex items-center justify-center 
                          bg-gray-800 rounded w-72 h-44 hover:bg-gray-700 hover:cursor-pointer
                            transition duration-300"
                        >
                            <span className="text-gray-50 text-xl font-bold ">House & Decoration</span>
                        </Link>
                        <Link 
                            href={`/products?category=Sports`}
                            className="flex items-center justify-center 
                          bg-gray-800 rounded w-72 h-44 hover:bg-gray-700 hover:cursor-pointer
                            transition duration-300"
                        >
                            <span className="text-gray-50 text-xl font-bold ">Sports</span>
                        </Link>
                    </div>
                </section>

                {/* Featured Items Section*/}
                <section className="mt-16 px-8 mb-20">
                    <div className="flex justify-center items-center gap-4">
                        <hr className="text-gray-600 w-40"/>
                        <h2 className="font-bold text-white text-2xl">FEATURED THIS WEEK</h2>
                        <hr className="text-gray-600 w-40"/>
                    </div>

                    {/* Featured Items */}
                    <div className="flex justify-between mt-16">
                        {productsFeatureds.map((product) => (
                            <div className="bg-gray-800 w-96 min-h-[500px] rounded p-4" key={product.id}>
                                {/* Image */}
                                <div className="bg-gray-600 rounded w-full h-[280px]">

                                </div>

                                {/* Information */}
                                <div className="mt-2">
                                    <h2 className="text-gray-50 text-xl font-semibold mb-2">{product.name}</h2>
                                    <h3 className="text-gray-400 mb-2">{product.description}</h3>
                                    <span className="text-purple-400 text-2xl font-bold mb-4 block">{product.price}</span>

                                    <button 
                                        className="w-full bg-purple-500 rounded py-3 text-gray-950 font-semibold"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <Footer />
            </main>
        </div>
    )
}