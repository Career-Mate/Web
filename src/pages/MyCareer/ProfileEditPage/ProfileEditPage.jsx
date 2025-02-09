import { useState } from 'react';
import UnderlineButton from '../../../components/common/Button/UnderlineButton/UnderlineButton';
import ProfileSetting from '../../../components/common/ProfileSetting/ProfileSetting';
import * as S from './styled/styled';
import AccountPopUp from '../../../components/common/Popups/AccountPopUp/AccountPopUp';
import { useProfileEdit, useDeleteAccount } from './useProfileEdit';

const ProfileEditPage = () => {
    const [isPopUp, setIsPopUp] = useState(false);
    const { profile, handleProfileFieldChange, handleSave } = useProfileEdit();
    const { isDeleting, handleDeleteUser } = useDeleteAccount();

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
