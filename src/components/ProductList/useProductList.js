const { useState } = require("react");

const pageSize = 12;

export const useProductList = ({ items }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const handleOnChange = (current) => setCurrentPage(current);

    const from = (currentPage - 1) * pageSize;
    const to = currentPage * pageSize;

    const products =
        items?.length > 0 && items.slice(from, Math.min(to, items.length));

    return {
        handleOnChange,
        currentPage,
        products,
        pageSize,
    };
};
