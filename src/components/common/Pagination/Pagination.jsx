import React from 'react';
import * as S from './styled/styled';
import usePagination from '../../../hooks/usePagination';

import prevIcon from '../../../assets/Pagination/arrow-prev.svg';
import nextIcon from '../../../assets/Pagination/arrow-next.svg';
import firstIcon from '../../../assets/Pagination/arrow-first.svg';
import lastIcon from '../../../assets/Pagination/arrow-last.svg';

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
    const maxVisiblePages = 4;

    const { pages, goToPage } = usePagination({
        totalPages,
        currentPage,
        setCurrentPage,
        maxVisiblePages,
    });

    return (
        <S.PaginationContainer>
            <S.ArrowWrapper>
                <S.ArrowButton onClick={() => goToPage(1)} disabled={currentPage === 1}>
                    <img src={firstIcon} alt="first" />
                </S.ArrowButton>

                <S.ArrowButton onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
                    <img src={prevIcon} alt="prev" />
                </S.ArrowButton>
            </S.ArrowWrapper>

            <S.PageNumberWrapper $pageCount={pages.length}>
                {pages.map((page) => (
                    <S.PageNumber key={page} onClick={() => goToPage(page)} $isActive={page === currentPage}>
                        {page}
                    </S.PageNumber>
                ))}
            </S.PageNumberWrapper>

            <S.ArrowWrapper>
                <S.ArrowButton onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
                    <img src={nextIcon} alt="next" />
                </S.ArrowButton>

                <S.ArrowButton onClick={() => goToPage(totalPages)} disabled={currentPage === totalPages}>
                    <img src={lastIcon} alt="last" />
                </S.ArrowButton>
            </S.ArrowWrapper>
        </S.PaginationContainer>
    );
};

export default Pagination;
