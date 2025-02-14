import * as S from '../styled/styled.js';
import defaultThumbnail from '../../../../assets/common/thumbnail.svg';
import scrapUncheckedIcon from '../../../../assets/common/scrap-uncheck.svg';
import scrapCheckedIcon from '../../../../assets/common/scrap-check.svg';
import useScrapStore from '../../../../store/useScrapStore.js';

const ContentCard = ({ id, contentName, thumbnail, url }) => {
    const { scrapContents, addScrapContent, removeScrapContent } = useScrapStore();
    const isScrap = scrapContents.some((content) => content.id === id);

    const handleScrap = () => {
        if (isScrap) {
            removeScrapContent(id);
        } else {
            addScrapContent({ id, contentName, thumbnail, url });
        }
    };

    return (
        <S.CardContainer $type={true}>
            <S.Thumbnail src={thumbnail || defaultThumbnail} alt={contentName} $type={true} />
            <S.Line />
            <S.ContentWrapper $type={true}>
                <S.Title $type={true} onClick={() => window.open(url, '_blank')}>
                    {contentName}
                </S.Title>
                <S.DeadlineWrapper>
                    <S.ScrapIcon
                        src={isScrap ? scrapCheckedIcon : scrapUncheckedIcon}
                        alt="스크랩 아이콘"
                        onClick={handleScrap}
                    />
                </S.DeadlineWrapper>
            </S.ContentWrapper>
        </S.CardContainer>
    );
};

export default ContentCard;
