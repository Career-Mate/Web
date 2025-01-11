import { useState } from 'react';
import * as S from './styled/styled.js'

const ProgressBar = ({progression})=>{
    return (
        <S.BarContainer>
            <S.Text>[진행률 {progression*20}%]</S.Text>
            <S.RectangleWrapper>
                {Array.from({length: 5}).map((_,i)=>(
                    
                    <S.Rectangle 
                        $type={i}
                        key = {i}
                        $status = {i<progression ? "done" : "undone"}
                    />
                ))}
            </S.RectangleWrapper>
        </S.BarContainer>
    )
}

export default ProgressBar;