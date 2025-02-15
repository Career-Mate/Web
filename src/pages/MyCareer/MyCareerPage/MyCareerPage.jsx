import * as S from './styled/styled';

import SubMenu from '../../../components/common/Menu/SubMenu/SubMenu';
import { Outlet } from 'react-router-dom';
import useIsMobileScreen from '../../../hooks/useIsMobileScreen';

const MyCareerPage = () => {
    const isMobileScreen = useIsMobileScreen(430);
    return (
        <S.PageContainer>
            {isMobileScreen ? null : (
                <S.SideContainer>
                    <SubMenu />
                </S.SideContainer>
            )}
            <S.MainContainer>
                <Outlet />
            </S.MainContainer>
        </S.PageContainer>
    );
};

export default MyCareerPage;
