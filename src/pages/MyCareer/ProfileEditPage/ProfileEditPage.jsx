import { useEffect, useState } from 'react';
import UnderlineButton from '../../../components/common/Button/UnderlineButton/UnderlineButton';
import ProfileSetting from '../../../components/common/ProfileSetting/ProfileSetting';
import * as S from './styled/styled';
import AccountPopup from '../../../components/common/Popups/AccountPopup/AccountPopup';
import MobileAccountPopup from '../../../components/common/Popups/MobileAccountPopup/MobileAccountPopup';
import { useProfileEdit, useDeleteAccount } from './useProfileEdit';
import ProfilePopup from '../../../components/common/Popups/ProfilePopup/ProfilePopup';
import { useProfilePopup } from '../../../hooks/useProfile';
import useIsMobileScreen from '../../../hooks/useIsMobileScreen';
import { useAuthStore } from '../../../store/authStore';
import { useFetchProfile } from '../../../apis/Profile/useProfileApi';

const ProfileEditPage = () => {
    const [isPopUp, setIsPopUp] = useState(false);
    const { profile, handleProfileFieldChange, handleSave } = useProfileEdit();
    const { isDeleting, handleDeleteUser } = useDeleteAccount();
    const { showProfilePopup } = useProfilePopup();
    const isMobileScreen = useIsMobileScreen();

    const { data, error } = useFetchProfile();
    const { fetchUser, user } = useAuthStore();

    useEffect(() => {
        if (data) {
            fetchUser(data);
        }
    }, [data]);

    const handlePopUpOpen = () => {
        setIsPopUp(true);
    };

    const handlePopUpClose = () => {
        setIsPopUp(false);
    };

    return (
        <div
            style={{
                opacity: isDeleting ? 0 : 1,
                transition: 'opacity 0.3s ease-out',
            }}
        >
            <S.EditContainer>
                <S.NoticeWrapper>
                    <S.NoticeTitle>{user.name} 님의 프로필</S.NoticeTitle>
                    <S.NoticeDetail>{user.name} 님의 정보를 수정해주세요!</S.NoticeDetail>
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
                {isPopUp &&
                    (isMobileScreen ? (
                        <MobileAccountPopup
                            type={'회원 탈퇴'}
                            onCancel={handlePopUpClose}
                            onConfirm={handleDeleteUser}
                        />
                    ) : (
                        <AccountPopup type={'회원 탈퇴'} onCancel={handlePopUpClose} onConfirm={handleDeleteUser} />
                    ))}
            </S.EditContainer>
            {showProfilePopup && <ProfilePopup />}
        </div>
    );
};

export default ProfileEditPage;
