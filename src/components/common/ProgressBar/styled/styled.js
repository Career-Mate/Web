import styled from 'styled-components'

export const BarContainer = styled.div`
    width: 390px;
    height: 45px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Text = styled.div`
    font-weight: 600;
    font-size: 16px;
    color: #66CCAA;
`
export const RectangleWrapper = styled.div`
    width: 390px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
` 
export const Rectangle = styled.div`
    width: 70px;
    height: 16px;
    background-color:${(props)=>( props.status === "done" ? '#66CCAA' : '#D9D9D9')};
    ${(props) => {
        switch (props.type) {
            case 0:
                return 'border-radius: 5px 0 0 5px;';
            case 4:
                return 'border-radius: 0 5px 5px 0;';
            default:
                return 'border-radius: 0;';
        }
    }}
`