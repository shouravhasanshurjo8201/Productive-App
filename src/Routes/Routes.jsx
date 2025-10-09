import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";
import Installation from "../Pages/Installation/Installation";
import MainLayout from "../Layouts/MainLayout";
import PageNotFound from "../Pages/Not Found/PageNotFound";
import ErrorPage from "../Pages/Not Found/ErrorPage";
import Loading from "../Pages/Not Found/Loading";
import DetailPage from "../Pages/Detail Page/DetailPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />,
                hydrateFallbackElement: <Loading></Loading>
            },
            {
                path: "/Apps",
                element: <Apps />,
                hydrateFallbackElement: <Loading></Loading>
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