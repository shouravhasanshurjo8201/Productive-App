import { useParams } from "react-router";
import { Toaster, toast } from 'react-hot-toast';
import downloads from "../../assets/icon-downloads.png";
import ratings from "../../assets/icon-ratings.png";
import review from "../../assets/icon-review.png";
import useAppsData from "../../Hooks/useAppsData";
import { useEffect, useState } from "react";

const DetailPage = () => {
    const { id } = useParams();
    const { jsonData } = useAppsData()
    const AppsData = jsonData.find(e => e.id === Number(id))
    const [isInstalled, setIsInstalled] = useState('');
    useEffect(() => {
        const existingList = JSON.parse(localStorage.getItem("Instal")) || [];
        const alreadyInstalled = existingList.some(p => p.id === AppsData?.id);
        if (alreadyInstalled) {
            setIsInstalled(true);
        }
    }, [AppsData?.id]);
    const handleInstallButton = () => {
        const existingList = JSON.parse(localStorage.getItem('Instal')) || [];
        const isDuplicate = existingList.some(p => p.id === AppsData.id)
        if (!isDuplicate) {
            const updatedList = [...existingList, AppsData];
            localStorage.setItem('Instal', JSON.stringify(updatedList));
            toast.success(`${AppsData?.title} ► Installed Successful`);
            setIsInstalled(true);
        } else {
            return toast.error(`${AppsData?.title} ► Already Installed`)
        }
    }
    return (
        <div className="container mx-auto">
            <div className="border-b-1 border-gray-200 md:grid grid-cols-12 py-5 gap-5 p-5">
                <div className="col-span-4 flex justify-center items-center"> <img src={ratings} alt="" className="h-60 w-80 rounded shadow" /></div>
                <div className="col-span-8">
                    <div className="border-b-1 border-gray-200 pb-5">
                        <h1 className="text-2xl font-bold">{AppsData?.title}</h1>
                        <p className="text-gray-600">Developed by <span className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">{AppsData?.companyName}</span></p>
                    </div>
                    <div>
                        <div className="flex justify-start items-center gap-8 py-4">
                            <div className="flex flex-col items-center justify-center ">
                                <img src={downloads} alt="" className="h-8 w-8" />
                                <h2 className="font-bold my-2">Downloads</h2>
                                <h1 className="text-2xl font-bold"><span>{AppsData?.downloads}</span>M</h1>
                            </div>
                            <div className="flex flex-col items-center justify-center ">
                                <img src={ratings} alt="" className="h-8 w-8" />
                                <h2 className="font-bold my-2">Average Ratings</h2>
                                <h1 className="text-2xl font-bold">{AppsData?.ratingAvg}</h1>
                            </div>
                            <div className="flex flex-col items-center justify-center ">
                                <img src={review} alt="" className="h-8 w-8" />
                                <h2 className="font-bold my-2">Total Reviews</h2>
                                <h1 className="text-2xl font-bold">{AppsData?.reviews}K</h1>
                            </div>
                        </div>
                        <div>
                            {isInstalled ? <button onClick={handleInstallButton} className="bg-[#00D390] p-2 rounded border-none text-white font-bold">Installed</button> : <button onClick={handleInstallButton} className="bg-[#00D390] p-2 rounded border-none text-white font-bold">Install Now ({AppsData?.size} MB)</button>}
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center font-bold text-4xl">
                <h1>200</h1>
            </div>
            <div className="mb-5 p-4">
                <h1 className="font-bold py-4 text-xl">Description</h1>
                <p>{AppsData?.description}</p>
            </div>
            <Toaster position="top-left" reverseOrder={true} />
        </div>
    )
}
export default DetailPage