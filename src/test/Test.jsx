import styled from 'styled-components';
import LogoutPopup from '../components/Popups/LogoutPopup/LogoutPopup';

const Test = () => {
    return <LogoutPopup></LogoutPopup>;
};
export default Test;

const LogoutPopup = styled.div`
    background-color: #797979;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100vw;
    height: 100vh;
    padding-left: 10px;
    padding-top: 10px;
`;
