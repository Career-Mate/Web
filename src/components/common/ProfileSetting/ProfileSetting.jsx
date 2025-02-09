import ProfileInput from '../Input/ProfileInput';
import SelectDropInput from '../Input/SelectDropInput/SelectDropInput';
import * as S from './styled/styled';
import { educationLevel, educationStatus, jobData } from '../../../utils/Profile/ProfileMapper';
import SquareButton from '../Button/SquareButton/SquareButton';

const ProfileSetting = ({ buttonText, onSave, profile, onChange }) => {
    return (
        <S.SettingContainer>
            <S.InputWrapper>
                <ProfileInput
                    defaultValue={profile.name}
                    label={'이름'}
                    placeholder={'이름을 입력하세요'}
                    onBlur={(value) => onChange('name', value)}
                />
                <SelectDropInput
                    label="학력"
                    width={'633px'}
                    errorMessage={'학력을'}
                    optionData={educationLevel.map((item) => item.label)}
                    boxwidth={'121px'}
                    boxheight={'196px'}
                    value={profile.educationLevel}
                    onChange={(value) => onChange('educationLevel', value)}
                />
                <ProfileInput
                    defaultValue={profile.major}
                    label={'학과'}
                    placeholder={'학과'}
                    errorMessage={'학과를 입력해주세요!'}
                    onBlur={(value) => onChange('major', value)}
                />
                <SelectDropInput
                    label="수료 상태"
                    width={'633px'}
                    errorMessage={'수료 상태를'}
                    optionData={educationStatus.map((item) => item.label)}
                    boxwidth={'89px'}
                    boxheight={'146px'}
                    value={profile.educationStatus}
                    onChange={(value) => onChange('educationStatus', value)}
                />
                <SelectDropInput
                    label="관심 직무"
                    width={'633px'}
                    errorMessage={'관심 직무를'}
                    optionData={jobData.map((item) => item.label)}
                    boxwidth={'220px'}
                    boxheight={'146px'}
                    value={profile.job}
                    onChange={(value) => onChange('job', value)}
                />
                <ProfileInput
                    defaultValue={profile.email}
                    label={'이메일'}
                    type="email"
                    placeholder={'이메일을 입력하세요'}
                    onBlur={(value) => onChange('email', value)}
                />
            </S.InputWrapper>
            <SquareButton width={'375px'} height={'60px'} onClick={() => onSave(profile)}>
                {buttonText}
            </SquareButton>
        </S.SettingContainer>
    );
};

export default ProfileSetting;
