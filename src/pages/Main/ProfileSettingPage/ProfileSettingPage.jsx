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

    const handleSave = async () => {
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
        try {
            const response = await fetch(`${import.meta.env.VITE_BACK_URL}/member/profile`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedProfile),
            });

            if (!response.ok) {
                throw new Error('프로필 저장 실패');
            }

            const responseData = await response.json();
            console.log('저장 성공:', responseData);

            navigate('/profile/success');
        } catch (error) {
            alert('프로필 저장에 실패했습니다. 다시 시도해주세요.');
            console.error('오류 발생:', error);
        }
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
