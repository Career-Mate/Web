import * as S from './styled/styled.js';
import useIsMobileScreen from '../../../hooks/useIsMobileScreen.js';
const ProgressBar = ({ progression, onClickRectangle }) => {
    const isMobileScreen = useIsMobileScreen(431);

    const handleRectangleClick = (index) => {
        if (onClickRectangle) {
            onClickRectangle(index);
        }
    };
    return (
        <S.BarContainer>
            {isMobileScreen ? null : <S.Text>[진행률 {progression * 20}%]</S.Text>}
            <S.RectangleWrapper>
                {Array.from({ length: 5 }).map((_, i) => (
                    <S.Rectangle
                        $type={i}
                        key={i}
                        $status={i < progression ? 'done' : 'undone'}
                        onClick={() => handleRectangleClick(i)}
                    />
                ))}
            </S.RectangleWrapper>
        </S.BarContainer>
    );
};

export default ProgressBar;
