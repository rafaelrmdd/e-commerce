import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProductsContext, UsersContext } from "@/context/ContextProvider";
import { api } from "@/services/api/api";
import { useRouter } from "next/router";
import { FormEvent, useContext, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Image from "next/image";
import { usDolarFormatter } from "@/utils/formatters";
import { Toaster } from "react-hot-toast";
import { setCookie } from "nookies";

export default function Review() {
    const router = useRouter();
    const productId = router.query.id as string;

    const { user } = useContext(UsersContext);
    const { products } = useContext(ProductsContext);

    const [title, setTitle] = useState("");
    const [comment, setComment] = useState("");
    const [stars, setStars] = useState(0);

    const thisProduct = products.find((product) => product.id === productId);

    const isEnabled = title.length >= 6 && comment.length >= 12 && stars != 0;
    
    const onSubmit = async (e : FormEvent) => {
        e.preventDefault();

        if (isEnabled){
            try{
                await api.post('/review', {
                    'userId': user?.id,
                    'productId': productId,
                    'stars': stars,
                    'title': title,
                    'comment': comment
                })

                setCookie(undefined, 'pendingToast', JSON.stringify({message: 'Review was successfully submitted', type: 'success'}), {
                    maxAge: 1,
                    path: "/" 
                })

                router.push(`/product/${productId}`)
            }catch(e){
                setCookie(undefined, 'pendingToast', JSON.stringify({message: 'An error ocurred. Review was not submitted', type: 'failure'}), {
                    maxAge: 1,
                    path: "/" 
                })

                console.log('Review error', e);
            }
        }
    }

    return (
        <div className="h-full bg-gray-900">
            <Header />

            <div className="px-72 mb-16">
                <div className="flex flex-col justify-center items-center mt-16 mb-8">
                    <h1 className="text-gray-50 font-bold text-3xl mb-2">Rate Product</h1>
                    <h2 className="text-gray-400">Share your experience with other clients</h2>
                </div>

                <section className="bg-gray-800 rounded p-6 flex mb-8">
                    <div className="w-24 h-24 bg-gray-300 rounded relative">
                        <Image
                            src={thisProduct ? thisProduct.imageURL : ''}
                            alt="Product's image" 
                            fill
                        />
                    </div>
                    <div className="ml-6 flex flex-col justify-center">
                        <h2 className="text-gray-50 font-semibold text-xl mb-2">{thisProduct?.name}</h2>
                        <span className="text-purple-400 font-semibold text-xl" >{usDolarFormatter(thisProduct?.price)}</span>
                    </div>
                </section>

                <form 
                    className="p-6 rounded bg-gray-800"
                    onSubmit={onSubmit}
                >
                    <div className="mb-4">
                        <h2 className="text-gray-50 font-semibold text-xl">Your review</h2>
                        <div className="flex mt-2 mb-1">
                            <span 
                                onClick={() => setStars(1)}
                                className="text-yellow-400 text-2xl hover:cursor-pointer" 
                            >
                                {stars >= 1 ? <FaStar /> : <FaRegStar />}
                            </span>

                            <span 
                                onClick={() => setStars(2)}
                                className="text-yellow-400 text-2xl hover:cursor-pointer" 
                            >
                                {stars >= 2 ? <FaStar /> : <FaRegStar />}
                            </span>

                            <span 
                                onClick={() => setStars(3)}
                                className="text-yellow-400 text-2xl hover:cursor-pointer" 
                            >
                                {stars >= 3 ? <FaStar /> : <FaRegStar />}
                            </span>

                            <span 
                                onClick={() => setStars(4)}
                                className="text-yellow-400 text-2xl hover:cursor-pointer" 
                            >
                                {stars >= 4 ? <FaStar /> : <FaRegStar />}
                            </span>
                            
                            <span 
                                onClick={() => setStars(5)}
                                className="text-yellow-400 text-2xl hover:cursor-pointer" 
                            >
                                {stars >= 5 ? <FaStar /> : <FaRegStar />}
                            </span>
                        </div>
                        

                        <h2 className="text-gray-400 text-[0.9rem]">Review by clicking on the stars</h2>
                    </div>

                    <div className="mb-4">
                        <label 
                            className="text-gray-50 font-semibold text-xl block mb-1"
                            htmlFor="title"
                        >
                            Title *
                        </label>
                        <input 
                            onChange={(e) => setTitle(e.target.value)}
                            className="rounded bg-gray-700 px-4 py-3 w-full placeholder:text-gray-400
                            outline-0 text-gray-50 mb-1"
                            type="text" 
                            name="title"
                            placeholder="Sum up your experience using the product"
                            required
                            maxLength={30}
                        />
                        <span className="text-gray-400 text-[0.9rem]">{title.length}/30 characters</span>
                    </div>

                    <div className="mb-12">
                        <label 
                            className="text-gray-50 font-semibold text-xl block mb-1"
                            htmlFor="comment"
                        >
                            Comment
                        </label>
                        <textarea 
                            onChange={(e) => setComment(e.target.value)}
                            className="rounded bg-gray-700 px-4 py-3 w-full placeholder:text-gray-400
                            outline-0 text-gray-50"
                            name="comment"
                            placeholder="Tell your experiences with the products etc..."
                            rows={6}
                            required
                            maxLength={500}
                        >
                        </textarea>
                        <span className="text-gray-400 text-[0.9rem]">{comment.length}/500 characters</span>
                    </div>

                    <div className="flex justify-between gap-x-4">
                        <button 
                            className="rounded px-4 py-3 bg-gray-700 w-full text-gray-50 font-semibold
                            hover:cursor-pointer hover:bg-gray-600 transition duration-200"
                        >
                            Cancel
                        </button>
                        <button
                            className={`rounded px-4 py-3 w-full text-gray-950 font-semibold transition duration-200
                            ${isEnabled ? 
                                ("bg-purple-600 hover:cursor-pointer") :
                                ("bg-purple-800 hover:cursor-not-allowed")}`
                            }
                            disabled={!isEnabled}
                            type="submit"
                        >
                            Send Review
                        </button>
                    </div>

                    <hr className="text-gray-600 mt-8 mb-8"/>

                    <div>
                        <h2 className="text-gray-50 font-semibold mb-2">Evaluation Guidelines</h2>
                        <ul className="text-gray-400 text-[0.9rem]">
                            <li>
                                • Be honest and constructive in your evaluation   
                            </li>
                            <li>
                                • Focus on the product&apos;s quality, functionality, and user experience  
                            </li>
                            <li>
                                • Avoid offensive or inappropriate language 
                            </li>
                            <li>
                                • Your reviews help other customers make better choices  
                            </li>
                        </ul>
                    </div>
                </form>
            </div>

            <Toaster />

            <Footer />
        </div>
    )
}