import styled from "styled-components"
import defaultThumbnail from '../assets/thumbnail.png';
import scrapUncheckedIcon from '../assets/scrap-uncheck.png';
import scrapCheckedIcon from '../assets/scrap-check.png';
import { useState } from "react";

const ContentCard=({ companyName, deadline, contentName, thumbnail, scrap })=>{
    const [isScrap, setIsScrap]=useState(scrap);

    const handleClick=()=>{
        setIsScrap(!isScrap);
    }
    
    return(
        <CardContainer>
            <CompanyName>{companyName}</CompanyName>
            <Thumbnail src={thumbnail || defaultThumbnail} alt={contentName}/>
            <Content>
                <Title>{contentName}</Title>
                <DeadlineWrapper>
                    <Deadline>{deadline}</Deadline>
                    <ScrapIcon 
                        src={isScrap ? scrapCheckedIcon : scrapUncheckedIcon} 
                        alt="스크랩 아이콘"
                        onClick={handleClick}
                    />
                </DeadlineWrapper>
            </Content>
        </CardContainer>
    )
}

export default ContentCard;

const CardContainer = styled.div`
    display:flex;
    flex-direction:column;
    width: 100%;
    max-width: 416px;
    border: 1px solid #C4C4C4;
    border-radius: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 24px 26px;
    gap:10px;
    box-sizing: border-box;
    font-weight: 600;
    font-size: 20px;
`;

const Thumbnail = styled.img`
    width: 100%;
    height: 210px
    border-radius: 20px;
    object-fit: cover;
`;

const Content=styled.div`
    border-top: 2px dashed #C4C4C4;
    padding-top:20px;
`;

const Title = styled.div`
    margin-bottom: 8px;
    color: #333;
`;

const CompanyName = styled.div`
    color: #C4C4C4;
`;

const DeadlineWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 8px;
`;

const Deadline = styled.div`
    color: #FF0000;
`;

const ScrapIcon = styled.img`
    width: 24px;
    height: 24px;
    cursor: pointer;
    &:hover {
        opacity: 0.7;
    }
`;