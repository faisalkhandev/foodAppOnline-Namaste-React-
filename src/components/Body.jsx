import { useState, useEffect } from "react";
import Card from "./Card";

const Body = () => {
    // useState
    const [listOfRest, setListOfRest] = useState([]);

    // functions
    const getRestaurants = async () => {
        const data = await fetch("https://corsproxy.io/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D12.9351929%26lng%3D77.62448069999999%26page_type%3DDESKTOP_WEB_LISTING");
        const json = await data.json();
        setListOfRest(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
        console.log("Data:::", listOfRest);
    };

    useEffect(() => {
        getRestaurants();
    }, []);

    return (
        <div className="mx-auto max-w-7xl px-4">
            <div className="flex items-center justify-between p-4">
                <div className="space-y-6 mr-5">
                    <p className="text-sm font-semibold md:text-base sm:text-sm">Food Delivery App</p>
                    <p className="lg:text-3xl font-bold md:text-lg capitalize sm:text-xs flex flex-wrap "> Best Online food delivery 🚀</p>
                    <p className="text-base text-gray-600 md:text-lg sm:text-xs text-justify ">
                        Restaurants with online food delivery in Mumbai
                    </p>
                    <button
                        type="button"
                        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                        Sign Up
                    </button>
                </div>
                <div className="flex-shrink-0 w-56 h-56">
                    <img
                        src="https://images.unsplash.com/photo-1605165566807-508fb529cf3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                        alt="Getting Started"
                        className="rounded-lg w-full h-full object-cover"
                    />
                </div>
            </div>
            <hr className="mt-6" />
            <h1 className="p-4 font-bold text-center text-base">OUR TOP RESTAURANTS </h1>
            <div className="m-10">
                <Card listOfRest={listOfRest} />
            </div>
        </div>
    );
};

export default Body;
