import ProfileInput from '../Input/ProfileInput';
import SelectDropInput from '../Input/SelectDropInput/SelectDropInput';
import * as S from './styled/styled';
import { academicStatus, educationalStatus, jobData } from '../../../hooks/useSelectDrop';
import SquareButton from '../Button/SquareButton/SquareButton';

const ProfileSetting = ({ onClick, buttonText }) => {
    return (
        <S.SettingContainer>
            <S.InputWrapper>
                <ProfileInput label={'이름'} placeholder={'이름을 입력하세요'} />
                <SelectDropInput
                    label="학력"
                    width={'633px'}
                    errorMessage={'학력을'}
                    optionData={educationalStatus}
                    boxwidth={'121px'}
                    boxheight={'196px'}
                />
                <ProfileInput label={'학과'} placeholder={'학과'} errorMessage={'학과를 입력해주세요!'} />
                <SelectDropInput
                    label="수료 상태"
                    width={'633px'}
                    errorMessage={'수료 상태를'}
                    optionData={academicStatus}
                    boxwidth={'89px'}
                    boxheight={'146px'}
                />
                <SelectDropInput
                    label="관심 직무"
                    width={'633px'}
                    errorMessage={'관심 직무를'}
                    optionData={jobData}
                    boxwidth={'220px'}
                    boxheight={'146px'}
                />
                <ProfileInput label={'이메일'} type="email" placeholder={'이메일을 입력하세요'} />
            </S.InputWrapper>
            <SquareButton width={'375px'} height={'60px'} onClick={onClick}>
                {buttonText}
            </SquareButton>
        </S.SettingContainer>
    );
};

export default ProfileSetting;
