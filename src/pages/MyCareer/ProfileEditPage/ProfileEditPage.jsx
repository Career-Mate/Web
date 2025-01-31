import { useState } from 'react';
import UnderlineButton from '../../../components/common/Button/UnderlineButton/UnderlineButton';
import ProfileSetting from '../../../components/common/ProfileSetting/ProfileSetting';
import * as S from './styled/styled';
import AccountPopUp from '../../../components/common/Popups/AccountPopUp/AccountPopUp';
import { profileInitialData } from '../../../data/profileData';
import { useProfile } from '../../../hooks/useProfile';
import { useMutation, useQuery } from '@tanstack/react-query';
import { getProfile, modifyProfile } from '../../../apis/profileApi';
import { useAuthStore } from '../../../store/authStore';

const ProfileEditPage = () => {
    const [isPopUp, setIsPopUp] = useState(false);
    const { fetchUser } = useAuthStore();
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['profile'],
        queryFn: getProfile,
        onSuccess: (data) => {
            fetchUser(data);
        },
    });
    const { canSave, emailError, profile, handleProfileFieldChange } = useProfile(profileInitialData);

    const mutation = useMutation({
        mutationFn: modifyProfile,
        onSuccess: () => {
            fetchUser(profile);
        },
        onError: (error) => {
            console.error(error);
        },
    });

    const handlePopUpOpen = () => {
        setIsPopUp(true);
    };

    const handlePopUpClose = () => {
        setIsPopUp(false);
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error: {error.message}</div>;
    }

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

    return (
        <S.EditContainer>
            <S.NoticeWrapper>
                <S.NoticeTitle>{profileInitialData.name} 님의 프로필</S.NoticeTitle>
                <S.NoticeDetail>{profileInitialData.name} 님의 정보를 수정해주세요!</S.NoticeDetail>
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
