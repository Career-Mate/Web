import { Outlet } from 'react-router-dom';
import Navbar from '../components/Menu/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
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
