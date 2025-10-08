import { useState } from "react"
import AppsCard from "../../Components/AppsCard/AppsCard"
import useAppsData from "../../Hooks/useAppsData"
import NotFound from "../Not Found/NotFound"

const Apps = () => {
  const appData1 = useAppsData()
  const { jsonData, Loading } = appData1;
  const [Search, setSearch] = useState("")
  const check = Search.trim().toLowerCase();
  const SearchData = check ? jsonData.filter(Data => Data.title.trim().toLowerCase().includes(check)) : jsonData;

  return (
    <div >
      <div className='container mx-auto my-10 px-4 md:px-10'>
        <div className='text-center p-10 pt-2'>
          <h1 className='text-3xl font-bold mb-2'>Our All Applications</h1>
          <p className='text-gray-500'>Explore All Apps on the Market developed by us. We code for Millions</p>
        </div>
        <div className="flex justify-between items-center p-2">
          <div className="text-xl font-bold"><h1> Apps Found <span>({SearchData.length})</span> </h1></div>
          <div >
            <input type="search" onChange={(e) => setSearch(e.target.value)} value={Search} placeholder="Search Apps" className="border-1 border-gray-500 px-2 rounded" />
          </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-5'>
          {SearchData && SearchData.length > 0
            ? SearchData.map(app => <AppsCard app={app} key={app.id}></AppsCard>) : <NotFound></NotFound>}

        </div>
      </div>
    </div>
  )
}

export default Apps