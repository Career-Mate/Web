import JobPostingCard from '../../../components/common/Card/JobPostingCard/JobPostingCard';
import { useGetScrapJobs } from '../../../apis/Scrap/Job/JobScrapApi';
import UnderlineButton from '../../../components/common/Button/UnderlineButton/UnderlineButton';
import Pagination from '../../../components/common/Pagination/Pagination';
import JobPostingCardSkeleton from '../../../components/SkeletonUi/JobPostingCardSkeleton/JobPostingCardSkeleton';
import * as S from './styled/styled';
import { useAuthStore } from '../../../store/authStore';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ScrapJob = ({ onNavigate, prevPage }) => {
    const { user } = useAuthStore();
    const navigate = useNavigate();

    const { data: scrapJobs, isLoading, isError } = useGetScrapJobs();
    const itemsPerPage = 6;

    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(prevPage ?? 1);

    useEffect(() => {
        if (prevPage) {
            setCurrentPage(prevPage);
        }
    }, [prevPage]);

    useEffect(() => {
        if (scrapJobs?.recruitScrapThumbNailInfoDTOList) {
            setTotalPages(Math.max(1, Math.ceil(scrapJobs.recruitScrapThumbNailInfoDTOList.length / itemsPerPage)));
        }
    }, [scrapJobs]);

    useEffect(() => {
        if (currentPage > totalPages) {
            setCurrentPage(totalPages);
        }
    }, [totalPages]);

    const displayedJobs =
        scrapJobs?.recruitScrapThumbNailInfoDTOList?.slice(
            (currentPage - 1) * itemsPerPage,
            currentPage * itemsPerPage,
        ) || [];

    useEffect(() => {
        if (displayedJobs.length === 0 && currentPage > 1) {
            setCurrentPage((prev) => Math.max(1, prev - 1));
        }
    }, [scrapJobs, currentPage]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPage]);

    const numbers = Array.from({ length: 6 }, (_, i) => i + 1);

    if (isLoading) {
        return (
            <S.CardWrapper>
                {numbers.map((number) => (
                    <JobPostingCardSkeleton key={number} />
                ))}
            </S.CardWrapper>
        );
    }
    if (isError) return <div>error</div>;

    return (
        <S.ScrapContainer>
            {displayedJobs.length > 0 ? (
                <S.CardWrapper>
                    {isLoading
                        ? numbers.map((number) => <JobPostingCardSkeleton key={number} />)
                        : displayedJobs.map((job) => (
                              <JobPostingCard
                                  key={job.recruitId}
                                  id={job.recruitId}
                                  companyName={job.companyName}
                                  deadline={job.deadLine}
                                  contentName={job.title}
                                  jobType={user.job}
                                  goToDetail={() =>
                                      navigate(`/recommend/detail/${job.recruitId}`, {
                                          state: { page: currentPage, from: 'scrap' },
                                      })
                                  }
                                  isScrapped={job.isScrapped}
                              />
                          ))}
                </S.CardWrapper>
            ) : (
                <S.MessageWrapper>
                    <S.EmptyMessage>스크랩한 채용 공고가 없어요!</S.EmptyMessage>
                </S.MessageWrapper>
            )}
            <S.ButtonContainer>
                <S.ButtonWrapper>
                    <S.PaginationWrapper>
                        <Pagination
                            totalPages={totalPages}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                            isHidden={displayedJobs.length === 0}
                        />
                    </S.PaginationWrapper>
                    <UnderlineButton fontSize={'14px'} onClick={onNavigate} color={'#646F7C'}>
                        더 많은 채용 공고 보러 가기&gt;
                    </UnderlineButton>
                </S.ButtonWrapper>
            </S.ButtonContainer>
        </S.ScrapContainer>
    );
};

export default ScrapJob;
