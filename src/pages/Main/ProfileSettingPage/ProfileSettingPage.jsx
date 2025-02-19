import InfoContainer from '../../../components/common/InfoContainer/InfoContainer';
import ProfileSetting from '../../../components/common/ProfileSetting/ProfileSetting';
import * as S from './styled/styled';
import { useProfile } from '../../../hooks/useProfile';
import { useSaveProfile } from '../../../apis/Profile/useProfileApi';
import useIsMobileScreen from '../../../hooks/useIsMobileScreen';

const ProfileSettingPage = () => {
    const { canSave, emailError, profile, handleProfileFieldChange } = useProfile();
    const mutation = useSaveProfile(profile);
    const isMobileScreen = useIsMobileScreen(430);

    const handleSave = async () => {
        if (!canSave) {
            alert('항목을 모두 입력해주세요!');
            return;
        }
        if (emailError) {
            alert('유효한 이메일 주소를 입력하세요.');
            return;
        }
        mutation.mutate(profile);
    };

    return !isMobileScreen ? (
        <S.ProfileContainer>
            <InfoContainer
                type={'titleTextOnly'}
                width={'619px'}
                height={'970px'}
                showTitleText={true}
                mainText={
                    <S.SettingsWrapper>
                        <S.SettingText>기본 정보를 입력해주세요!</S.SettingText>
                        <ProfileSetting
                            profile={profile}
                            buttonText={'프로필 설정하기'}
                            onSave={handleSave}
                            onChange={handleProfileFieldChange}
                            tabWidth={'476px'}
                        />
                    </S.SettingsWrapper>
                }
            />
        </S.ProfileContainer>
    ) : (
        <S.MobileContainer>
            <h3>프로필 설정하기</h3>
            <S.SettingsWrapper>
                <S.SettingText>기본 정보를 입력해주세요!</S.SettingText>
                <ProfileSetting
                    profile={profile}
                    buttonText={'프로필 설정하기'}
                    onSave={handleSave}
                    onChange={handleProfileFieldChange}
                />
            </S.SettingsWrapper>
        </S.MobileContainer>
    );
};
export default ProfileSettingPage;
