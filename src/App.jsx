import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import HomePage from './pages/HomePage';
import RecommendMainPage from './pages/Recommend/RecommnedMainPage/RecommendMainPage';
import RecommendContentPage from './pages/Recommend/RecommnedMainPage/RecommendMainPage';
import RecommendJobPage from './pages/Recommend/RecommendJobPage/RecommendJobPage';
import JobDetailPage from './pages/Recommend/JobDetailPage/JobDetailPage';
import { userData as recommendContentData } from './data/recommendContentData';
import recommendJobData from './data/recommendJobData';
import { data as initialData } from './data/JobDetailMockData';
import Test from './test/Test';
import LoginProgressPage from './pages/Main/LoginProgressPage/LoginProgressPage';
import LoginSuccessPage from './pages/Main/LoginSuccessPage/LoginSuccessPage';
import MainPage from './pages/Main/MainPage/MainPage';
import LoginPage from './pages/Main/LoginPage/LoginPage';
import CareerNotePage from './pages/Career/CareerPage/CareerNotePage';
import CareerSavePage from './pages/Career/CareerSavePage/CareerSavePage';
import CareerMainPage from './pages/Career/CareerMainPage/CareerMainPage';
import ProfileSettingPage from './pages/Main/ProfileSettingPage/ProfileSettingPage';
import ProfileSuccessPage from './pages/Main/ProfileSuccessPage/ProfileSuccessPage';
import MyCareerPage from './pages/MyCareer/MyCareerPage/MyCareerPage';
import ScrapContentPage from './pages/MyCareer/ScrapContentPage/ScrapContentPage';
import SmartPlannerPage from './pages/MyCareer/SmartPlannerPage/SmartPlannerPage';
import ProfileEditPage from './pages/MyCareer/ProfileEditPage/ProfileEditPage';

const router = createBrowserRouter([
    {
        path: import.meta.env.VITE_OAUTH_REDIRECT_ENDPOINT,
        element: <LoginProgressPage />,
    },
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <MainPage />,
            },
            {
                path: 'login',
                children: [
                    {
                        index: true,
                        element: <LoginPage />,
                    },
                    {
                        path: 'success',
                        element: <LoginSuccessPage />,
                    },
                ],
            },
            {
                path: 'profile',
                element: <ProfileSettingPage />,
            },
            {
                path: 'profile/success',
                element: <ProfileSuccessPage />,
            },
            {
                path: 'career',
                element: <CareerMainPage />,
            },
            {
                path: 'career/note',
                element: <CareerNotePage />,
            },
            {
                path: 'career/success',
                element: <CareerSavePage />,
            },
            {
                path: 'recommend',
                children: [
                    {
                        index: true,
                        element: <RecommendMainPage />,
                    },
                    {
                        path: 'content',
                        element: <RecommendContentPage user={recommendContentData} />,
                    },
                    {
                        path: 'job',
                        element: <RecommendJobPage user={recommendJobData} />,
                    },
                    {
                        path: 'detail',
                        element: <JobDetailPage data={initialData} />,
                    },
                ],
            },
            {
                path: 'mycareer',
                element: <MyCareerPage />,
                children: [
                    {
                        index: true,
                        element: <ProfileEditPage />,
                    },
                    {
                        path: 'career-form',
                        element: <CareerNotePage />,
                    },
                    {
                        path: 'saved-content',
                        element: <ScrapContentPage />,
                    },
                    {
                        path: 'smart-planner',
                        element: <SmartPlannerPage />,
                    },
                ],
            },
            {
                path: 'test',
                element: <Test />,
            },
        ],
    },
]);

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}
export default App;
