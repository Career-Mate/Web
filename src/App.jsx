import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import HomePage from './pages/HomePage';
import Test from './test/Test';
import LoginProgressPage from './pages/Main/LoginProgressPage/LoginProgressPage';
import LoginSuccessPage from './pages/Main/LoginSuccessPage/LoginSuccessPage';

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
                element: <HomePage />,
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
                path: 'login-success',
                element: <LoginSuccessPage />,
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
