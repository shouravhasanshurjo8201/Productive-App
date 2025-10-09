import Error from "../../assets/App-Error.png";


const InvalidID = () => {
    return (
        <div className=" flex-1 text-center p-10">
           <div className="flex flex-col justify-center items-center">
            <img src={Error} alt="Logo-img" className="h-52 w-52 " />
            <p className="font-bold text-red-400 mt-5">Invalid ID or the app does not exist.</p>
           </div>
        </div>
    )
}

export default InvalidID