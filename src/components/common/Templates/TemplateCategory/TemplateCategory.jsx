import { useState } from 'react';
import * as S from './styled/styled';
import ArrowNext from '../../../../assets/Pagination/arrow-next.svg';
import ArrowPrev from '../../../../assets/Pagination/arrow-prev.svg';
import ProgressBar from '../../ProgressBar/ProgressBar';
import useProgressBar from '../../../../hooks/useProgressBar';

const categories = ['인턴 경험', '프로젝트 경험', '기타 활동', '보유 기술 및 업무 성향', '최종 정리'];

const TemplateCategory = ({ handlePrevPage, handleNextPage }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const itemGap = 20;
    const itemWidth = 100;
    const carouselWidth = 360;

    const translateX = carouselWidth / 2 - itemWidth / 2 - selectedIndex * (itemWidth + itemGap);

    const { progression, nextSummaryProgress, prevSummaryProgress } = useProgressBar(1);

    const handleOnClick = (num) => {
        setSelectedIndex((prev) => {
            const newIndex = prev + num;
            return newIndex < 0 || newIndex >= categories.length ? prev : newIndex;
        });
    };

    const handlePrevArrowClick = () => {
        handleOnClick(-1);
        prevSummaryProgress();
        handlePrevPage();
    };

    const handleNextArrowClick = () => {
        handleOnClick(1);
        nextSummaryProgress();
        handleNextPage();
    };

    return (
        <S.Container>
            <S.CarouselWrapper>
                <S.CategoryCarousel $carouselWidth={carouselWidth}>
                    <S.CategoryWrapper $translateX={translateX} $itemGap={itemGap}>
                        {categories.map((category, index) => (
                            <S.CategoryItem key={category} $width={itemWidth} $selected={selectedIndex === index}>
                                {category}
                            </S.CategoryItem>
                        ))}
                    </S.CategoryWrapper>
                </S.CategoryCarousel>
                <S.ButtonWrapper>
                    <S.ArrowButton src={ArrowPrev} onClick={handlePrevArrowClick} $hidden={selectedIndex === 0} />
                    <S.ArrowButton
                        src={ArrowNext}
                        onClick={handleNextArrowClick}
                        $hidden={selectedIndex === categories.length - 1}
                    />
                </S.ButtonWrapper>
            </S.CarouselWrapper>
            <ProgressBar progression={progression} />
        </S.Container>
    );
};

export default TemplateCategory;
