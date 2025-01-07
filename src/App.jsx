import ProfileInput from './components/Input/ProfileInput';

function App() {
    return (
        <>
            <ProfileInput label="이름" placeholder="이름을 입력하세요" size="large" />
            <ProfileInput label="학교" placeholder="학교" size="small" />
        </>
    );
}
export default App;
