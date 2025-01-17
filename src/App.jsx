import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import HomePage from './pages/HomePage';
import RecommendMainPage from './pages/Recommend/RecommnedMainPage/RecommendMainPage';
import Test from './test/Test';

const router = createBrowserRouter([
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
