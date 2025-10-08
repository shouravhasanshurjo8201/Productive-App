import appStore from "../../assets/demo-app (5).webp";
import downloads from "../../assets/icon-downloads.png";
import ratings from "../../assets/icon-ratings.png";

const AppsCard = () => {
  return (
    <div className="bg-white p-5 rounded shadow">
        <div className="flex justify-center items-center">
            <img src={appStore} alt="" className="h-50 w-full rounded" />
        </div>
        <div>
            <h1>Forest: Focus for Productivity</h1>
        </div>
        <div className="flex justify-between items-center mt-3 font-bold">
            <div className="bg-gray-100 text-green-300 px-2 rounded flex justify-between items-center gap-2">
                <span><img src={downloads} alt="" className="h-4 w-4"/></span>
                <span>9M</span>
            </div>
            <div className="bg-red-50 text-red-400 px-2 rounded flex justify-between items-center gap-2">
                <span><img src={ratings} alt="" className="h-4 w-4"/></span>
                <span>8</span>
            </div>
        </div>
    </div>
  )
}

export default AppsCard;