import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import HomePage from './pages/HomePage';
import Test from './test/Test';
import MainPage from './pages/Main/MainPage/MainPage';
import CareerSavePage from './pages/Career/CareerSavePage/CareerSavePage';

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
                path: 'career/save',
                element: <CareerSavePage />,
            },
            {
                path: 'announcement',
                element: <HomePage />,
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
