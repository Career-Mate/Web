import ContentCard from '../../../components/common/Card/ContentCard/ContentCard';
import UnderlineButton from '../../../components/common/Button/UnderlineButton/UnderlineButton';
import { useGetScrapContents } from '../../../apis/Scrap/Content/ContentScrapApi';
import * as S from './styled/styled';

const ScrapContent = ({ onNavigate }) => {
    const { data: scrapContents, isLoading, error } = useGetScrapContents();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>error</div>;

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
