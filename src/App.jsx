import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import HomePage from './pages/HomePage';
import RecommendMainPage from './pages/Recommend/RecommnedMainPage/RecommendMainPage';
import RecommendRouter from './pages/Recommend/RecommendRouter';
import Test from './test/Test';
import MainPage from './pages/Main/MainPage/MainPage';
import CareerNotePage from './pages/Career/CareerPage/CareerNotePage';
import CareerSavePage from './pages/Career/CareerSavePage/CareerSavePage';
import CareerMainPage from './pages/Career/CareerMainPage/CareerMainPage';
import MyCareerPage from './pages/MyCareer/MyCareerPage/MyCareerPage';
import SmartPlannerPage from './pages/MyCareer/SmartPlannerPage/SmartPlannerPage';

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
                element: <RecommendMainPage />,
            },
            {
                path: 'recommend/:op',
                element: <RecommendRouter />,
            },
            {
                path: 'mycareer',
                element: <MyCareerPage />,
                children: [
                    {
                        index: true,
                        element: <HomePage />,
                    },
                    {
                        path: 'career-form',
                        element: <CareerNotePage />,
                    },
                    {
                        path: 'saved-content',
                        element: <HomePage />,
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
