import imgLogo from "../../assets/error-404.png";

const NotFound = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <img src={imgLogo} alt="Logo-img" className="h-52 w-52" />
            <p className="text-xl mt-4 font-bold">Apps Data Not Found</p>
        </div>
    )
}

export default NotFound;