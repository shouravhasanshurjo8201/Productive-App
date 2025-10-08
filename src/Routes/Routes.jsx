import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";
import Installation from "../Pages/Installation/Installation";
import MainLayout from "../Layouts/MainLayout";
import PageNotFound from "../Pages/Not Found/PageNotFound";
import ErrorPage from "../Pages/Not Found/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/Apps",
                element: <Apps />
            },
            {
                path: "/Installation",
                element: <Installation />
            },
            {
                path: "*",
                element: <PageNotFound />
            }
        ]
    }
])

export default router;