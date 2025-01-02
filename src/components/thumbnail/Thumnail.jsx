import * as S from './styled/styled'
const Thumbnail = ({path})=>{
    return(
        <S.Wrapper>
            <S.StyledImg src={path}/>
        </S.Wrapper>
    )
}

export default Thumbnail;