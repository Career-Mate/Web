import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import HomePage from './pages/HomePage';
import RecommendMainPage from './pages/Recommend/RecommnedMainPage/RecommendMainPage';
import RecommendContentPage from './pages/Recommend/RecommendContentPage/RecommendContentPage';
import RecommendJobPage from './pages/Recommend/RecommendJobPage/RecommendJobPage';
// import JobDetailPage from './pages/Recommend/JobDetailPage/JobDetailPage';
import { userData as recommendContentUserData } from './pages/Recommend/RecommendContentPage/userData';
import recommendJobUserData from './pages/Recommend/RecommendJobPage/userData';
import Test from './test/Test';
import MainPage from './pages/Main/MainPage/MainPage';

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
                element: <HomePage />,
            },
            {
                path: 'recommend',
                element: <RecommendMainPage />,
            },
            {
                path: 'recommend/content',
                element: <RecommendContentPage user={recommendContentUserData} />,
            },
            {
                path: 'recommend/job',
                element: <RecommendJobPage user={recommendJobUserData} />,
            },
            // {
            //     path: 'recommend/detail',
            //     element: <JobDetailPage />,
            // },
            {
                path: 'mycareer',
                element: <HomePage />,
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
