import * as S from './styled/styled'
import check from "../../../assets/JobDetailPage/check.svg"

const JobDetailList = ({title = "", content}) => {
    return(
        <S.Container>
            <S.SectionTitle>{title}</S.SectionTitle>
            <S.ItemListWrapper>
                <S.Item><S.Check src = {check}/> {content}</S.Item>
            </S.ItemListWrapper>
        </S.Container>
    )
}

export default JobDetailList;