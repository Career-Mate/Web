import styled from 'styled-components'

export const BarContainer = styled.div`
    width: 248px;
    height: 39px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: end;
`
export const Text = styled.div`
    font-weight: 600;
    font-size: 16px;
    color: #66CCAA;
`
export const RectangleWrapper = styled.div`
    width: 248px;
    display: flex;
    flex-direction: row;
    gap: 12px;
` 
export const Rectangle = styled.div`
    width: 40px;
    height: 10px;
    background-color:${(props)=>( props.$status === "done" ? '#66CCAA' : '#D9D9D9')};
    ${(props) => {
        switch (props.$type) {
            case 0:
                return 'border-radius: 5px 0 0 5px;';
            case 4:
                return 'border-radius: 0 5px 5px 0;';
            default:
                return 'border-radius: 0;';
        }
    }}
`