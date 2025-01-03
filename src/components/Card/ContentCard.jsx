import * as S from "./styled/styled.js"
import defaultThumbnail from '../../assets/thumbnail.png';
import scrapUncheckedIcon from '../../assets/scrap-uncheck.png';
import scrapCheckedIcon from '../../assets/scrap-check.png';
import { useState } from "react";

const ContentCard=({ companyName, deadline, contentName, thumbnail, scrap })=>{
    const [isScrap, setIsScrap]=useState(scrap);

    const handleClick=()=>{
        setIsScrap(!isScrap);
    }
    
    return(
        <S.CardContainer>
            <S.CompanyName>{companyName}</S.CompanyName>
            <S.Thumbnail src={thumbnail || defaultThumbnail} alt={contentName}/>
            <S.Content>
                <S.Title>{contentName}</S.Title>
                <S.DeadlineWrapper>
                    <S.Deadline>{deadline}</S.Deadline>
                    <S.ScrapIcon 
                        src={isScrap ? scrapCheckedIcon : scrapUncheckedIcon} 
                        alt="스크랩 아이콘"
                        onClick={handleClick}
                    />
                </S.DeadlineWrapper>
            </S.Content>
        </S.CardContainer>
    )
}

export default ContentCard;

