import Job from "./components/job/Job";
import styled from "styled-components";

function App() {
    return (
        <Box>
            <Job type="backend"/>
            <Job type="frontend"/>
            <Job/>
        </Box>

    );
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