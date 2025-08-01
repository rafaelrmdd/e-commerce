import { useRouter } from "next/router";
import { Header } from "@/components/Header";
import { useContext, useEffect } from "react";
import { ProductsContext, ReviewsContext, UsersContext } from "@/context/ContextProvider";
import { usDolarFormatter, utcDateFormatter } from "@/utils/formatters";
import { useCart } from "@/hooks/components/useCart";
import { destroyCookie, parseCookies } from "nookies";
import { useToast } from "@/hooks/components/useToast";
import { Toaster } from "react-hot-toast";
import { useProductsFilter } from "@/hooks/filters/useProductsFilter";

import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";

export default function ProductPage() {
    const { products } = useContext(ProductsContext);
    const { reviews } = useContext(ReviewsContext);
    const { user } = useContext(UsersContext); 

    const { handleAddProductToCart } = useCart();

    const { notifyFailure, notifySuccess } = useToast();

    const { getProductAverageStars, generateStars } = useProductsFilter(undefined);

    const router = useRouter();
    const productId = router.query.id as string;

    const thisProduct = products.find((product) => product.id === productId);
    const relatedProducts = products.filter((product) => product.subCategoryId === thisProduct?.subCategoryId)
                                    .slice(0, 3);
    const totalReviews = reviews.filter((review) => review.productId === productId).length;
    const thisProductReviews = reviews.filter((review) => review.productId === productId);
    const thisProductAverageStars = getProductAverageStars(productId);
    const priceFormatted = usDolarFormatter(thisProduct?.price);

    //Toast notification persists between different pages
    useEffect(() => {
        const { 'pendingToast': pendingToast } = parseCookies();

        if (pendingToast){
            const toast = JSON.parse(pendingToast);
            console.log(toast);

            if (toast.type === 'success'){
                notifySuccess(toast.message);

                destroyCookie(undefined, 'pendingToast');
            }

            if (toast.type === 'failure'){
                notifyFailure(toast.message);

                destroyCookie(undefined, 'pendingToast');
            }
        }

    })

    return (
        <div className="bg-gray-900 h-full">
            <Header />

            <main className="mt-8">
                <article className="flex justify-between px-8">
                    <div className="w-[47%] min-h-[380px]">
                        {/* Main Image */}
                        <div className="w-full h-[380px] bg-gray-800 rounded p-2 relative">
                            <Image
                                src={thisProduct ? thisProduct?.imageURL : ''}
                                fill
                                alt="Product's image"
                            />
                        </div>

                        {/* Other Images Selection */}
                        <div className="mt-4 flex gap-x-3">
                            <div className="w-36 h-28 rounded bg-gray-800 relative">
                                <Image
                                    src={thisProduct ? thisProduct?.imageURL : ''}
                                    fill
                                    alt="Product's image"
                                />
                            </div>
                            <div className="w-36 h-28 rounded bg-gray-800 relative">
                                <Image
                                    src={thisProduct ? thisProduct?.imageURL : ''}
                                    fill
                                    alt="Product's image"
                                />
                            </div >
                            <div className="w-36 h-28 rounded bg-gray-800 relative">
                                <Image
                                    src={thisProduct ? thisProduct?.imageURL : ''}
                                    fill
                                    alt="Product's image"
                                />
                            </div>
                            <div className="w-36 h-28 rounded bg-gray-800 relative">
                                <Image
                                    src={thisProduct ? thisProduct?.imageURL : ''}
                                    fill
                                    alt="Product's image"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="w-[48%] min-h-[380px]">
                        <h1 className="text-gray-50 text-3xl font-bold mb-2">{thisProduct?.name}</h1>
                        <span 
                            className="text-gray-300 block mb-2"
                        >
                            <span className="text-yellow-400">{generateStars(thisProductAverageStars)}</span> ({totalReviews} {totalReviews > 1 ? 'review' : 'reviews'})
                        </span>
                        <span className="text-purple-400 text-3xl font-bold">{priceFormatted}</span>

                        {/* Color choose */}
                        <div className="mt-6">
                            <h2 className="text-gray-50 text-xl font-bold mb-3">Color</h2>
                            <div className="flex gap-x-2">
                                <div className="text-gray-400 bg-gray-800 px-4 py-2 rounded">
                                    Black
                                </div>
                                <div className="text-gray-400 bg-gray-800 px-4 py-2 rounded">
                                    Blue
                                </div>
                                <div className="text-gray-400 bg-gray-800 px-4 py-2 rounded">
                                    White
                                </div>
                            </div>
                        </div>

                        {/* Quantity */}
                        <div className="mt-4">
                            <h2 className="text-gray-50 text-xl font-bold mb-3">Quantity</h2>
                            <div className="flex">
                                <div className="border border-gray-700 bg-gray-800 px-3 py-1.5 w-10 h-10 rounded-l">
                                    <h2 className="text-gray-50 text-center">-</h2>
                                </div>
                                <div className="border-t border-b border-gray-700 bg-gray-800 px-3 py-1.5 w-10 h-10 ">
                                    <h2 className="text-gray-50 text-center">1</h2>
                                </div>
                                <div className="border border-gray-700 bg-gray-800 px-3 py-1.5 w-10 h-10 rounded-r">
                                    <h2 className="text-gray-50 text-center">+</h2>
                                </div>
                            </div>
                            <h2 className="text-gray-400 text-[0.9rem] mt-2">Avaiable: 15 items</h2>
                        </div>

                        <div className="mt-7.5">
                            <button 
                                className="w-full bg-purple-500 px-4 py-4 text-black font-bold text-xl 
                                rounded mb-4 hover:cursor-pointer hover:bg-purple-400 transition duration-300"
                            >
                                BUY NOW
                            </button>
                            <button
                                onClick={() => handleAddProductToCart(productId)}
                                className="w-full bg-gray-800 px-4 py-4 text-gray-50 font-bold text-xl 
                                rounded hover:cursor-pointer hover:bg-gray-700 transition duration-300"
                            >
                                ADD TO CART
                            </button>
                        </div>
                    </div>
                </article>

                {/* Informations */}
                <div className="flex justify-between mt-20 px-8">
                    <section className="w-[70%]">
                        {/* Description */}
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold text-gray-50 mb-3">Description</h2>
                            <div className="bg-gray-800 rounded p-5">
                                <h3 className="text-gray-50">
                                    {thisProduct?.description}
                                </h3>
                            </div>
                        </div>

                        {/* <div className="mb-6">
                            <h2 className="text-2xl font-bold text-gray-50 mb-3">Features</h2>
                            <div className="bg-gray-800 rounded p-5">
                                <ul className="flex flex-col gap-y-2">
                                    <li>
                                        <span className="mr-2 text-purple-400">✓</span>
                                        <h3 className="inline text-gray-400">Câmera principal de 108MP com estabilização óptica</h3>
                                    </li>
                                    <li>
                                        <span className="mr-2 text-purple-400">✓</span>
                                        <h3 className="inline text-gray-400">Câmera principal de 108MP com estabilização óptica</h3>
                                    </li>
                                    <li>
                                        <span className="mr-2 text-purple-400">✓</span>
                                        <h3 className="inline text-gray-400">Câmera principal de 108MP com estabilização óptica</h3>
                                    </li>
                                    <li>
                                        <span className="mr-2 text-purple-400">✓</span>
                                        <h3 className="inline text-gray-400">Câmera principal de 108MP com estabilização óptica</h3>
                                    </li>
                                    <li>
                                        <span className="mr-2 text-purple-400">✓</span>
                                        <h3 className="inline text-gray-400">Câmera principal de 108MP com estabilização óptica</h3>
                                    </li>
                                </ul>
                            </div>
                        </div> */}

                        {/* <div className="mb-20">
                            <h2 className="text-2xl font-bold text-gray-50 mb-3">Specifications</h2>
                            <div className="bg-gray-800 rounded p-5">
                                <table className="text-gray-400 w-full">
                                    <tbody>
                                        <tr className="border-b border-b-gray-600">
                                            <td className="py-3 w-[40%]">
                                                Dimensões
                                            </td>
                                            <td className="py-3">
                                                160.8 x 78.1 x 7.65 mm
                                            </td>
                                        </tr>
                                        <tr className="border-b border-b-gray-600">
                                            <td className="py-3 w-[40%]">
                                                Weight
                                            </td>
                                            <td className="py-3">
                                                189g
                                            </td>
                                        </tr>
                                        <tr className="border-b border-b-gray-600">
                                            <td className="py-3 w-[40%]">
                                                Operational System
                                            </td>
                                            <td className="py-3">
                                                Android 14
                                            </td>
                                        </tr>
                                        <tr className="border-b border-b-gray-600">
                                            <td className="py-3 w-[40%]">
                                                Garantia
                                            </td>
                                            <td className="py-3">
                                                12 Months
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div> */}
                    </section>
                    
                    <aside className="w-[25%]">
                        <section>
                            <h2 className="text-2xl font-bold text-gray-50 mb-3">Related Products</h2>

                            <div className="flex flex-col gap-y-3">
                                {relatedProducts.map((product) => (
                                    <Link 
                                        href={`/product/${product.id}`}
                                        key={product.id}
                                        className="p-3 bg-gray-800 flex rounded hover:cursor-pointer"
                                    >
                                        {/* Image */}
                                        <div className="w-[40%] mr-2 relative rounded">
                                            <Image
                                                src={product.imageURL}
                                                fill
                                                alt="Related product's image"
                                            />
                                        </div>

                                        {/* Informations */}
                                        <div>
                                            <h3 className="text-gray-50 text-xl font-semibold">{product.name}</h3>
                                            <span className="text-purple-500 text-xl font-bold">{usDolarFormatter(product.price)}</span>
                                        </div>
                                    </Link>
                                ))}
                                
                            </div>
                        </section>
                        
                    </aside>
                </div>

                <section className="px-8">
                    <div>
                        <h2 className="text-gray-50 font-bold text-2xl mb-3">Client&apos;s Reviews</h2>

                        {/* Rate the Product */}
                        <div className="w-full rounded px-5 bg-gray-800">
                            <div className="flex justify-between border-b border-b-gray-700 py-6">
                                <div className="flex flex-col">
                                    {/* <span className="text-gray-50 font-bold text-4xl">{thisProductAverageStars}</span> */}
                                    <span 
                                        className="text-gray-50 text-xl"
                                    >
                                        {thisProduct?.name} - <span className="text-yellow-400">{generateStars(thisProductAverageStars)}</span>
                                    </span> 

                                    <span className="text-gray-400">({totalReviews} {totalReviews > 1 ? 'reviews' : 'review'})</span>
                                </div>

                                <div className="flex items-center">
                                    <Link 
                                        href={`/product/${thisProduct?.id}/review`}
                                        className="px-5 py-3 font-bold text-gray-950 bg-purple-500
                                        rounded hover:bg-purple-400 hover:cursor-pointer transition duration-300"
                                    >
                                        RATE PRODUCT
                                    </Link>
                                </div>           
                            </div>
                            
                            {/* Reviews */}
                            <div>
                                {thisProductReviews.map((review) => (
                                    <div 
                                        key={review.id}
                                        className="border-b border-b-gray-700 py-6"
                                    >
                                        <div className="flex justify-between">
                                            <span className="text-yellow-400">{generateStars(review.stars)}</span>
                                            <span className="text-gray-500 text-[0.9rem] font-semibold">
                                                {utcDateFormatter(new Date(review.timestamp))}  
                                            </span>
                                        </div>

                                        <div>
                                            <span className="text-gray-500 text-[0.9rem] block mb-2">{user?.email}</span>
                                            <h2 className="text-gray-50 font-bold">{review.title}</h2>
                                            <h3 className="text-gray-300">{review.comment}</h3>
                                        </div>
                                    </div>
                                )).slice(0, 2)}

                                <div className="py-6">
                                    <Link 
                                        href={`/product/${productId}/reviews`}
                                        className="hover:cursor-pointer text-purple-400 font-semibold"
                                    >
                                        {thisProductReviews.length > 2 ? `See all ${totalReviews} reviews` : `See review`}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />

            <Toaster />
        </div>
    )
}