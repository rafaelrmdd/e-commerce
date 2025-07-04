import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProductsContext, ReviewsContext, UsersContext } from "@/context/ContextProvider";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

export default function ProductReviewsPage() {
    const router = useRouter();
    const productId = router.query.id;

    const { products } = useContext(ProductsContext);
    const { reviews } = useContext(ReviewsContext);
    const { user } = useContext(UsersContext); 

    const [starsFilter, setStarsFilter] = useState(0);
    const [filter, setFilter] = useState("Newest");

    const thisProduct = products.find((p) => String(p.id) === productId);
    const thisProductReviews = reviews.filter((review) => review.productId === productId);  
     
    const starsFilteredThisProductReviews = thisProductReviews.filter((review) => {
        if(starsFilter && starsFilter != 0){
            return review.stars === starsFilter;
        }

        return thisProductReviews;
    })

    const generateStars = (quantity : number | undefined) => {
        const stars = [];

        if(quantity == undefined){
            return "Stars not found";
        }

        for(let x = 0; x < quantity; x++) {
            stars.push("★")
        }

        return stars;
    } 

    const [isFiveStarsActive, setIsFiveStarsActive] = useState(false);
    const [isFourOrMoreStarsActive, setIsFourOrMoreStarsActive] = useState(false);
    const [isThreeOrMoreStarsActive, setIsThreeOrMoreStarsActive] = useState(false);
    const [isTwoOrMoreStarsActive, setIsTwoOrMoreStarsActive] = useState(false);
    const [isOneOrMoreStarsActive, setIsOneOrMoreStarsActive] = useState(false);
    
    useEffect(() => {
        setIsFiveStarsActive(starsFilter === 5)
        setIsFourOrMoreStarsActive(starsFilter === 4)
        setIsThreeOrMoreStarsActive(starsFilter === 3)
        setIsTwoOrMoreStarsActive(starsFilter === 2)
        setIsOneOrMoreStarsActive(starsFilter === 1)
    }, [starsFilter]);

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

    const filterReviews = () => {
        if(filter) {
            switch(filter){
                case "Newest":
                    return [...starsFilteredThisProductReviews].sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
                case "Oldest":
                    return [...starsFilteredThisProductReviews].sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());
                case "Lowest Rating":
                    return [...starsFilteredThisProductReviews].sort((a, b) => a.stars - b.stars);
                case "Highest Rating":
                    return [...starsFilteredThisProductReviews].sort((a, b) => b.stars - a.stars);
                default:
                    return starsFilteredThisProductReviews;
            }
        }

        return thisProductReviews;
    }

    const dateFormat = Intl.DateTimeFormat('pt-BR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });
    
    const starsTotal = thisProductReviews.reduce((a, review) => a + review.stars, 0);
    const totalReviews = thisProductReviews.length;
    const starsAverage = starsTotal / totalReviews;

    return (
        <div className="h-full bg-gray-900">
            <Header />
            
            <main className="px-8 mt-8 mb-20">
                <div className="flex items-center mb-8">
                    <span className="text-purple-400 mr-6">Back to product</span>
                    <h2 className="text-gray-50 font-bold text-3xl">{thisProduct?.name} - Reviews</h2>
                </div>

                <div className="flex bg-gray-800 rounded p-5 justify-between items-center">
                    <div className="">
                        <span className="text-gray-50 font-bold text-4xl block">4.7</span>
                        <span className="text-yellow-400 block">{generateStars(starsAverage)}</span>
                        <h3 className="text-gray-500">{totalReviews} {totalReviews > 1 ? "feedbacks" : "feedback"}</h3>
                    </div>

                    <div className="flex gap-x-4 text-gray-50">
                        <div
                            onClick={() => {
                                setStarsFilter(5)
                                handleStarsFilter(5)
                            }} 
                            className={`rounded bg-gray-700 px-4 py-2 hover:bg-purple-400 
                            transition duration-200 ${isFiveStarsActive ? 'bg-purple-600' : null}`}
                        >
                            <span className="mr-1">5</span>
                            <span>★</span>
                        </div>
                        <div
                            onClick={() => {
                                setStarsFilter(4)
                                handleStarsFilter(4)
                            }} 
                            className={`rounded bg-gray-700 px-4 py-2 hover:bg-purple-400 
                            transition duration-200 ${isFourOrMoreStarsActive ? 'bg-purple-600' : null}`}
                        >
                            <span className="mr-1">4</span>
                            <span>★</span>
                        </div>
                        <div
                            onClick={() => {
                                setStarsFilter(3)
                                handleStarsFilter(3)
                            }}
                            className={`rounded bg-gray-700 px-4 py-2 hover:bg-purple-400 
                            transition duration-200 ${isThreeOrMoreStarsActive ? 'bg-purple-600' : null}`}
                        >
                            <span className="mr-1">3</span>
                            <span>★</span>
                        </div>
                        <div
                            onClick={() => {
                                setStarsFilter(2)
                                handleStarsFilter(2)
                            }} 
                            className={`rounded bg-gray-700 px-4 py-2 hover:bg-purple-400 
                            transition duration-200 ${isTwoOrMoreStarsActive ? 'bg-purple-600' : null}`}
                        >
                            <span className="mr-1">2</span>
                            <span>★</span>
                        </div>
                        <div
                            onClick={() => {
                                setStarsFilter(1)
                                handleStarsFilter(1)
                            }} 
                            className={`rounded bg-gray-700 px-4 py-2 hover:bg-purple-400 
                            transition duration-200 ${isOneOrMoreStarsActive ? 'bg-purple-600' : null}`}
                        >
                            <span className="mr-1">1</span>
                            <span>★</span>
                        </div>
                    </div>
                </div>

                <div className="mt-10">
                    <div className="">
                        <div className="flex justify-between">
                            <h2 className="text-xl text-gray-50 font-bold">All Reviews ({totalReviews})</h2>

                            <div className="flex gap-x-3 items-center">
                                <h3 className="text-gray-300">Sort by: </h3>

                                <select 
                                    onChange={(e) => setFilter(e.target.value)}
                                    name="filter"
                                    className="outline-0 bg-gray-800 rounded px-4 py-2
                                    border border-gray-600 text-gray-50"
                                >
                                    <option>Newest</option>
                                    <option>Oldest</option>
                                    <option>Highest Rating</option>
                                    <option>Lowest Rating</option>
                                </select>

                                <Link 
                                    href={`/product/${productId}/review`}
                                    className="px-4 py-2 text-gray-950 bg-purple-500 rounded
                                    hover:bg-purple-400 transition duration-200 font-semibold hover:cursor-pointer"
                                >
                                    WRITE A REVIEW
                                </Link>
                            </div>
                        </div>

                        {/* Reviews */}
                        <section className="bg-gray-800 rounded p-5 mt-8">
                            {filterReviews().map((review) => (
                                <div 
                                    key={review.id}
                                    className="border-b border-b-gray-700 py-6"
                                >
                                    <div className="flex justify-between">
                                        <span className="text-yellow-400">{generateStars(review.stars)}</span>
                                        <span className="text-gray-500 text-[0.9rem] font-semibold">{dateFormat.format(new Date(review.timestamp))}</span>
                                    </div>

                                    <div>
                                        <h2 className="text-gray-50 font-bold">{review.title}</h2>
                                        <h3 className="text-gray-300">{review.comment}</h3>
                                        <span className="text-gray-500 text-[0.9rem]">{user?.email}</span>
                                    </div>
                                </div>
                            ))}
                        </section>
                    </div>
                    
                </div>
            </main>

            <Footer />
        </div>
    )
}