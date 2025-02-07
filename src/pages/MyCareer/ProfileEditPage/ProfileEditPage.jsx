import { useState } from 'react';
import UnderlineButton from '../../../components/common/Button/UnderlineButton/UnderlineButton';
import ProfileSetting from '../../../components/common/ProfileSetting/ProfileSetting';
import * as S from './styled/styled';
import AccountPopup from '../../../components/common/Popups/AccountPopup/AccountPopup';
import { profileInitialData } from '../../../data/profileData';
import { useProfile } from '../../../hooks/useProfile';

const ProfileEditPage = () => {
    const [isPopUp, setIsPopUp] = useState(false);
    const { canSave, profile, handleProfileChange, handleProfileFieldChange } = useProfile(profileInitialData); // useProfileEdit 사용

    const handlePopUpOpen = () => {
        setIsPopUp(true);
    };

    const handlePopUpClose = () => {
        setIsPopUp(false);
    };

    const handleSave = () => {
        if (canSave) {
            const updatedProfile = handleProfileChange();
            console.log(updatedProfile);
        } else {
            alert('항목을 모두 입력해주세요!');
        }
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
            {isPopUp && <AccountPopup type={'회원 탈퇴'} onCancel={handlePopUpClose} />}
        </S.EditContainer>
    );
};

export default ProfileEditPage;
