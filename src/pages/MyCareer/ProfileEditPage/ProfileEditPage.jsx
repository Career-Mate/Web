import { useState, useEffect } from 'react';
import UnderlineButton from '../../../components/common/Button/UnderlineButton/UnderlineButton';
import ProfileSetting from '../../../components/common/ProfileSetting/ProfileSetting';
import * as S from './styled/styled';
import AccountPopUp from '../../../components/common/Popups/AccountPopUp/AccountPopUp';
import { useProfile } from '../../../hooks/useProfile';
import { useAuthStore } from '../../../store/authStore';
import { useDeleteProfile, useEditProfile } from '../../../apis/Profile/useProfileApi';
import { useNavigate } from 'react-router-dom';

const ProfileEditPage = () => {
    const [isPopUp, setIsPopUp] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const { logout, user } = useAuthStore();
    const { canSave, emailError, profile, handleProfileFieldChange } = useProfile();
    const { mutate: deleteProfile } = useDeleteProfile();
    const { mutate: modifyProfile } = useEditProfile(profile);
    const navigate = useNavigate();

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
        modifyProfile(profile);
    };

    const handleDeleteUser = () => {
        setIsDeleting(true);
        //deleteProfile();
        setTimeout(() => {
            logout();
            navigate('/');
        }, 200);
    };

    return (
        <div
            style={{
                opacity: isDeleting ? 0 : 1,
                transition: 'opacity 0.2s ease-out',
            }}
        >
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
                {isPopUp && (
                    <AccountPopUp type={'회원 탈퇴'} onCancel={handlePopUpClose} onConfirm={handleDeleteUser} />
                )}
            </S.EditContainer>
        </div>
    );
};

export default ProfileEditPage;
