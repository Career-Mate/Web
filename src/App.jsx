import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import HomePage from './pages/HomePage';
import RecommendMainPage from './pages/Recommend/RecommnedMainPage/RecommendMainPage';
import Test from './test/Test';
import MainPage from './pages/Main/MainPage/MainPage';
import CareerSavePage from './pages/Career/CareerSavePage/CareerSavePage';
import CareerMainPage from './pages/Career/CareerMainPage/CareerMainPage';

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
