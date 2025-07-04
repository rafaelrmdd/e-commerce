import { ReviewsContext } from "@/context/ContextProvider";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

export const useReviewsFilter = () => {
    const router = useRouter();
    const productId = router.query.id;

    const { reviews } = useContext(ReviewsContext);

    const [starsFilter, setStarsFilter] = useState(0);
    const [filter, setFilter] = useState("Newest");

    const thisProductReviews = reviews.filter((review) => review.productId === productId);  
        
    const starsFilteredThisProductReviews = thisProductReviews.filter((review) => {
        if(starsFilter && starsFilter != 0){
            return review.stars === starsFilter;
        }

        return thisProductReviews;
    })

    const [isFiveStarsActive, setIsFiveStarsActive] = useState(false);
    const [isFourStarsActive, setIsFourStarsActive] = useState(false);
    const [isThreeStarsActive, setIsThreeStarsActive] = useState(false);
    const [isTwoStarsActive, setIsTwoStarsActive] = useState(false);
    const [isOneStarActive, setIsOneStarActive] = useState(false);
    
    useEffect(() => {
        setIsFiveStarsActive(starsFilter === 5)
        setIsFourStarsActive(starsFilter === 4)
        setIsThreeStarsActive(starsFilter === 3)
        setIsTwoStarsActive(starsFilter === 2)
        setIsOneStarActive(starsFilter === 1)
    }, [starsFilter]);

    const handleStarsFilter = (quantity : number) => {
        switch(quantity){
            case 5:
                setIsFiveStarsActive(!isFiveStarsActive);
                break;
            case 4:
                setIsFourStarsActive(!isFourStarsActive);
                break;
            case 3:
                setIsThreeStarsActive(!isThreeStarsActive);
                break;
            case 2:
                setIsTwoStarsActive(!isTwoStarsActive);
                break;
            case 1:
                setIsOneStarActive(!isOneStarActive);
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

    const handleResetFilter = () => {
        setFilter('Newest');
        setStarsFilter(0);
    }

    return {
        starsFilteredThisProductReviews,
        thisProductReviews,
        isFiveStarsActive,
        isFourStarsActive,
        isThreeStarsActive,
        isTwoStarsActive,
        isOneStarActive,
        filter,
        handleStarsFilter,
        filterReviews,
        setStarsFilter,
        setFilter,
        handleResetFilter,
    }
}