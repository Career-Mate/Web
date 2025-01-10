import styled from 'styled-components';

export const InputContainer = styled.div`
    width: ${({ $width }) => $width};
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const Label = styled.div`
    font-size: 18px;
    font-weight: 500;
`;

export const SelectorWrapper = styled.div`
    position: relative;
    width: 100%;
`;

export const Selector = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: inherit;
    border: 1px solid #c4c4c4;
    border-radius: 10px;
    padding: 20px 29px;
    box-sizing: border-box;
    box-shadow: ${({ $isOpen }) => ($isOpen ? '0px 0px 5px #71B6FF' : 'none')};
`;

export const Text = styled.div`
    margin: 0;
    padding: 0;
    color: #c4c4c4;
    font-weight: 400;
    font-size: 16px;
`;

export const DropButtonWrapper = styled.div`
    width: 8%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    cursor: pointer;
`;

export const DropButton = styled.img`
    width: 16px;
    height: 10px;
    box-sizing: border-box;
`;

export const OptionContainer = styled.div`
    width: ${({ $width }) => $width};
    height: ${({ $height }) => `calc(${$height} - 10px)`};
    border-radius: 10px;
    box-sizing: border-box;
    background-color: white;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
    position: absolute;
    top: calc(100% + 8px);
    right: 0;

    .triangle {
        position: absolute;
        top: -26px;
        right: 23px;
        width: 0px;
        height: 0px;
        border-bottom: 26px solid lightgray;
        border-left: 14.5px solid transparent;
        border-right: 14.5px solid transparent;
        filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.15));
        z-index: 5;
    }

    .triangle-white {
        position: absolute;
        top: -24px;
        right: 23px;
        width: 0px;
        height: 0px;
        border-bottom: 26px solid white;
        border-left: 14.5px solid transparent;
        border-right: 14.5px solid transparent;
        z-index: 6;
    }
`;

export const OptionWrapper = styled.div`
    width: ${({ $width }) => $width};
    height: auto;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 18px;
    gap: 2px;
    background-color: white;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 7;
`;

export const Option = styled.div`
    width: 100%;
    padding: 3px 5px;
    box-sizing: border-box;
    cursor: pointer;
    text-align: center;
    font-size: 12px;
    display: flex;
    align-items: center; /* 옵션 텍스트의 정렬을 맞춤 */
    justify-content: center; /* 옵션 텍스트의 정렬을 맞춤 */
    background-color: ${({ $selected }) => ($selected ? '#EDEDED' : 'inherit')};
    z-index: 10;
`;

export const WarningText = styled.p`
    margin: 0;
    padding: 0;
    color: #ff5353;
    font-weight: 400;
    font-size: 14px;
    z-index: 1;
    display: ${({ $isTouched, $isOpen, $isSelected }) => ($isTouched && !$isOpen && !$isSelected ? 'flex' : 'hidden')};
`;
