import { useNavigate } from 'react-router-dom';
import InfoContainer from '../../../components/common/InfoContainer/InfoContainer';
import ProfileSetting from '../../../components/common/ProfileSetting/ProfileSetting';
import * as S from './styled/styled';
import { profileEmptyData } from '../../../data/profileData';
import { useProfile } from '../../../hooks/useProfile';

const ProfileSettingPage = () => {
    const navigate = useNavigate();
    const { canSave, emailError, profile, handleProfileChange, handleProfileFieldChange } =
        useProfile(profileEmptyData);

    const handleSave = () => {
        if (!canSave) {
            alert('항목을 모두 입력해주세요!');
            return;
        }

        if (emailError) {
            alert('유효한 이메일 주소를 입력하세요.');
            return;
        }
        const updatedProfile = handleProfileChange();
        console.log(updatedProfile);
        navigate('/profile/success');
    };

    return (
        <S.ProfileContainer>
            <InfoContainer
                type={'titleTextOnly'}
                width={'756px'}
                height={'1119px'}
                showTitleText={true}
                mainText={
                    <S.SettingsWrapper>
                        <S.SettingText>기본 정보를 입력해주세요!</S.SettingText>
                        <ProfileSetting
                            profile={profile}
                            buttonText={'프로필 설정하기'}
                            onSave={handleSave}
                            onChange={handleProfileFieldChange}
                        />
                    </S.SettingsWrapper>
                }
            />
        </S.ProfileContainer>
    );
};
export default ProfileSettingPage;
