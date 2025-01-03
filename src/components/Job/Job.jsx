import * as S from "./styled/styled"

const Job = ({type})=>{
    return(
        <S.Container type = {type}>
            {type === "backend" ? "백엔드 개발자(Node js.)":"프론트엔드 개발자(React)"}
        </S.Container>
    )
}

export default Job;