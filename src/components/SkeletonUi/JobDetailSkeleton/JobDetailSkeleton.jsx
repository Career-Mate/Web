import * as S from './styled/styled.js';
import SquareButton from '../../common/Button/SquareButton/SquareButton.jsx';
import JobDetailListSkeleton from '../JobDetailListSkeleton/JobDetailListSkeleton.jsx';
const JobDetailSkeleton = () => {
    const numbers = Array.from({ length: 5 }, (_, i) => i + 1);

    return (
        <S.ComponentContainer>
            <S.ImgWrapper>
                <S.ImgTextWrapper>
                    <S.ImgTitleWrapper>
                        <S.ImgTitle />
                        <S.ImgButton />
                    </S.ImgTitleWrapper>
                    <S.ImgText />
                </S.ImgTextWrapper>
            </S.ImgWrapper>
            <S.SummaryWrapper>
                <S.ListWrapper>
                    {numbers.map((num) => (
                        <JobDetailListSkeleton key={num} />
                    ))}
                </S.ListWrapper>
            </S.SummaryWrapper>
            <S.ButtonWrapper>
                <SquareButton backgroundColor={'grey'}>이전으로 돌아가기</SquareButton>
                <SquareButton backgroundColor={'deepgreen'}>채용공고 자세히 보러가기</SquareButton>
            </S.ButtonWrapper>
        </S.ComponentContainer>
    );
};

export default JobDetailSkeleton;
