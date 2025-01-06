import * as S from "../ContentCard/styled/styled"
import defaultThumbnail from '../../../assets/thumbnail.png';
import scrapUncheckedIcon from '../../../assets/scrap-uncheck.png';
import scrapCheckedIcon from '../../../assets/scrap-check.png';
import { useState } from "react";

const JobPostingCard=({ companyName, deadline, contentName, thumbnail, scrap })=>{
    const [isScrap, setIsScrap]=useState(scrap);

    const handleClick=()=>{
        setIsScrap(!isScrap);
    }
    
    return(
        <S.CardContainer>
            <S.CompanyName>{companyName}</S.CompanyName>
            <S.Thumbnail src={thumbnail || defaultThumbnail} alt={contentName}/>
            <S.Line />
            <S.TitleWrapper>
                <S.Title>{contentName}</S.Title>
                <S.DetailButton $type={false}>공고 보기 &gt;</S.DetailButton>
            </S.TitleWrapper>
            <S.DeadlineWrapper>
                <S.Deadline>{deadline}</S.Deadline>
                <S.ScrapIcon 
                    src={isScrap ? scrapCheckedIcon : scrapUncheckedIcon} 
                    alt="스크랩 아이콘"
                    onClick={handleClick}
                />
            </S.DeadlineWrapper>
        </S.CardContainer>
    )
}

export default JobPostingCard;

