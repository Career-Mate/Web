import React from 'react';
import * as S from './styled/styled'; 

const InfoContainer = ({ children }) => {
    return (
        <S.InfoContainer> 
            <S.ContainerContent>{children}</S.ContainerContent>
        </S.InfoContainer>
    );
};

export default InfoContainer;
