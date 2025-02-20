import { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import HomePage from './pages/HomePage';
import RecommendMainPage from './pages/Recommend/RecommnedMainPage/RecommendMainPage';
import RecommendPage from './pages/Recommend/RecommendPage/RecommendPage';
import JobDetailPage from './pages/Recommend/JobDetailPage/JobDetailPage';
import Test from './test/Test';
import LoginSuccessPage from './pages/Main/LoginSuccessPage/LoginSuccessPage';
import MainPage from './pages/Main/MainPage/MainPage';
import LoginPage from './pages/Main/LoginPage/LoginPage';
import CareerNotePage from './pages/Career/CareerPage/CareerNotePage';
import CareerSavePage from './pages/Career/CareerSavePage/CareerSavePage';
import CareerMainPage from './pages/Career/CareerMainPage/CareerMainPage';
import ProfileSettingPage from './pages/Main/ProfileSettingPage/ProfileSettingPage';
import ProfileSuccessPage from './pages/Main/ProfileSuccessPage/ProfileSuccessPage';
import MyCareerPage from './pages/MyCareer/MyCareerPage/MyCareerPage';
import ScrapPage from './pages/MyCareer/ScrapPage/ScrapPage';
import SmartPlannerPage from './pages/MyCareer/SmartPlannerPage/SmartPlannerPage';
import ProfileEditPage from './pages/MyCareer/ProfileEditPage/ProfileEditPage';

const router = createBrowserRouter([
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
                        path: ':tab',
                        element: <RecommendPage />,
                    },
                    {
                        path: 'detail/:id',
                        element: <JobDetailPage />,
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
                        path: 'saved-content',
                        element: <ScrapPage />,
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
    useEffect(() => {
        document.title = 'Career Mate';
    }, []);

    return <RouterProvider router={router} />;
}
export default App;
