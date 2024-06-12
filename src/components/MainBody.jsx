/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useContext } from "react";
import Card from "./Card";
import foodAppHomeImage from '../assets/food-app-.png'
import useOnlineStatus from "../Hooks/useOnlineStatus";
import { openRestaurants } from './Card';
import UserContext from "../Hooks/UserContext";

const Body = () => {
    // States
    const [listOfRest, setListOfRest] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filterRestaurants, setFilterRestaurants] = useState([]);

    const OpenedRestaurants = openRestaurants(Card)
    const { isLoggedin } = useContext(UserContext)

    // functions
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getRestaurants = async () => {
        const data = await fetch(
            "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
        );

        { /*
             ! this is one way of getting data. Kind of hard. you have to keep drilling. 
              const json = await data.json();
              console.log("json::", json)
              setListOfRest(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
              );
              setFilterRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
              );
          */
        }

        //* This is the better way. Another approach

        const json = await data.json();
        console.log("json:::", json)
        const arrayOfCards = json.data.cards;
        const restaurant_list = "restaurant_grid_listing";


        arrayOfCards.map(cardObj => {
            if (cardObj.card.card && cardObj.card.card.id === restaurant_list) {
                const resData = cardObj.card?.card?.gridElements?.infoWithStyle?.restaurants;
                setListOfRest(resData);
                setFilterRestaurants(resData);
            }
        });

    };


    useEffect(() => {
        getRestaurants();
    }, []);

    function topRestaurants(num) {
        const topRes = listOfRest.filter((res) => {
            if (res?.info?.avgRating >= num) return res;
        });
        setListOfRest(topRes);
    }

    const isOnline = useOnlineStatus();

    if (isOnline === false) {
        return <h1 className="text-center text-2xl">Please check your internet connection</h1>;
    }

    return (
        <div className="mx-auto max-w-7xl px-4">
            <div className="flex items-center justify-between p-4">
                <div className="space-y-6 mr-5">
                    <p className="text-sm font-semibold md:text-base sm:text-sm">
                        Food Delivery App 🍔
                        {isLoggedin}
                    </p>
                    <p className="lg:text-3xl font-bold md:text-lg capitalize sm:text-xs flex flex-wrap ">
                        {" "}
                        Best Online food delivery 🚀
                    </p>
                    <p className="text-base text-gray-600 md:text-lg sm:text-xs text-justify ">
                        Restaurants with online food delivery in the world 🌍
                    </p>
                    <button
                        type="button"
                        className="bg-slate-600 text-white rounded-lg text-sm font-semibold p-3"
                    >
                        Sign Up
                    </button>
                </div>
                <div className="flex-shrink-0 w-56 h-56">
                    <img
                        src={foodAppHomeImage}
                        alt="Getting Started"
                        className="rounded-lg w-full h-full object-cover"
                    />
                </div>
            </div>
            <hr className="mt-6" />
            <h1 className="p-4 font-bold text-center text-2xl">
                OUR TOP RESTAURANTS{" "}
            </h1>
            <div className="flex items-center justify-center">
                <button
                    className="p-3 bg-slate-600 text-white m-6 rounded-lg text-lg font-semibold "
                    onClick={() => topRestaurants(4)}
                >
                    4 ⭐ Restaurants
                </button>

                <span className="text-slate-600 text-xl font-bold">
                    Total Restaurants({listOfRest?.length})
                </span>

                <input
                    type="search"
                    name="search"
                    className="p-3 rounded-lg text-sm font-semibold m-6 border-2 border-black focus:border-0"
                    placeholder="Search for Restaurant"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button
                    type="button"
                    className="bg-slate-800 text-white p-4 rounded-lg"
                    onClick={() => {
                        const filterRestaurants = listOfRest.filter((restaurant) =>
                            restaurant?.info?.name
                                ?.toLowerCase()
                                .includes(searchText.toLowerCase())
                        );
                        setFilterRestaurants(filterRestaurants);
                    }}
                >
                    Search
                </button>
            </div>
            <div className="m-10">
                {
                    listOfRest?.info?.isOpen ? (

                        <OpenedRestaurants listOfRest={listOfRest} />
                    ) : <Card listOfRest={filterRestaurants} />
                }
            </div>
        </div>
    );
};

export default Body;
