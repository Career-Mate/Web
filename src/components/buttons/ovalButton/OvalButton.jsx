import * as S from './styled/styled';

const OvalButton = ({width, height, backgroundColor,children}) =>{
    return (
        <S.Default width = {width} height = {height} backgroundColor= {backgroundColor}>{children}</S.Default>
    )
}

export default OvalButton;