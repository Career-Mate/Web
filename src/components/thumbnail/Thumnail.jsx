import * as S from './styled/styled'
const Thumbnail = ({width, height, path})=>{
    return(
        <S.Wrapper width = {width} height ={height}>
            <S.StyledImg src={path}/>
        </S.Wrapper>
    )
}

export default Thumbnail;