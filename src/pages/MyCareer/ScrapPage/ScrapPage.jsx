import * as S from './styled/styled';
import pin from '../../../assets/common/pin.svg';
import ScrapContent from './ScrapContent';
import ScrapJob from './ScrapJob';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';

const ScrapContentPage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [selectedTab, setSelectedTab] = useState(location.state?.selectedTab || 'job');

    return (
        <S.Container>
            <S.TitleContainer>
                <S.TitleWrapper isSelected={selectedTab === 'job'} onClick={() => setSelectedTab('job')}>
                    <S.PinIcon isSelected={selectedTab === 'job'} src={pin} alt="pin icon" />
                    <S.Title isSelected={selectedTab === 'job'}>
                        스크랩한 <S.Highlight>채용 공고</S.Highlight>
                    </S.Title>
                </S.TitleWrapper>

                <S.TitleWrapper isSelected={selectedTab === 'content'} onClick={() => setSelectedTab('content')}>
                    <S.PinIcon isSelected={selectedTab === 'content'} src={pin} alt="pin icon" />
                    <S.Title isSelected={selectedTab === 'content'}>
                        스크랩한 <S.Highlight>콘텐츠</S.Highlight>
                    </S.Title>
                </S.TitleWrapper>
            </S.TitleContainer>

            {selectedTab === 'content' ? (
                <ScrapContent onNavigate={() => navigate('/recommend/content')} />
            ) : (
                <ScrapJob onNavigate={() => navigate('/recommend/job')} prevPage={location.state?.page || 1} />
            )}
        </S.Container>
    );
};

export default ScrapContentPage;
