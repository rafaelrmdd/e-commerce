import { useRouter } from "next/router"
import { Header } from "@/components/Header";

export default function ProductPage() {

    // const router = useRouter();

    return (
        <div className="bg-gray-900 h-screen">
            <Header />

            <main className="px-8 mt-8">
                <section className="flex justify-between">
                    <div className="w-[48%] h-[380px] bg-gray-800 rounded">
                        
                    </div>

                    <div className="w-[48%] h-[380px]">
                        <h1 className="text-gray-50 text-3xl font-bold">Smartphone 5G Pro Max</h1>
                        <span className="text-gray-300 block">4.7 (153 avalições)</span>
                        <span className="text-purple-400 text-3xl font-bold">$3.499.90</span>

                        {/* Color choose */}
                        <div>
                            <h2 className="text-gray-50 text-xl font-bold">Color</h2>
                            <div className="flex gap-x-2">
                                <div className="text-gray-50 bg-gray-800 px-2 py-1 rounded">
                                    Black
                                </div>
                                <div className="text-gray-50 bg-gray-800 px-2 py-1 rounded">
                                    Blue
                                </div>
                                <div className="text-gray-50 bg-gray-800 px-2 py-1 rounded">
                                    White
                                </div>
                            </div>
                        </div>

                        {/* Quantity */}
                        <div>
                            <h2 className="text-gray-50 text-xl font-bold">Quantity</h2>
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
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}