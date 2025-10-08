import { useNavigate } from "react-router";
import imgLogo from "../../assets/error-404.png";

const PageNotFound = () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };
    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <img src={imgLogo} alt="Logo-img" className="h-52 w-52" />
            <p className="text-xl mt-4 font-bold">Oops, page not found!</p>
            <p className="text-sm m-4">The page you are looking for is not available.</p>
            <button onClick={goBack} className="btn btn-primary">Go Back!</button>
        </div>
    )
    
}

export default PageNotFound;