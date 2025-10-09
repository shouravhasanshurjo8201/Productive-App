import Error from "../../assets/App-Error.png";

const NotFound = () => {
    return (
        <div className=" flex flex-col items-center justify-center">
            <img src={Error} alt="Logo-img" className="h-52 w-52" />
            <p className="text-xl mt-4 font-bold">Apps Data Not Found</p>
        </div>
    )
}

export default NotFound;