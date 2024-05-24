import { useEffect, useState } from "react";
import { MENU_API } from "../utils/Constants";
import Shrimmer from "./Shrimmer";

const RestaurantMenu = () => {

    const [restInfo, setRestInfo] = useState(null)


    useEffect(() => {

        const menuAPI = async () => {
            try {
                const data = await fetch(MENU_API);
                const menuJson = await data.json();
                setRestInfo(menuJson)
            }
            catch (error) {
                console.log(error)
            }
        }
        menuAPI();
    }, [])

    console.log("menuAPI:10579", restInfo)



    if (!restInfo) return <Shrimmer />;


    return (
        <>
            <h1>RestaurantMenu</h1>


        </>
    )
}

export default RestaurantMenu
