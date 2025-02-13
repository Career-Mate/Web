const usePagination = ({ totalPages, currentPage, setCurrentPage, maxVisiblePages = 4 }) => {
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2 - 1));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    if (endPage - startPage < maxVisiblePages - 1) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    const pages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return { pages, goToPage };
};

export default usePagination;
