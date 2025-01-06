import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import HomePage from "./pages/HomePage";

const router=createBrowserRouter([
    {
        path: '/',
        element:<RootLayout/>,
        children: [
            {
                index:true,
                element: <HomePage/>
            },
            {
                path:'career',
                element: <HomePage/>
            },
            {
                path:'announcement',
                element: <HomePage/>
            },
            {
                path:'mycareer',
                element: <HomePage/>
            },
        ]
    }
])

function App() {
    return (
        <>
<<<<<<< HEAD
            <RouterProvider router={router}/>
        </>
    );
=======
        </>
    )
>>>>>>> a81adf9a1ffbcfc152825dc97b9be2580d1db953
}
export default App;