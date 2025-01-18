import { SmartPlannerInitialData } from '../../hooks/useTemplateData';
import ProfileInput from '../common/Input/ProfileInput';
import CalendarInput from '../common/Input/CalendarInput/CalendarInput';
import TextTemplate from "../common/TextTemplate/TextTemplate"
import * as S from "./styled/styled"

const SmartPlanner = () => {
    return (
        <S.Container>
            <S.InputContainer>
                <ProfileInput label={'활동명'} placeholder={"활동명을 입력하세요"} />
                <CalendarInput label= {"목표 달성 기간"}/>
            </S.InputContainer>
            <TextTemplate initialData={SmartPlannerInitialData} />
        </S.Container>
    );
};

export default SmartPlanner;
