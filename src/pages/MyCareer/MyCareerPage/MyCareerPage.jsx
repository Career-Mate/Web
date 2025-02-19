import * as S from './styled/styled';

import SubMenu from '../../../components/common/Menu/SubMenu/SubMenu';
import { Outlet } from 'react-router-dom';
import useIsMobileScreen from '../../../hooks/useIsMobileScreen';
import { useEffect } from 'react';

const MyCareerPage = () => {
    const isMobileScreen = useIsMobileScreen(430);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
