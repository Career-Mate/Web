import * as S from '../styled/styled.js';
import defaultThumbnail from '../../../../assets/common/thumbnail.svg';
import scrapUncheckedIcon from '../../../../assets/common/scrap-uncheck.svg';
import scrapCheckedIcon from '../../../../assets/common/scrap-check.svg';
import { postScrapContent, deleteScrapContent } from '../../../../apis/Scrap/Content/ContentScrapApi.js';
import { useState } from 'react';

const ContentCard = ({ id, contentName, thumbnail, url, isScrapped }) => {
    const [isScrap, setIsScrap] = useState(isScrapped);

    const handleScrap = async () => {
        try {
            if (isScrap) {
                await deleteScrapContent(id);
                setIsScrap(false);
                console.log(`스크랩 해제됨 (id: ${id})`);
            } else {
                const result = await postScrapContent(id);
                setIsScrap(true);
                console.log(`스크랩 성공 (id: ${id}):`, result);
            }
        } catch (error) {
            console.error(`스크랩 요청 실패 (id: ${id}):`, error);
        }
    };

    return (
        <S.CardContainer $width={'375px'} $type={true}>
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
                <S.DeadlineWrapper>
                    <S.DetailButton $type={true} onClick={() => window.open(url, '_blank')}>
                        자세히 보기 &gt;
                    </S.DetailButton>
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
