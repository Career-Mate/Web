import { useState } from 'react';
import UnderlineButton from '../../../components/common/Button/UnderlineButton/UnderlineButton';
import ProfileSetting from '../../../components/common/ProfileSetting/ProfileSetting';
import * as S from './styled/styled';
import AccountPopUp from '../../../components/common/Popups/AccountPopUp/AccountPopUp';

const ProfileEditPage = () => {
    const userName = '김단아';
    const [isPopUp, setIsPopUp] = useState(false);

    const handlePopUpOpen = () => {
        setIsPopUp(true);
    };

    const handlePopUpClose = () => {
        setIsPopUp(false);
    };

    return (
        <S.EditContainer>
            <S.NoticeWrapper>
                <S.NoticeTitle>{userName} 님의 프로필</S.NoticeTitle>
                <S.NoticeDetail>{userName} 님의 정보를 수정해주세요!</S.NoticeDetail>
            </S.NoticeWrapper>
            <S.ContentWrapper>
                <ProfileSetting buttonText={'프로필 저장하기'} onClick={() => console.log('프로필 저장')} />
                <UnderlineButton fontSize={'16px'} onClick={handlePopUpOpen}>
                    회원 탈퇴
                </UnderlineButton>
            </S.ContentWrapper>
            {isPopUp && <AccountPopUp type={'회원 탈퇴'} onCancel={handlePopUpClose} />}
        </S.EditContainer>
    );
};

export default ProfileEditPage;
