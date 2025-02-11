import { useNavigate } from 'react-router-dom';
import InfoContainer from '../../../components/common/InfoContainer/InfoContainer';
import * as S from './styled/styled';
import { useAuthStore } from '../../../store/authStore';

const CareerSavePage = () => {
    const { user } = useAuthStore();
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <S.CareerSavePageWrapper>
            <InfoContainer
                type="logoWithContent"
                width="815px"
                height="372px"
                top="327.73px"
                showLogo={true}
                showTitleText={false}
                mainText={`${user.name} 메이트님의 커리어가 저장되었습니다.`}
                detailText="정리한 커리어를 바탕으로 채용 공고 추천도 받을 수 있어요!"
                buttons={[
                    {
                        text: '채용 공고 추천 받기',
                        width: '330px',
                        height: '57px',
                        padding: '0px',
                        backgroundColor: 'deepgreen',
                        onClick: () => handleNavigation('/recommend'),
                    },
                    {
                        text: '메인화면으로 돌아가기',
                        width: '330px',
                        height: '57px',
                        padding: '0px',
                        backgroundColor: 'grey',
                        onClick: () => handleNavigation('/'),
                    },
                ]}
            />
        </S.CareerSavePageWrapper>
    );
};

export default CareerSavePage;
