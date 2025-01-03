import React, { useState, useEffect } from "react";  
import { Link as RouterLink } from "react-router-dom";  // react-router-dom의 Link로 변경
import * as S from './Pagination.style';

const Pagination = ({ totalItemNum, itemNumPerPage, pageCount, currentPage }) => {  
    const totalPages = Math.ceil(totalItemNum / itemNumPerPage); 
    const [start, setStart] = useState(1);  // start 값을 1로 초기화

    // 페이지 번호를 변경하는 함수
    const goToPrev = () => setStart((prev) => Math.max(prev - 1, 1));  
    const goToNext = () => setStart((prev) => Math.min(prev + 1, totalPages - pageCount + 1));  
    const goToFirst = () => setStart(1);  
    const goToLast = () => setStart(totalPages - pageCount + 1);  

    // currentPage가 변경될 때마다 start 값을 업데이트하는 useEffect
    useEffect(() => {
        // currentPage가 start + pageCount보다 크면 start를 올려줌
        if (currentPage > start + pageCount - 1) {
            setStart((prev) => Math.min(prev + pageCount, totalPages - pageCount + 1));
        }
        // currentPage가 start보다 작으면 start를 내려줌
        if (currentPage < start) {
            setStart((prev) => Math.max(prev - pageCount, 1));
        }
    }, [currentPage, pageCount, start, totalPages]);

    return (
        <S.Wrapper>
            <S.List>
                <S.ListItem className={S.Move}>
                    <S.Link onClick={goToFirst}>처음</S.Link> 
                </S.ListItem>
                <S.ListItem className={S.Move}>
                    <S.Link onClick={goToPrev}>이전</S.Link>  
                </S.ListItem>

                {[...Array(pageCount)].map((a, i) => (
                    start + i <= totalPages && (
                        <S.ListItem key={start + i}>
                            <RouterLink 
                                className={`${S.Page} ${currentPage === start + i && S.Active}`} 
                                to={`?page=${start + i}`}  // 링크를 클릭하면 URL이 변경됩니다
                            >
                                {start + i}  
                            </RouterLink>
                        </S.ListItem>
                    )
                ))}

                <S.ListItem className={S.Move}>
                    <S.Link onClick={goToNext}>다음</S.Link>  
                </S.ListItem>
                <S.ListItem className={S.Move}>
                    <S.Link onClick={goToLast}>마지막</S.Link>  
                </S.ListItem>
            </S.List>
        </S.Wrapper>
    );
}

export default Pagination;
