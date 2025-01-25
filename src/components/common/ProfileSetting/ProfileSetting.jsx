import ProfileInput from '../Input/ProfileInput';
import SelectDropInput from '../Input/SelectDropInput/SelectDropInput';
import * as S from './styled/styled';
import { academicStatus, educationalStatus, jobData } from '../../../data/profileData';
import SquareButton from '../Button/SquareButton/SquareButton';

const ProfileSetting = ({ buttonText, onSave, profile, onChange }) => {
    return (
        <S.SettingContainer>
            <S.InputWrapper>
                <ProfileInput
                    defaultValue={profile.name}
                    label={'이름'}
                    placeholder={'이름을 입력하세요'}
                    onChange={(e) => onChange('name', e.target.value)}
                />
                <SelectDropInput
                    label="학력"
                    width={'633px'}
                    errorMessage={'학력을'}
                    optionData={educationalStatus}
                    boxwidth={'121px'}
                    boxheight={'196px'}
                    value={profile.educationalStatus}
                    onChange={(value) => onChange('educationalStatus', value)}
                />
                <ProfileInput
                    defaultValue={profile.department}
                    label={'학과'}
                    placeholder={'학과'}
                    errorMessage={'학과를 입력해주세요!'}
                    onChange={(e) => onChange('department', e.target.value)}
                />
                <SelectDropInput
                    label="수료 상태"
                    width={'633px'}
                    errorMessage={'수료 상태를'}
                    optionData={academicStatus}
                    boxwidth={'89px'}
                    boxheight={'146px'}
                    value={profile.academicStatus}
                    onChange={(value) => onChange('academicStatus', value)}
                />
                <SelectDropInput
                    label="관심 직무"
                    width={'633px'}
                    errorMessage={'관심 직무를'}
                    optionData={jobData}
                    boxwidth={'220px'}
                    boxheight={'146px'}
                    value={profile.interestJob}
                    onChange={(value) => onChange('interestJob', value)}
                />
                <ProfileInput
                    defaultValue={profile.email}
                    label={'이메일'}
                    type="email"
                    placeholder={'이메일을 입력하세요'}
                    onChange={(e) => onChange('email', e.target.value)}
                />
            </S.InputWrapper>
            <SquareButton width={'375px'} height={'60px'} onClick={() => onSave(profile)}>
                {buttonText}
            </SquareButton>
        </S.SettingContainer>
    );
};

export default ProfileSetting;
