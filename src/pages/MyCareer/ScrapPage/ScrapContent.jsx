import ContentCard from '../../../components/common/Card/ContentCard/ContentCard';
import { getScrapContents } from '../../../apis/Scrap/Content/ContentScrapApi';
import UnderlineButton from '../../../components/common/Button/UnderlineButton/UnderlineButton';
import * as S from './styled/styled';
import { useState, useEffect } from 'react';

const ScrapContent = ({ onNavigate }) => {
    const [scrapContents, setScrapContents] = useState([]);

    useEffect(() => {
        const loadScrapData = async () => {
            try {
                const data = await getScrapContents();
                setScrapContents(Array.isArray(data) ? data : []);
            } catch (error) {
                console.error('get scrap data error:', error);
            }
        };
        loadScrapData();
    }, []);

    const handleScrapContentUpdate = (contentId) => {
        setScrapContents((prev) => prev.filter((content) => content.contentId !== contentId));
    };

    return (
        <>
            {scrapContents.length > 0 ? (
                <S.CardWrapper>
                    {scrapContents.map((content) => (
                        <ContentCard
                            key={content.contentId}
                            id={content.contentId}
                            contentName={content.title}
                            thumbnail={content.photo}
                            url={content.url}
                            isScrapped={content.isScrapped}
                            onScrapUpdate={handleScrapContentUpdate}
                        />
                    ))}
                </S.CardWrapper>
            ) : (
                <S.EmptyMessage>스크랩한 콘텐츠가 없어요!</S.EmptyMessage>
            )}
            <S.ButtonContainer>
                <UnderlineButton fontSize={'14px'} onClick={onNavigate}>
                    더 많은 콘텐츠 보러 가기&gt;
                </UnderlineButton>
            </S.ButtonContainer>
        </>
    );
};

export default ScrapContent;
