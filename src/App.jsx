import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import HomePage from './pages/HomePage';
import RecommendMainPage from './pages/Recommend/RecommnedMainPage/RecommendMainPage';
import Test from './test/Test';
import LoginProgressPage from './pages/Main/LoginProgressPage/LoginProgressPage';
import LoginSuccessPage from './pages/Main/LoginSuccessPage/LoginSuccessPage';
import MainPage from './pages/Main/MainPage/MainPage';
import LoginPage from './pages/Main/LoginPage/LoginPage';
import CareerNotePage from './pages/Career/CareerPage/CareerNotePage';
import CareerSavePage from './pages/Career/CareerSavePage/CareerSavePage';
import CareerMainPage from './pages/Career/CareerMainPage/CareerMainPage';

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
