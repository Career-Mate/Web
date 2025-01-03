import { useState } from "react";
import styled from "styled-components";

const SubMenu=()=>{
    const [activeButton, setActiveButton]=useState(0);

    const handleButtonClick=(flag)=>{
        setActiveButton(flag);
    }

    return(
        <Conatiner>
            <Button 
                $isActive={activeButton === 0} 
                onClick={() => handleButtonClick(0)}
            >
                프로필 수정
            </Button>
            <Button 
                $isActive={activeButton === 1} 
                onClick={() => handleButtonClick(1)}
            >
                커리어 정리 폼 확인 및 수정하기
            </Button>
            <Button 
                $isActive={activeButton === 2} 
                onClick={() => handleButtonClick(2)}
            >
                스크랩한 콘텐츠 및 공고 확인하기
            </Button>
            <Button 
                $isActive={activeButton === 3} 
                onClick={() => handleButtonClick(3)}
            >
                SMART 커리어 플래너
            </Button>
        </Conatiner>
    )
}

export default SubMenu;

const Conatiner=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
    width: 349px;
    height:268px;
    border: 1px solid #B9B9B9;
    border-left: none;
    border-radius:0 20px 20px 0;
    padding:16px 17px 16px 40px;
    gap:10px;
    box-sizing: border-box;
`

const Button=styled.button`
    width:264px;
    height:48px;
    border:none;
    border-radius:10px;
    background-color:${({$isActive})=>($isActive?"#CFEEE0":"white")};
    color:${({$isActive})=>($isActive?"#2A9D8F":"black")};
    font-size:16px;
    font-weight:${({$isActive})=>($isActive?"700":"normal")};;
    cursor: pointer;
`