import { useState } from "react";
import { useReviewsFilter } from "./useReviewsFilter";

export const useReviewsPagination = () => {
    const { filterReviews } = useReviewsFilter();

    const [splitLimit, setSplitLimit] = useState(4);
    const [initialValue, setInitialValue] = useState(0)
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(filterReviews().length / 4);

    const canGoNextPage = initialValue < totalPages;

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