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
    console.log("drilling", restInfo?.data?.cards[2]?.card?.card?.info)


    if (!restInfo) return <Shrimmer />;

    const { name, cuisines, costForTwoMessage, avgRating } = restInfo?.data?.cards[2]?.card?.card?.info || "Restaurant Name";


    return (
        <>

            <div className="bg-gray-50 h-screen">
                <div className="max-w-4xl mx-auto py-8">
                    <nav className="text-gray-500 text-sm mb-4">
                        <a href="#" className="hover:text-gray-700">Home</a>
                        <span className="mx-1">/</span>
                        <a href="#" className="hover:text-gray-700">Delhi</a>
                        <span className="mx-1">/</span>
                        <span className="text-gray-900">Pizza Hut</span>
                    </nav>
                    <h1 className="text-3xl font-bold text-black mb-4">Pizza Hut</h1>
                    <div className="bg-white shadow-md rounded-lg p-4">
                        <div className="flex items-center mb-2">
                            <span className="text-green-500 font-bold">4.0</span>
                            <span className="text-gray-600 ml-2">(5K+ ratings)</span>
                            <span className="text-gray-600 mx-2">·</span>
                            <span className="text-gray-600">₹350 for two</span>
                        </div>
                        <div className="text-orange-500 font-semibold mb-2">Pizzas</div>
                        <div className="flex items-center mb-2">
                            <span className="text-gray-700">Outlet</span>
                            <span className="text-gray-500 mx-2">Rohini</span>
                        </div>
                        <div className="text-gray-700 mb-2">30-35 mins</div>
                        <div className="flex items-center text-gray-600">
                            <span className="mr-2">🚴</span>
                            <span>2.3 kms</span>
                            <span className="mx-2">·</span>
                            <span>₹40 Delivery fee will apply</span>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default RestaurantMenu
