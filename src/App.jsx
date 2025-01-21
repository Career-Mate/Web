import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import HomePage from './pages/HomePage';
import RecommendMainPage from './pages/Recommend/RecommnedMainPage/RecommendMainPage';
import Test from './test/Test';
import MainPage from './pages/Main/MainPage/MainPage';
import CareerNotePage from './pages/Career/CareerPage/CareerNotePage';
import CareerSavePage from './pages/Career/CareerSavePage/CareerSavePage';
import CareerMainPage from './pages/Career/CareerMainPage/CareerMainPage';
import ProfileSettingPage from './pages/Main/ProfileSettingPage/ProfileSettingPage';
import ProfileSuccessPage from './pages/Main/ProfileSuccessPage/ProfileSuccessPage';

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
                path: 'career/save',
                element: <CareerSavePage />,
            },
            {
                path: 'announcement',
                element: <RecommendMainPage />,
            },
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
