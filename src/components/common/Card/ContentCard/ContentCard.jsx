import * as S from '../styled/styled.js';
import defaultThumbnail from '../../../../assets/common/thumbnail.svg';
import scrapUncheckedIcon from '../../../../assets/common/scrap-uncheck.svg';
import scrapCheckedIcon from '../../../../assets/common/scrap-check.svg';
import { usePostScrapContent, useDeleteScrapContent } from '../../../../apis/Scrap/Content/ContentScrapApi.js';

const ContentCard = ({ id, contentName, thumbnail, url, isScrapped }) => {
    const postScrap = usePostScrapContent();
    const deleteScrap = useDeleteScrapContent();

    const handleScrap = (e) => {
        e.stopPropagation();

        if (isScrapped) {
            deleteScrap.mutate(id);
        } else {
            postScrap.mutate(id);
        }
    };

    return (
        <S.CardContainer $width={'375px'} $type={true} onClick={() => window.open(url, '_blank')}>
            <S.Thumbnail
                src={thumbnail ? thumbnail : defaultThumbnail}
                alt={contentName}
                $width={'323px'}
                $height={'227px'}
                $type={true}
            />
            <S.Line $type={true} />
            <S.ContentWrapper $type={true}>
                <S.Title $type={true}>{contentName}</S.Title>
                <S.DeadlineWrapper $type={true}>
                    <S.ScrapIcon
                        src={isScrapped ? scrapCheckedIcon : scrapUncheckedIcon}
                        alt="스크랩 아이콘"
                        onClick={handleScrap}
                    />
                </S.DeadlineWrapper>
            </S.ContentWrapper>
        </S.CardContainer>
    );
};

export default ContentCard;
