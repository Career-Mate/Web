import * as S from '../styled/styled';
import pmThumbnail from '../../../../assets/Card/pm.png';
import designThumbnail from '../../../../assets/Card/design.png';
import frontThumbnail from '../../../../assets/Card/frontend.png';
import backThumbnail from '../../../../assets/Card/backend.png';
import defaultThumbnail from '../../../../assets/common/thumbnail.svg';
import scrapUncheckedIcon from '../../../../assets/common/scrap-uncheck.svg';
import scrapCheckedIcon from '../../../../assets/common/scrap-check.svg';
import useScrapStore from '../../../../store/useScrapStore';

const JobPostingCard = ({ id, companyName, deadline, contentName, jobType, onClick }) => {
    const { scrapJobs, addScrapJob, removeScrapJob } = useScrapStore();
    const isScrap = scrapJobs.some((job) => job.id === id);

    const handleClick = () => {
        if (isScrap) {
            removeScrapJob(id);
        } else {
            addScrapJob({ id, companyName, deadline, contentName, thumbnail, onClick });
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
        <S.CardContainer $type={false}>
            <S.CompanyName>{companyName}</S.CompanyName>
            <S.Thumbnail src={thumbnail} alt={contentName} $type={false} />
            <S.Line />
            <S.ContentWrapper>
                <S.Title $type={true} onClick={onClick}>
                    {contentName}
                </S.Title>
                <S.DeadlineWrapper>
                    <S.Deadline>{deadline}</S.Deadline>
                    <S.ScrapIcon
                        src={isScrap ? scrapCheckedIcon : scrapUncheckedIcon}
                        alt="스크랩 아이콘"
                        onClick={handleClick}
                    />
                </S.DeadlineWrapper>
            </S.ContentWrapper>
        </S.CardContainer>
    );
};

export default JobPostingCard;
