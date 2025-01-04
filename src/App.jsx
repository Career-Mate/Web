import styled from "styled-components";
import SquareButton from "./components/Button/SquareButton/SquareButton";
import OvalButton from "./components/Button/OvalButton/OvalButton";

function App() {
    return (
        <Box>
            <SquareButton backgroundColor="deepgreen">deepgreen button</SquareButton>
            <SquareButton backgroundColor="green">green button</SquareButton>
            <SquareButton backgroundColor="lightgreen">lightgreen button</SquareButton>
            <SquareButton backgroundColor="grey">grey button</SquareButton>
            <OvalButton>버튼</OvalButton>
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

