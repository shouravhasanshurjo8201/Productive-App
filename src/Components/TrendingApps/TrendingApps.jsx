import { Link } from 'react-router';
import AppsCard from '../AppsCard/AppsCard';

const TrendingApps = ({appData}) => {
  return (
    <div>
        <div className='container mx-auto my-10 px-4 md:px-10'>
            <div className='text-center p-10 pt-2'>
            <h1 className='text-3xl font-bold mb-2'>Trending Apps</h1>
                <p className='text-gray-500'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-5'>
                {appData.map(app => <AppsCard app={app} key={app.id}></AppsCard>)
                }
            </div>
            <div className='text-center'> 
                <Link className="btn font-bold text-white bg-gradient-to-br from-[#632EE3] to-[#9F62F2] hover:bg-gradient-to-tl hover:text-white rounded" to="/Apps">  Show All Apps</Link>
            </div>
        </div>
    </div>
  )
}

export default TrendingApps;