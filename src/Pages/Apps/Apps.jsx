import AppsCard from "../../Components/AppsCard/AppsCard"

const Apps = () => {
  return (
    <div>
      <div className='container mx-auto my-10 px-4 md:px-10'>
        <div className='text-center p-10 pt-2'>
          <h1 className='text-3xl font-bold mb-2'>Our All Applications</h1>
          <p className='text-gray-500'>Explore All Apps on the Market developed by us. We code for Millions</p>
        </div>
        <div className="flex justify-between items-center p-2">
          <div className="text-xl font-bold"><h1> Apps Found <span>(343)</span> </h1></div>
          <div >
            <input type="search"  placeholder="Search Apps" className="border-1 border-gray-500 px-2 rounded" />
          </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-5'>
          <AppsCard></AppsCard>
          <AppsCard></AppsCard>
          <AppsCard></AppsCard>
          <AppsCard></AppsCard>
          <AppsCard></AppsCard>
          <AppsCard></AppsCard>
          <AppsCard></AppsCard>
          <AppsCard></AppsCard>
          <AppsCard></AppsCard>
          <AppsCard></AppsCard>
          <AppsCard></AppsCard>
          <AppsCard></AppsCard>
          <AppsCard></AppsCard>
          <AppsCard></AppsCard>
          <AppsCard></AppsCard>
          <AppsCard></AppsCard>
          <AppsCard></AppsCard>
          <AppsCard></AppsCard>
          <AppsCard></AppsCard>
          <AppsCard></AppsCard>
          <AppsCard></AppsCard>
          <AppsCard></AppsCard>
          <AppsCard></AppsCard>
          <AppsCard></AppsCard>


        </div>
      </div>
    </div>
  )
}

export default Apps