import { useEffect } from "react";
import { useState } from "react"

const useAppsData = () => {
    const [jsonData, setJsonData] = useState([]);
    const [Loading, setLoading] = useState(true);
    const [Error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('../Data/AppsData.json');
                const data = await response.json();
                setJsonData(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setTimeout(() => {
                    setLoading(false);
                }, 4000);
            }
        };
        fetchData();
    }, []);
    return { jsonData, Loading, Error }
}

export default useAppsData;