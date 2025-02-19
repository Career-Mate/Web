import * as S from '../styled/styled';
import pmThumbnail from '../../../../assets/Card/pm.svg';
import designThumbnail from '../../../../assets/Card/designer.svg';
import frontThumbnail from '../../../../assets/Card/frontend.svg';
import backThumbnail from '../../../../assets/Card/backend.svg';
import defaultThumbnail from '../../../../assets/common/thumbnail.svg';
import scrapUncheckedIcon from '../../../../assets/common/scrap-uncheck.svg';
import scrapCheckedIcon from '../../../../assets/common/scrap-check.svg';
import { usePostScrapJob, useDeleteScrapJob } from '../../../../apis/Scrap/Job/JobScrapApi';

const JobPostingCard = ({ id, companyName, deadline, contentName, jobType, isScrapped, goToDetail }) => {
    const postScrap = usePostScrapJob();
    const deleteScrap = useDeleteScrapJob();

    const handleScrap = async (e) => {
        e.stopPropagation();

        if (isScrapped) {
            deleteScrap.mutate(id);
        } else {
            postScrap.mutate(id);
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
        <S.CardContainer $type={false} onClick={goToDetail}>
            <S.CompanyName>{companyName}</S.CompanyName>
            <S.Thumbnail src={thumbnail} alt={contentName} $type={false} />
            <S.Line />
            <S.ContentWrapper>
                <S.Title $type={true}>{contentName}</S.Title>
            </S.ContentWrapper>
            <S.DeadlineWrapper>
                <S.Deadline>{deadline}</S.Deadline>
                <S.ScrapIcon
                    src={isScrapped ? scrapCheckedIcon : scrapUncheckedIcon}
                    alt="스크랩 아이콘"
                    onClick={handleScrap}
                />
            </S.DeadlineWrapper>
        </S.CardContainer>
    );
};

export default JobPostingCard;
