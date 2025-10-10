import { Link } from "react-router";
import downloads from "../../assets/icon-downloads.png";
import ratings from "../../assets/icon-ratings.png";

const AppsCard = ({app}) => {
  return (
    <Link to={`/Apps/${app.id}`} id={app.id}  className="bg-white p-5 rounded shadow hover:scale-105 transition ease-in-out">
        <div className="flex justify-center items-center">
            <img src={app.image} alt="" className="h-44 w-full rounded" />
        </div>
        <div>
            <h1>{app.title}</h1>
        </div>
        <div className="flex justify-between items-center mt-3 font-bold">
            <div className="bg-gray-100 text-green-300 px-2 rounded flex justify-between items-center gap-2">
                <span><img src={downloads} alt="" className="h-4 w-4"/></span>
                <span>{app.downloads}M</span>
            </div>
            <div className="bg-red-50 text-red-400 px-2 rounded flex justify-between items-center gap-2">
                <span><img src={ratings} alt="" className="h-4 w-4"/></span>
                <span>{app.ratingAvg}</span>
            </div>
        </div>
    </Link>
  )
}

export default AppsCard ;