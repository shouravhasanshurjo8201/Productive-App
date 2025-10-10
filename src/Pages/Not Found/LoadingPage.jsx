import imgLogo from "../../assets/logo.png";

const LoadingPage = () => {
    return (
        <div className="flex flex-col items-center justify-center py-10">
            <p className="text-4xl mt-4 font-bold flex justify-center items-center"> Data  <img src={imgLogo} alt="Logo-img" className="h-12 w-12 mx-5 animate-spin rounded-3xl" />  Lading...</p>
        </div>
    )
}

export default LoadingPage;