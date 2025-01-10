import styled from "styled-components";

export const NavbarContainer = styled.div`
    display: flex;
    flex-direction: column; 
    justify-self: center;
    width: 98%;
    height: 111px;
    position: relative;
`;

export const Container=styled.div`
    display: flex;
    justify-content: space-between;
    height: 100%;
    position: relative; 
`;

export const Bar = styled.div`
    display: flex;
    justify-content:space-between;
    align-self:flex-end;
    width: 70%;
`;

export const LogoWrapper = styled.div`
    display: flex;
    justify-content: left;
    align-items: flex-end;
    width:20%;
`;

export const Logo=styled.img`
    width: 100%;  
    cursor: pointer;
    object-fit: cover;
    clip-path: inset(20% 0 25% 0);
    position: relative;
    transform: translateY(25%); 
`;


export const TextWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Text = styled.div`
    font-size:16px;
    cursor: pointer; 
    display: flex;
    align-items: center; 
    justify-content: center;
    height:58px;
    padding:10px 20px;
    border-radius:10px 10px 0 0;
    box-sizing: border-box;
    font-weight:${({ $active }) => ($active ? " 700" : "normal")};
    color:${({ $active }) => ($active ? " #66CCAA" : "black")};
    border:${({ $active }) => ($active ? "3px solid #80CFB0" : "3px solid transparent")};`;

export const ButtonWrapper=styled.div`
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding:10px 0;
`;

export const GradientBorder = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px; 
    border-radius: 4px;
    background: linear-gradient(to right, #66CCAA, #A8D5BA);
`;
