import { useState } from "react";
import { useReviewsFilter } from "../filters/useReviewsFilter";

export const useReviewsPagination = () => {
    const { filterReviews } = useReviewsFilter();

    const [splitLimit, setSplitLimit] = useState(4);
    const [initialValue, setInitialValue] = useState(0)
    const [currentPage, setCurrentPage] = useState(1);

    const reviewsPerPage = 4;
    const totalPages = Math.ceil(filterReviews().length / reviewsPerPage);

    const canGoNextPage = currentPage < totalPages;

    return {
        splitLimit,
        initialValue,
        currentPage,
        canGoNextPage,
        setSplitLimit,
        setInitialValue,
        setCurrentPage
    }
}