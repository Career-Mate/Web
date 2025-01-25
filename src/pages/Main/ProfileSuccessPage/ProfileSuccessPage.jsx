import { useNavigate } from 'react-router-dom';
import InfoContainer from '../../../components/common/InfoContainer/InfoContainer';

const ProfileSuccessPage = () => {
    const navigate = useNavigate();

    return (
        <InfoContainer
            type="logoWithContent"
            width="756px"
            height="394.13px"
            top="286.87px"
            showLogo={true}
            showTitleText={false}
            mainText="프로필 설정 완료!"
            detailText="이제 커리어 정리와 채용 공고를 추천 받을 수 있어요!"
            buttons={[
                {
                    text: '커리어 정리하기',
                    width: '271px',
                    height: '60px',
                    padding: '0px',
                    backgroundColor: 'deepgreen',
                    onClick: () => navigate('/career'),
                },
                {
                    text: '메인화면으로 돌아가기',
                    width: '271px',
                    height: '60px',
                    padding: '0px',
                    backgroundColor: 'grey',
                    onClick: () => navigate('/'),
                },
            ]}
        />
    );
};

export default ProfileSuccessPage;
