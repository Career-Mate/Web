import { useState, useEffect } from 'react';
import UnderlineButton from '../../../components/common/Button/UnderlineButton/UnderlineButton';
import ProfileSetting from '../../../components/common/ProfileSetting/ProfileSetting';
import * as S from './styled/styled';
import AccountPopUp from '../../../components/common/Popups/AccountPopUp/AccountPopUp';
import { useProfile } from '../../../hooks/useProfile';
import { useAuthStore } from '../../../store/authStore';
import { useEditProfile, useFetchProfile } from '../../../apis/profile/useProfileApi';

const ProfileEditPage = () => {
    const [isPopUp, setIsPopUp] = useState(false);
    const { fetchUser } = useAuthStore();
    const { data, isLoading, isError, error } = useFetchProfile();
    const { canSave, emailError, profile, handleProfileFieldChange } = useProfile();

    useEffect(() => {
        if (data) {
            fetchUser(data);
        }
    }, [data]);

    const mutation = useEditProfile();

    const handlePopUpOpen = () => {
        setIsPopUp(true);
    };

    const handlePopUpClose = () => {
        setIsPopUp(false);
    };

    const handleSave = () => {
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

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <S.EditContainer>
            <S.NoticeWrapper>
                <S.NoticeTitle>{profile.name} 님의 프로필</S.NoticeTitle>
                <S.NoticeDetail>{profile.name} 님의 정보를 수정해주세요!</S.NoticeDetail>
            </S.NoticeWrapper>
            <S.ContentWrapper>
                <ProfileSetting
                    profile={profile}
                    buttonText={'프로필 저장하기'}
                    onSave={handleSave}
                    onChange={handleProfileFieldChange}
                />
                <UnderlineButton fontSize={'16px'} onClick={handlePopUpOpen}>
                    회원 탈퇴
                </UnderlineButton>
            </S.ContentWrapper>
            {isPopUp && <AccountPopUp type={'회원 탈퇴'} onCancel={handlePopUpClose} />}
        </S.EditContainer>
    );
};

export default ProfileEditPage;
