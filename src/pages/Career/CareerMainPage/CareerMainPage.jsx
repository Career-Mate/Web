import searchIcon from '../../../assets/common/search-icon.svg';
import InfoContainer from '../../../components/common/InfoContainer/InfoContainer';
import * as S from './styled/styled';

const CareerMainPage = () => {
    return (
        <S.CareerMainPageWrapper>
            <S.SearchIcon>
                <img src={searchIcon} alt="돋보기 아이콘" />
            </S.SearchIcon>
            <InfoContainer>
                <h2>김단아 메이트에게</h2>
                <p>적합한 템플릿을 제공하기 위해 프로필 분석이 필요해요!</p>
                <button>프로필 불러오기</button>
            </InfoContainer>
        </S.CareerMainPageWrapper>
    );
};

export default CareerMainPage;
