import * as S from './styled/styled';

import SubMenu from '../../../components/common/Menu/SubMenu/SubMenu';
import { Outlet } from 'react-router-dom';


const MyCareerPage = () => {
    return (
        <S.PageContainer>
            <S.SideContainer>
                <SubMenu/>
            </S.SideContainer>
            <S.MainContainer>
                <Outlet/>
            </S.MainContainer>
        </S.PageContainer>
    );
};

export default MyCareerPage;
