import React from 'react';
import * as S from './styled/styled';

import prevIcon from '../../../assets/Pagination/arrow-prev.svg';
import nextIcon from '../../../assets/Pagination/arrow-next.svg';

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
    let startPage = 1;
    let endPage = Math.min(2, totalPages);

    const handlePageClick = (page) => {
        if (1 <= page && page <= endPage) {
            setCurrentPage(page);
        }
    };

    return (
        <S.PaginationContainer>
            <S.ArrowButton onClick={() => handlePageClick(currentPage - 1)} disabled={currentPage === 1}>
                <img src={prevIcon} alt="prev" />
            </S.ArrowButton>

            <S.PageWrapper>
                <S.PageNumber onClick={() => handlePageClick(1)} $isActive={currentPage === 1}>
                    1
                </S.PageNumber>
                {totalPages > 1 && (
                    <S.PageNumber onClick={() => handlePageClick(2)} $isActive={currentPage === 2}>
                        2
                    </S.PageNumber>
                )}
            </S.PageWrapper>

            <S.ArrowButton onClick={() => handlePageClick(currentPage + 1)} disabled={currentPage === endPage}>
                <img src={nextIcon} alt="next" />
            </S.ArrowButton>
        </S.PaginationContainer>
    );
};

export default Pagination;
