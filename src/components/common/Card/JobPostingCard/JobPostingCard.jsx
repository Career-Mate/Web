import * as S from '../styled/styled';
import pmThumbnail from '../../../../assets/Card/pm.png';
import designThumbnail from '../../../../assets/Card/design.png';
import frontThumbnail from '../../../../assets/Card/frontend.png';
import backThumbnail from '../../../../assets/Card/backend.png';
import defaultThumbnail from '../../../../assets/common/thumbnail.svg';
import scrapUncheckedIcon from '../../../../assets/common/scrap-uncheck.svg';
import scrapCheckedIcon from '../../../../assets/common/scrap-check.svg';
import { postScrapJob, deleteScrapJob } from '../../../../apis/Scrap/Job/JobScrapApi';
import { useState, useEffect } from 'react';

const JobPostingCard = ({ id, companyName, deadline, contentName, jobType, onClick, isScrapped, onScrapUpdate }) => {
    const [isScrap, setIsScrap] = useState(isScrapped);

    useEffect(() => {
        setIsScrap(isScrapped);
    }, [isScrapped]);

    const handleScrap = async () => {
        try {
            if (isScrap) {
                await deleteScrapJob(id);
                onScrapUpdate(id, false);
                console.log(`스크랩 해제됨 (id: ${id})`);
            } else {
                const result = await postScrapJob(id);
                onScrapUpdate(id, true);
                console.log(`스크랩 성공 (id: ${id}):`, result);
            }
        } catch (error) {
            console.error(`스크랩 요청 실패 (id: ${id}):`, error);
        }
    };

    const getThumbnailByJob = (jobType) => {
        switch (jobType) {
            case 'PM(Product/Project Manager)':
                return pmThumbnail;
            case 'Designer':
                return designThumbnail;
            case '프론트엔드 개발자':
                return frontThumbnail;
            case '백엔드 개발자':
                return backThumbnail;
            default:
                return defaultThumbnail;
        }
    };

    const thumbnail = getThumbnailByJob(jobType);

    return (
        <S.CardContainer $width={'400px'} $type={false}>
            <S.CompanyName $type={false}>{companyName}</S.CompanyName>
            <S.Thumbnail src={thumbnail} alt={contentName} $width={'348px'} $height={'200px'} $type={false} />
            <S.Line $type={false} />
            <S.ContentWrapper $type={false}>
                <S.Title $type={false} onClick={onClick}>
                    {contentName}
                </S.Title>

                <S.DeadlineWrapper $type={false}>
                    <S.Deadline>{deadline}</S.Deadline>
                    <S.ScrapIcon
                        src={isScrap ? scrapCheckedIcon : scrapUncheckedIcon}
                        alt="스크랩 아이콘"
                        onClick={handleScrap}
                    />
                </S.DeadlineWrapper>
            </S.ContentWrapper>
        </S.CardContainer>
    );
};

export default JobPostingCard;
