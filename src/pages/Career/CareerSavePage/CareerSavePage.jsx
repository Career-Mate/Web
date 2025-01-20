import { useNavigate } from 'react-router-dom';
import InfoContainer from '../../../components/common/InfoContainer/InfoContainer';
import * as S from './styled/styled';

const CareerSavePage = () => {
    const userName = '김단아';
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <S.CareerSavePageWrapper>
            <InfoContainer
                type="logoWithContent"
                width="981px"
                height="393.27px"
                top="327.73px"
                showLogo={true}
                showTitleText={false}
                mainText={`${userName} 메이트님의 커리어가 저장되었습니다.`}
                detailText="저장된 템플릿은 ‘나의 커리어'에서 확인과 수정이 가능해요!"
                buttons={[
                    {
                        text: '나의 커리어로 이동하기',
                        width: '280px',
                        height: '60px',
                        padding: '0px',
                        backgroundColor: 'green',
                        onClick: () => handleNavigation('/mycareer'),
                    },
                    {
                        text: '메인화면으로 돌아가기',
                        width: '271px',
                        height: '60px',
                        padding: '0px',
                        backgroundColor: 'grey',
                        onClick: () => handleNavigation('/'),
                    },
                    {
                        text: '채용 공고 추천 받기',
                        width: '271px',
                        height: '60px',
                        padding: '0px',
                        backgroundColor: 'deepgreen',
                        onClick: () => handleNavigation('/recommend'),
                    },
                ]}
            />
        </S.CareerSavePageWrapper>
    );
};

export default CareerSavePage;
