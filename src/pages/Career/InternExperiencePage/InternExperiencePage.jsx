import Template from '../../../components/common/UserTemplate/Template';
import ProgressBar from '../../../components/common/ProgressBar/ProgressBar';
import SquareButton from '../../../components/common/Button/SquareButton/SquareButton';
import * as S from './styled/styled';

const InternExperiencePage = () => {
    return (
        <S.PageWrapper>
            <S.HeaderWrapper>
                <S.Title>1. 인턴 경험</S.Title>
                <ProgressBar progression={1} />
            </S.HeaderWrapper>

            <S.TemplateWrapper>
                <Template jobType="frontend" pageType="internExperience" />
            </S.TemplateWrapper>

            <S.ButtonWrapper>
                <SquareButton width="131px" backgroundColor={'deepgreen'}>
                    저장
                </SquareButton>
                <SquareButton width="131px" backgroundColor={'lightgreen'}>
                    다음
                </SquareButton>
            </S.ButtonWrapper>
        </S.PageWrapper>
    );
};

export default InternExperiencePage;
