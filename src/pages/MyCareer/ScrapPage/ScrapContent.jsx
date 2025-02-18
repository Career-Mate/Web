import ContentCard from '../../../components/common/Card/ContentCard/ContentCard';
import UnderlineButton from '../../../components/common/Button/UnderlineButton/UnderlineButton';
import ContentCardSkeleton from '../../../components/SkeletonUi/ContentCardSkeleton/ContentCardSkeleton';
import { useGetScrapContents } from '../../../apis/Scrap/Content/ContentScrapApi';
import * as S from './styled/styled';

const ScrapContent = ({ onNavigate }) => {
    const { data: scrapContents, isLoading, error } = useGetScrapContents();
    const numbers = Array.from({ length: 3 }, (_, i) => i + 1);
    if (isLoading) {
        return (
            <S.CardWrapper>
                {numbers.map((number) => (
                    <ContentCardSkeleton key={number} />
                ))}
            </S.CardWrapper>
        );
    }
    if (error) return <div>error</div>;
    return (
        <S.ScrapContainer>
            {scrapContents && scrapContents.length > 0 ? (
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
                <S.MessageWrapper>
                    <S.EmptyMessage>스크랩한 컨텐츠가 없어요!</S.EmptyMessage>
                </S.MessageWrapper>
            )}
            <S.ButtonContainer>
                <UnderlineButton fontSize={'14px'} onClick={onNavigate} color={'#646F7C'}>
                    더 많은 콘텐츠 보러 가기&gt;
                </UnderlineButton>
            </S.ButtonContainer>
        </S.ScrapContainer>
    );
};

export default ScrapContent;
