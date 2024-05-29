import { useEffect, useState } from "react"
import { MENU_API } from "./Constants"

//! This is custom hook for RestaurantMenu but somehow api is not being called but that's how you write custom Hook. 

const useFetchRestaurantMenu = (resId) => {

    //states 
    const [restInfo, setRestInfo] = useState(null)

    useEffect(() => {
        getRestaurantInfo();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [resId])

    const getRestaurantInfo = async () => {
        try {
            const data = await fetch(MENU_API + resId)
            const json = await data.json();
            setRestInfo(json.data);
        }
        catch (error) {
            console.log(error);
        }
    }
    return restInfo;
}

export default useFetchRestaurantMenu