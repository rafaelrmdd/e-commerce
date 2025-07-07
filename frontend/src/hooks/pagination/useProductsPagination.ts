import { useState } from "react";
import { useProductsFilter } from "../filters/useProductsFilter";

export const useProductsPagination = () => { 
    const { filteredProducts } = useProductsFilter(undefined);

    const [splitLimit, setSplitLimit] = useState(8);
    const [initialValue, setInitialValue] = useState(0)
    const [currentPage, setCurrentPage] = useState(1);

    const productsPerPage = 8;
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    const canGoNextPage = currentPage < totalPages;

    return {
        splitLimit,
        initialValue,
        currentPage,
        canGoNextPage,
        totalPages,
        setSplitLimit,
        setInitialValue,
        setCurrentPage
    }
}