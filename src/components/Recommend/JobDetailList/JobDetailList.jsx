import * as S from './styled/styled'
import check from "../../assets/JobDetailPage/check.svg"

const JobDetailList = ({title = "", items = []}) => {
    return(
        <S.Container>
            <S.SectionTitle>{title}</S.SectionTitle>
            <S.ItemListWrapper>
                {items.map((item,idx)=>(
                    <S.Item key = {idx}><S.Check src = {check}/> {item.content}</S.Item>
                ))}
            </S.ItemListWrapper>
        </S.Container>
    )
}

export default JobDetailList;