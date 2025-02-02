import React from 'react';
import * as S from './styled/styled';

import prevIcon from '../../../assets/Pagination/arrow-prev.svg';
import nextIcon from '../../../assets/Pagination/arrow-next.svg';
import firstIcon from '../../../assets/Pagination/arrow-first.svg';
import lastIcon from '../../../assets/Pagination/arrow-last.svg';

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
    let startPage = 1;
    let maxVisiblePages = 4;
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    const handlePageClick = (page) => {
        if (1 <= page && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <S.PaginationContainer>
            <S.ArrowWrapper>
                <S.ArrowButton onClick={() => handlePageClick(1)} disabled={currentPage === 1}>
                    <img src={firstIcon} alt="first" />
                </S.ArrowButton>

                <S.ArrowButton onClick={() => handlePageClick(currentPage - 1)} disabled={currentPage === 1}>
                    <img src={prevIcon} alt="prev" />
                </S.ArrowButton>
            </S.ArrowWrapper>

            <S.PageNumberWrapper $pageCount={Math.min(maxVisiblePages, totalPages)}>
                {Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i).map((page, index, arr) => (
                    <S.PageNumber key={page} onClick={() => handlePageClick(page)} $isActive={page === currentPage}>
                        {page}
                    </S.PageNumber>
                ))}
            </S.PageNumberWrapper>

            <S.ArrowWrapper>
                <S.ArrowButton onClick={() => handlePageClick(currentPage + 1)} disabled={currentPage === totalPages}>
                    <img src={nextIcon} alt="next" />
                </S.ArrowButton>

                <S.ArrowButton onClick={() => handlePageClick(totalPages)} disabled={currentPage === totalPages}>
                    <img src={lastIcon} alt="last" />
                </S.ArrowButton>
            </S.ArrowWrapper>
        </S.PaginationContainer>
    );
};

export default Pagination;
