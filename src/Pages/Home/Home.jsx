import Banner from "../../Components/Banner/Banner";
import TrendingApps from "../../Components/TrendingApps/TrendingApps";
import useAppsData from "../../Hooks/useAppsData";

const Home = () => {

    const appData1 = useAppsData()
    const { jsonData , Loading} = appData1;
    const appData = jsonData.slice(0, 8);
    
    return (
        <div className="bg-gray-100">
            <Banner></Banner>
            <TrendingApps appData={appData} Loading={Loading}></TrendingApps>
        </div>
    )
}

export default Home;