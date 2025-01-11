import React from 'react';
import * as S from './styled/styled';

import firstIcon from '../../../assets/Pagination/arrow-first.svg';
import prevIcon from '../../../assets/pagination/arrow-prev.svg';
import nextIcon from '../../../assets/pagination/arrow-next.svg';
import lastIcon from '../../../assets/pagination/arrow-last.svg';

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
    const maxTotalPages = 8;
    const maxVisiblePages = 4;
    const effectiveTotalPages = Math.min(totalPages, maxTotalPages);

    let startPage = Math.max(1, currentPage - maxVisiblePages / 2);
    startPage = Math.max(1, Math.min(startPage, effectiveTotalPages - maxVisiblePages + 1));
    let endPage = Math.min(effectiveTotalPages, startPage + maxVisiblePages - 1);

    const handlePageClick = (page) => {
        if (1 <= page && page <= effectiveTotalPages) {
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

            <S.PageWrapper $pageCount={Math.min(maxVisiblePages, effectiveTotalPages)}>
                {Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i).map((page, index, arr) => (
                    <S.PageNumber key={page} onClick={() => handlePageClick(page)} $isActive={page === currentPage}>
                        {page}
                    </S.PageNumber>
                ))}
            </S.PageWrapper>

            <S.ArrowWrapper>
                <S.ArrowButton
                    onClick={() => handlePageClick(currentPage + 1)}
                    disabled={currentPage === effectiveTotalPages}
                >
                    <img src={nextIcon} alt="next" />
                </S.ArrowButton>

                <S.ArrowButton
                    onClick={() => handlePageClick(effectiveTotalPages)}
                    disabled={currentPage === effectiveTotalPages}
                >
                    <img src={lastIcon} alt="last" />
                </S.ArrowButton>
            </S.ArrowWrapper>
        </S.PaginationContainer>
    );
};

export default Pagination;