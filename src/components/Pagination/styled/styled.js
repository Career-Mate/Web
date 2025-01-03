import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: #000000;
    font-size: 21px;
`;

export const List = styled.ul`
    list-style: none;
`;

export const ListItem = styled.li`
    float: left;
    height: 25px;
    display: flex;
    align-items: center;
    margin-left: 5px;
    justify-content: center;
`;

export const StyledLink = styled.a`
    height: 25px;
    line-height: 25px;
`;

export const Page = styled.div`
    margin: 0 5px;
    cursor: pointer;
    width: 25px;
    border-radius: 30px;
    border: solid 1px rgba(0, 0, 0, 0);
    text-align: center;

    &:hover {
        border: solid 1px #aaa;
    }
`;

export const Icon = styled.span`
    position: absolute;
    font-size: 20px;
    padding: 0 7px 0px;
`;

export const Move = styled.div`
    position: relative;
    cursor: pointer;
    margin: 0 10px;

    & a {
        width: 50px;
        display: block;
        z-index: 10;
    }

    & a:hover {
        text-decoration: underline;
    }

    &:first-child {
        text-align: right;

        &::before {
        content: "<";
        left: 0;
        }
    }

    &:last-child {
        &::after {
        content: ">";
        right: 0;
        }
    }
`;

export const Active = styled.div`
    font-weight: 700;
    color: #2A9D8F;
`;

const styles = {
    wrapper: Wrapper,
    move: Move,
    active: Active,
    page: Page,
    link: StyledLink,
};

export default styles;
