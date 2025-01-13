import logo from '../../../assets/common/cm-logo.svg';
// import InfoContainer from '../../../components/common/InfoContainer/InfoContainer';
import * as S from './styled/styled';

const CareerSavePage = () => {
    return (
        <S.CareerSavePageWrapper>
            <S.LogoWrapper>
                <img src={logo} alt="CM 로고" />
            </S.LogoWrapper>
            <S.InfoContainerWrapper>
                <h2>김단아 메이트님의 커리어가 저장되었습니다.</h2>
                <p>저장된 템플릿은 '나의 커리어'에서 확인과 수정이 가능해요!</p>
                <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginTop: '24px' }}>
                    <button>나의 커리어로 이동하기</button>
                    <button>메인화면으로 돌아가기</button>
                    <button>채용공고 추천받기</button>
                </div>
            </S.InfoContainerWrapper>
        </S.CareerSavePageWrapper>
    );
};

export default CareerSavePage;
