import { Toaster, toast } from 'react-hot-toast';
import downloads from "../../assets/icon-downloads.png";
import ratings from "../../assets/icon-ratings.png";
import review from "../../assets/icon-review.png";

const InstalledApps = ({ app }) => { 
    const handleUninstallButton = () => {
        const existingList = JSON.parse(localStorage.getItem("Instal"))
        const updatedList = existingList.filter(p => p.id !== app.id);
        localStorage.setItem("Instal", JSON.stringify(updatedList));
        toast.success(`${app?.title} ► Uninstall Successful`);
        window.location.reload();
    };

    return (
        <div className="container mx-auto bg-white my-4 rounded">
            <div className="md:flex justify-between items-center py-5 gap-5 p-5">
                <div className="flex justify-between items-center gap-10">
                    <div className=" flex justify-center items-center"> <img src={ratings} alt="" className="h-28 w-28 rounded shadow" />
                    </div>
                    <div className="">
                        <div>
                            <h1 className="text-2xl font-bold">{app.title}</h1>
                        </div>
                        <div className="flex justify-start items-center gap-8 py-4">
                            <div className="flex items-center justify-center gap-2 ">
                                <img src={downloads} alt="" className="h-4 w-4" />
                                <h1 className="font-bold">{app.downloads}K</h1>
                            </div>
                            <div className="flex items-center justify-center gap-2 ">
                                <img src={ratings} alt="" className="h-4 w-4" />
                                <h1 className="font-bold">{app.ratingAvg}K</h1>
                            </div>
                            <div className="flex items-center justify-center gap-2 ">
                                <img src={review} alt="" className="h-4 w-4" />
                                <h1 className="font-bold">{app.size}MB</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center md:justify-end items-center">
                    <button onClick={handleUninstallButton} className="bg-[#00D390] p-2 rounded border-none text-white font-bold">Uninstall</button>
                </div>
            </div>
            <Toaster position="top-left" reverseOrder={true} />
        </div>
    )
}

export default InstalledApps;