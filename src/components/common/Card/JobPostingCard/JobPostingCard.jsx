import * as S from '../ContentCard/styled/styled';
import defaultThumbnail from '../../../../assets/common/thumbnail.svg';
import scrapUncheckedIcon from '../../../../assets/common/scrap-uncheck.svg';
import scrapCheckedIcon from '../../../../assets/common/scrap-check.svg';
import { useState } from 'react';

const JobPostingCard = ({ companyName, deadline, contentName, thumbnail, scrap }) => {
    const [isScrap, setIsScrap] = useState(scrap);

    const handleClick = () => {
        setIsScrap(!isScrap);
    };

    return (
        <S.CardContainer $width={'400px'}>
            <S.CompanyName>{companyName}</S.CompanyName>
            <S.Thumbnail src={thumbnail || defaultThumbnail} alt={contentName} $width={'348px'} $height={'200px'} />
            <S.Line />

            <S.Title>{contentName}</S.Title>
            <S.DetailButton $type={false}>공고 보기 &gt;</S.DetailButton>

            <S.DeadlineWrapper>
                <S.Deadline>{deadline}</S.Deadline>
                <S.ScrapIcon
                    src={isScrap ? scrapCheckedIcon : scrapUncheckedIcon}
                    alt="스크랩 아이콘"
                    onClick={handleClick}
                />
            </S.DeadlineWrapper>
        </S.CardContainer>
    );
};

export default JobPostingCard;
