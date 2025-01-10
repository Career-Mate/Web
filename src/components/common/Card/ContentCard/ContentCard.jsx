import * as S from './styled/styled.js';
import defaultThumbnail from '../../../../assets/common/thumbnail.svg';
import scrapUncheckedIcon from '../../../../assets/common/scrap-uncheck.svg';
import scrapCheckedIcon from '../../../../assets/common/scrap-check.svg';
import { useState } from 'react';

const ContentCard = ({ contentName, thumbnail, scrap }) => {
    const [isScrap, setIsScrap] = useState(scrap);

    const handleClick = () => {
        setIsScrap(!isScrap);
    };

    return (
        <S.CardContainer $width={'375px'}>
            <S.Thumbnail src={thumbnail || defaultThumbnail} alt={contentName} $width={'323px'} $height={'227px'} />
            <S.Line />
            <S.TitleWrapper>
                <S.Title>{contentName}</S.Title>
            </S.TitleWrapper>
            <S.DeadlineWrapper>
                <S.DetailButton $type={true}>자세히 보기 &gt;</S.DetailButton>
                <S.ScrapIcon
                    src={isScrap ? scrapCheckedIcon : scrapUncheckedIcon}
                    alt="스크랩 아이콘"
                    onClick={handleClick}
                />
            </S.DeadlineWrapper>
        </S.CardContainer>
    );
};

export default ContentCard;
