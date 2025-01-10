import * as S from './styled/styled';

const Footer = () => {
    return (
        <S.FooterContainer>
            <S.ContentWrapper>
                <S.Text>(주) University Makeus Challenge</S.Text>
                <S.Section>
                    <S.Row>
                        <span>대표: 김단아</span>
                        <S.Divider>|</S.Divider>
                        <span>사업자등록번호: 110-34-5678</span>
                        <S.Divider>|</S.Divider>
                        <span>개인정보관리자: 누구야</span>
                    </S.Row>
                    <S.Row>
                        <span>고객센터: 1234-5678 (평일 09:00 ~ 18:00 주말 휴무)</span>
                        <S.Divider>|</S.Divider>
                        <span>Fax: 02-123-1234</span>
                        <S.Divider>|</S.Divider>
                        <span>Email: helpcareer1010@careermate.co.kr</span>
                    </S.Row>
                    <S.Row>
                        <span>주소: 서울시 어디구 말하는대로 10길 14, 3층</span>
                        <S.Divider>|</S.Divider>
                        <span>통신판매업신고: 제2025-서울구로-0000호</span>
                    </S.Row>
                </S.Section>
                <S.Copyright>@CareerMate. All rights reserved.</S.Copyright>
            </S.ContentWrapper>
        </S.FooterContainer>
    );
};

export default Footer;
