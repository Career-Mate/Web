import styled from 'styled-components';

export const NavbarContainer = styled.div`
    display: flex;
    margin-top: 20px;
    padding-left: 10px;
    padding-right: 10px;
    box-sizing: border-box;
    justify-self: center;
    justify-content: space-between;
    width: 100%;
    height: 60px;
    position: relative;
`;

export const LogoWrapper = styled.div`
    display: flex;
    justify-content: left;
    align-items: flex-end;
    height: 105%;
`;

export const Logo = styled.img`
    width: 100%;
    max-height: 80px;
    object-fit: cover;
    position: relative;
`;

export const MenuBtn = styled.div`
    width: 31px;
    display: flex;
    justify-content: left;
    align-items: center;
    margin-right: 8px;
    img {
        width: 100%;
    }
`;

export const ToggleContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 60%;
    z-index: 5;
    background-color: rgba(206, 236, 218, 1);
    box-shadow: -3px 0px 10.7px 0px rgba(0, 0, 0, 0.25);

    box-sizing: border-box;
    right: -100%;
    top: 0;
    position: fixed;
    transition: 0.5s ease;
    &.open {
        right: 0;
        transition: 0.5s ease;
    }
`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 26px;
    background-color: white;
    img {
        margin: 15px;
        margin-left: auto;
        width: 19px;
    }
`;

export const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 103px;
`;

export const HeaderButton = styled.div`
    display: flex;
    align-items: center;
    height: 30px;
    span {
        font-size: 16px;
        font-weight: 700;
    }
    img {
        margin-left: 7px;
    }
`;

export const Name = styled.div`
    font-size: 13px;
    b {
        font-size: 16px;
        font-weight: 600;
    }
`;

export const MenuWrapper = styled.div`
    border-top: 1px solid rgba(102, 204, 170, 1);
    background: rgba(206, 236, 218, 1);
    flex-grow: 1;
`;

export const Option = styled.div`
    cursor: pointer;
    height: 50px;
    display: flex;
    align-items: center;
    gap: 10px;
    padding-left: 26px;

    background-color: ${({ $active }) => ($active ? ' white' : 'inherit')};

    img {
        width: 24px;
    }
    span {
        font-size: 14px;
        font-weight: 500;
    }
`;

export const Drop = styled.img`
    cursor: pointer;
    margin-right: 26px;
    margin-left: auto;
    height: 7px;
`;

export const AccountOption = styled.div`
    cursor: pointer;
    height: 40px;
    display: flex;
    align-items: center;
    padding-right: 26px;
    background-color: white;
    span {
        margin-left: auto;
        font-size: 12px;
    }
`;

export const Logout = styled.div`
    cursor: pointer;
    margin: 15px;
    margin-bottom: 20px;
    margin-left: auto;
    font-weight: 400;
    font-size: 10px;
    text-decoration-line: underline;
`;

export const GradientBorder = styled.div`
    position: absolute;
    bottom: 0;
    left: 20;
    width: calc(100% - 20px);
    height: 4px;
    box-sizing: border-box;
    border-radius: 4px;
    background: linear-gradient(to right, #66ccaa, #a8d5ba);
`;
