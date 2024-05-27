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

    const { name, cuisines, costForTwoMessage, avgRating, totalRatingsString, slugs, areaName, sla, expectationNotifiers } = restInfo?.data?.cards[2]?.card?.card?.info || "Something Went Wrong buddy?";


    return (
        <>

            <div className="bg-gray-50 h-screen">
                <div className="max-w-4xl mx-auto py-8">
                    <nav className="text-gray-500 text-sm mb-4">
                        <a href="#" className="hover:text-gray-700">Home</a>
                        <span className="mx-1">/</span>

                        <a href="#" className="hover:text-gray-700">{slugs?.city.charAt(0).toUpperCase() + slugs?.city.slice(1)}</a>
                        <span className="mx-1">/</span>
                        <span className="text-gray-900">{name}</span>
                    </nav>
                    <h1 className="text-3xl font-bold text-black mb-4 my-6">{name}</h1>
                    <div className="bg-white shadow-md rounded-lg p-4">
                        <div className="flex items-center mb-2">
                            <b>
                                <span className="text-green-500 font-bold">{avgRating}</span>
                                <span className="text-gray-600 ml-2">({totalRatingsString})</span>
                                <span className="text-gray-600 mx-2">·</span>
                                <span className="text-gray-600">{costForTwoMessage}</span>
                            </b>
                        </div>

                        <div className="text-orange-500 font-semibold mb-2">{cuisines.join(",")}</div>
                        <div className="flex items-center mb-2">
                            <b>
                                <span className="text-gray-700">Outlet</span>
                                <span className="text-gray-500 mx-2">{areaName}</span>
                            </b>
                        </div>
                        <b>
                            <div className="text-gray-700 mb-2">{sla?.slaString}</div>
                        </b>
                        <hr />
                        <div className="flex items-center text-gray-600 mt-2">
                            <span className="mr-2">🚴</span>
                            <span>2.3 kms</span>
                            <span className="mx-2">·</span>
                            <span>{expectationNotifiers[0]?.text}</span>
                        </div>
                    </div>
                </div>
            </div >


        </>
    )
}

export default RestaurantMenu
