import { useRouteError } from "react-router";
import imgLogo from "../../assets/error-404.png";


const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <img src={imgLogo} alt="Logo-img" className="h-52 w-52" />
            <p className="text-2xl mt-4 font-bold text-red-400 underline">{error.message}</p>
        </div>
    )
}

export default ErrorPage