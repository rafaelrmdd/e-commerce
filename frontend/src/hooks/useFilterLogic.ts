import { ProductsContext, ReviewsContext } from "@/context/ContextProvider";
import { useContext, useEffect, useState } from "react";

export const useFilterLogic = (categoryFromHome : string | null) => {
    const { products } = useContext(ProductsContext);
    const { reviews } = useContext(ReviewsContext);

    const [category, setCategory] = useState(categoryFromHome || "");
    const [searchKeyword, setSearchKeyword] = useState("");
    const [temporarySearchKeyword, setTemporarySearchKeyword] = useState("");
    const [priceRange, setPriceRange] = useState("")
    const [starsFilter, setStarsFilter] = useState(0);

    const productStars = new Map<number, number[]>();
    const productAverages = new Map<number, number>()

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

    //Avoid multiple stars filter active at the same time
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

    const [productsPerPage, setProductsPerPage] = useState(8);
    const [initialValue, setInitialValue] = useState(0)

    const filteredProducts = products.filter((product) => {
        const categoryNumber = convertCategoryToNumber(category);
        const hasCategory = categoryNumber !== null;
        const hasKeyword = searchKeyword.trim() !== "";
        const hasPriceRange = priceRange !== "";
        const hasStarsFilter = starsFilter !== 0;
        const hasId = productIds.has(product.id)
        const thisProductStarsAverage = productAverages.get(product.id);
        
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
    }).slice(initialValue, productsPerPage)

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
        const productReviews = reviews.filter((review) => review.productId === id);

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

    return {
        handleCategory,
        handleStarsFilter,
        handleKeyPress,
        setStarsFilter,
        setPriceRange,
        setTemporarySearchKeyword,
        setProductsPerPage,
        setInitialValue,
        getProductAverageStars,
        getProductReview,
        generateStars,
        handleSearch,
        isElectronicsCategoryActive,
        isFashionCategoryActive,
        isSportsCategoryActive,
        isHouseDecorationCategoryActive,
        isFiveStarsActive,
        isFourOrMoreStarsActive,
        isThreeOrMoreStarsActive,
        isTwoOrMoreStarsActive,
        isOneOrMoreStarsActive,
        initialValue,
        productsPerPage,
        priceRange,
        filteredProducts
    }
}