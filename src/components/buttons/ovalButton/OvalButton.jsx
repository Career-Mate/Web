import * as S from './styled/styled';

const OvalButton = ({backgroundColor,children}) =>{
    return (
        <S.Default backgroundColor= {backgroundColor}>{children}</S.Default>
    )
}

export default OvalButton;