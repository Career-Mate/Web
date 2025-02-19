import { useNavigate } from 'react-router-dom';
import InfoContainer from '../../../components/common/InfoContainer/InfoContainer';
import useContainerStyle from '../../../hooks/useContainerStyle';

const ProfileSuccessPage = () => {
    const navigate = useNavigate();

    const containerStyle = useContainerStyle('half');

    return (
        <InfoContainer
            type="logoWithContent"
            width={containerStyle.width}
            height={containerStyle.height}
            top="286.87px"
            showLogo={true}
            showTitleText={false}
            mainText="프로필 설정 완료!"
            detailText="이제 커리어 정리와 채용 공고를 추천 받을 수 있어요!"
            mainFontSize={containerStyle.mainFontSize}
            detailFontSize={containerStyle.detailFontSize}
            buttons={[
                {
                    text: '커리어 정리하기',
                    width: containerStyle.button.buttonWidth,
                    height: containerStyle.button.buttonHeight,
                    fontSize: containerStyle.button.buttonFontSize,
                    backgroundColor: 'deepgreen',
                    onClick: () => navigate('/career'),
                },
                {
                    text: '메인화면으로 돌아가기',
                    width: containerStyle.button.buttonWidth,
                    height: containerStyle.button.buttonHeight,
                    fontSize: containerStyle.button.buttonFontSize,
                    backgroundColor: 'grey',
                    onClick: () => navigate('/'),
                },
            ]}
        />
    );
};

export default ProfileSuccessPage;
