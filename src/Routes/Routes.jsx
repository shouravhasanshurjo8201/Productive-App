import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";
import Installation from "../Pages/Installation/Installation";
import MainLayout from "../Layouts/MainLayout";
import PageNotFound from "../Pages/Not Found/PageNotFound";
import ErrorPage from "../Pages/Not Found/ErrorPage";
import DetailPage from "../Pages/Detail Page/DetailPage";
import LoadingPage from "../Pages/Not Found/LoadingPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />,
                hydrateFallbackElement: <LoadingPage></LoadingPage>
            },
            {
                path: "/Apps",
                element: <Apps />,
                hydrateFallbackElement: <LoadingPage></LoadingPage>
            },
            {
                path: "/Installation",
                element: <Installation />
            },
            {
                path: "/Apps/:id",
                element: <DetailPage />
            },
            {
                path: "*",
                element: <PageNotFound />
            }
        ]
    }
])

export default router;