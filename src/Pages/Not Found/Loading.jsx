import imgLogo from "../../assets/logo.png";

const Loading = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <p className="text-4xl mt-4 font-bold flex justify-center items-center"> Page  <img src={imgLogo} alt="Logo-img" className="h-12 w-12" />  Lading...</p>
        </div>
    )
}

export default Loading