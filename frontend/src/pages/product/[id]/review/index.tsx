import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { useRouter } from "next/router";
import { FormEvent } from "react";

export default function Review() {
    const router = useRouter();
    const productId = router.query.id as string;

    const handleSubmit = (e : FormEvent) => {
        e.preventDefault();

        console.log(e);
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
                    <div className="w-24 h-24 bg-gray-300 rounded">
                        {/* Image */}
                    </div>
                    <div className="ml-6 flex flex-col justify-center">
                        <h2 className="text-gray-50 font-semibold text-xl mb-2">Wireless Headphones</h2>
                        <span className="text-purple-400 font-semibold text-xl" >$99.90</span>
                    </div>
                </section>

                <form 
                    className="p-6 rounded bg-gray-800"
                    onSubmit={handleSubmit}
                >
                    <div className="mb-4">
                        <h2 className="text-gray-50 font-semibold text-xl">Your review</h2>
                        <span className="text-yellow-400 text-2xl">☆</span>
                        <span className="text-yellow-400 text-2xl">☆</span>
                        <span className="text-yellow-400 text-2xl">☆</span>
                        <span className="text-yellow-400 text-2xl">☆</span>
                        <span className="text-yellow-400 text-2xl">☆</span>

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
                            className="rounded bg-gray-700 px-4 py-3 w-full placeholder:text-gray-400"
                            type="text" 
                            name="title"
                            placeholder="Sum up your experience using the product"
                        />
                    </div>

                    <div className="mb-12">
                        <label 
                            className="text-gray-50 font-semibold text-xl block mb-1"
                            htmlFor="description"
                        >
                            Detailed description
                        </label>
                        <textarea 
                            className="rounded bg-gray-700 px-4 py-3 w-full placeholder:text-gray-400"
                            name="description"
                            placeholder="Tell your experiences with the products etc..."
                            rows={6}
                        >

                        </textarea>
                    </div>

                    <div className="flex justify-between gap-x-4">
                        <button 
                            className="rounded px-4 py-3 bg-gray-700 w-full text-gray-50 font-semibold
                            hover:cursor-pointer hover:bg-gray-600 transition duration-200"
                        >
                            Cancel
                        </button>
                        <button
                            className="rounded px-4 py-3 bg-purple-800 w-full text-gray-950 font-semibold
                            hover:cursor-not-allowed"
                            disabled 
                            type="submit"
                        >
                            Send review
                        </button>
                    </div>

                    <hr className="text-gray-600 mt-8 mb-8"/>

                    <div>
                        <h2 className="text-gray-50 font-semibold mb-2">Evaluation Guidelines</h2>
                        <ol className="text-gray-400 text-[0.9rem]">
                            <li>
                                Be honest and constructive in your evaluation   
                            </li>
                            <li>
                                Focus on the product&apos;s quality, functionality, and user experience  
                            </li>
                            <li>
                                Avoid offensive or inappropriate language 
                            </li>
                            <li>
                                Your reviews help other customers make better choices  
                            </li>
                        </ol>
                    </div>
                </form>
            </div>

            <Footer />
        </div>
    )
}