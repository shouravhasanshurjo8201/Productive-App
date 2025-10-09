import { useState } from "react";
import InstalledApps from "../../Components/Installed Apps/InstalledApps";
import NotFound from "../Not Found/NotFound";
import useAppsData from "../../Hooks/useAppsData";
import LoadingPage from "../Not Found/LoadingPage";

const Installation = () => {
  const { Loading } = useAppsData()

  const existingData = JSON.parse(localStorage.getItem('Instal')) || [];
  const [sortOrder, setSortOrder] = useState();
  const sortedItem = () => {
    if (sortOrder === 'price-asc') {
      return [...existingData].sort((a, b) => a.downloads - b.downloads)
    } else if (sortOrder === 'price-desc') {
      return [...existingData].sort((a, b) => b.downloads - a.downloads)
    } else {
      return existingData;
    }
  }
  const InstalData = sortedItem();

  return (
    <div className="bg-gray-100">
      <div className='container mx-auto my-10 px-4 md:px-10'>
        <div className='text-center p-10 pt-2'>
          <h1 className='text-3xl font-bold mb-2'>Your Installed Apps</h1>
          <p className='text-gray-500'>Explore All Apps on the Market developed by us. We code for Millions</p>
        </div>
        {Loading ? <LoadingPage></LoadingPage> :
          <div>
            <div className="flex justify-between items-center p-2">
              <div className="text-xl font-bold"><h1> Apps Found <span>({existingData.length})</span> </h1></div>
              <div className="form-control">
                <select className="select select-bordered" value={sortOrder} onChange={e => setSortOrder(e.target.value)}>
                  <option value='none'>Sort By Size</option>
                  <option value='price-asc'>Low--High</option>
                  <option value='price-desc'>High--Low</option>
                </select>
              </div>
            </div>
            <div className=' my-5'>
              {existingData && existingData.length > 0
                ? InstalData.map(app => <InstalledApps app={app} key={app.id}></InstalledApps>) : <NotFound></NotFound>}
            </div>
          </div>}
      </div>
    </div >
  )
}

export default Installation;