import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import HomePage from './pages/HomePage';
import Test from './test/Test';
import LoginProgressPage from './pages/Main/LoginProgressPage/LoginProgressPage';
import LoginSuccessPage from './pages/Main/LoginSuccessPage/LoginSuccessPage';
import MainPage from './pages/Main/MainPage/MainPage';
import LoginPage from './pages/Main/LoginPage/LoginPage';

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
                path: 'career',
                element: <HomePage />,
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
