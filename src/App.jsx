import styled from "styled-components";
import SquareButton from "./components/buttons/squareButton/SquareButton";
import OvalButton from "./components/buttons/ovalButton/OvalButton";
import LoginButton from "./components/buttons/loginButton/LoginButton";
function App() {
    return (
        <Box>
            <SquareButton backgroundColor="deepgreen">deepgreen button</SquareButton>
            <SquareButton backgroundColor="green">green button</SquareButton>
            <SquareButton backgroundColor="lightgreen">lightgreen button</SquareButton>
            <SquareButton backgroundColor="grey">버튼</SquareButton>
            <OvalButton>버튼</OvalButton>
            <LoginButton type="login"/>
            <LoginButton type = "login" status="unactive" />
            <LoginButton type="membership" />
            <LoginButton type="membership" status="unactive"/>
            
        </Box>
    )
        
}
export default App;

const Box = styled.div`
    background-color: #797979;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100vw;
    height: 100vh;
    padding-left: 10px;
    padding-top: 10px;
`