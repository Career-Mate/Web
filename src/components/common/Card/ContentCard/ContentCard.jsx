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
        <S.CardContainer $width={'375px'} $type={true}>
            <S.Thumbnail
                src={thumbnail || defaultThumbnail}
                alt={contentName}
                $width={'323px'}
                $height={'227px'}
                $type={true}
            />
            <S.Line $type={true} />
            <S.ContentWrapper $type={true}>
                <S.Title $type={true}>{contentName}</S.Title>
                <S.DeadlineWrapper>
                    <S.DetailButton $type={true}>자세히 보기 &gt;</S.DetailButton>
                    <S.ScrapIcon
                        src={isScrap ? scrapCheckedIcon : scrapUncheckedIcon}
                        alt="스크랩 아이콘"
                        onClick={handleClick}
                    />
                </S.DeadlineWrapper>
            </S.ContentWrapper>
        </S.CardContainer>
    );
};

export default ContentCard;
