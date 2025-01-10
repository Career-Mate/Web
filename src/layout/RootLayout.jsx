import { Outlet } from 'react-router-dom';
import Navbar from '../components/common/Menu/Navbar/Navbar.jsx';
import Footer from '../components/common/Footer/Footer';
import * as S from './styled/styled';

const RootLayout = () => {
    return (
        <S.RootLayoutContainer>
            <Navbar />
            <S.MainContent>
                <Outlet />
            </S.MainContent>
            <Footer />
        </S.RootLayoutContainer>
    );
};

export default RootLayout;
