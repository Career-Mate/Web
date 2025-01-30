import { useNavigate } from 'react-router-dom';
import InfoContainer from '../../../components/common/InfoContainer/InfoContainer';
import ProfileSetting from '../../../components/common/ProfileSetting/ProfileSetting';
import * as S from './styled/styled';
import { profileEmptyData } from '../../../data/profileData';
import { useProfile } from '../../../hooks/useProfile';
import { useMutation } from '@tanstack/react-query';
import { saveProfile } from '../../../api/profileApi';

const ProfileSettingPage = () => {
    const navigate = useNavigate();
    const { canSave, emailError, profile, handleProfileFieldChange } = useProfile(profileEmptyData);

    const mutation = useMutation({
        mutationFn: saveProfile,
        onSuccess: () => {
            navigate('/profile/success');
        },
        onError: (error) => {
            alert('프로필 저장에 실패했습니다. 다시 시도해주세요.');
            console.log(error);
        },
    });

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
