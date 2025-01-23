import { Routes, Route, useParams } from 'react-router-dom';
import RecommendContentPage from './RecommendContentPage/RecommendContentPage';
import RecommendJobPage from './RecommendJobPage/RecommendJobPage';
// import JobDetailPage from './JobDetailPage/JobDetailPage';
import { userData as recommendContentData } from '../../data/recommendContentData';
import recommendJobData from '../../data/recommendJobData';

const RecommendRouter = () => {
    const { op } = useParams();

    if (op === 'content') {
        return <RecommendContentPage user={recommendContentData} />;
    } else if (op === 'job') {
        return <RecommendJobPage user={recommendJobData} />;
    }
    // else if (op === 'detail') {
    //     return <JobDetailPage />;
    // }
};

export default RecommendRouter;
