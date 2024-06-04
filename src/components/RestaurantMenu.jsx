import { useEffect, useState } from "react";
import { ICON_URL, MENU_API } from "../utils/Constants";
import { useParams } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Accordion from "./Accordion";
import Skeleton from "./Skeleton";

const RestaurantMenu = () => {
    const [restInfo, setRestInfo] = useState(null);
    const { resId } = useParams();
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const menuAPI = async () => {
            try {
                const response = await fetch(MENU_API + resId);
                const menuJson = await response.json();
                setRestInfo(menuJson);
            } catch (error) {
                console.log(error);
            }
        };
        menuAPI();
    }, [resId]);

    if (!restInfo) return <Skeleton />;

    const cardInfo = restInfo?.data?.cards?.[2]?.card?.card?.info;
    const offerDeals = restInfo?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle;
    const accordionInfo = restInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    const accordionCategory = restInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    const {
        name,
        cuisines,
        costForTwoMessage,
        avgRating,
        totalRatingsString,
        slugs,
        areaName,
        sla,
        expectationNotifiers,
    } = cardInfo;

    const offers = offerDeals?.offers || [];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % Math.ceil(offers.length / 2));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + Math.ceil(offers.length / 2)) % Math.ceil(offers.length / 2));
    };

    return (
        <>
            <div className="bg-gray-50 min-h-screen">
                <div className="max-w-4xl mx-auto py-8">
                    <nav className="text-gray-500 text-sm mb-4">
                        <a href="#" className="hover:text-gray-700">Home</a>
                        <span className="mx-1">/</span>
                        <a href="#" className="hover:text-gray-700">
                            {slugs?.city.charAt(0).toUpperCase() + slugs?.city.slice(1)}
                        </a>
                        <span className="mx-1">/</span>
                        <span className="text-gray-900">{name}</span>
                    </nav>
                    <h1 className="text-3xl font-bold text-black mb-4 my-6">{name}</h1>
                    <div className="bg-white shadow-md rounded-lg p-4">
                        <div className="flex items-center mb-2">
                            <b>
                                <span className="text-green-500 font-bold">⭐</span>{" "}
                                <span className="text-green-500 font-bold">{avgRating}</span>
                                <span className="text-gray-600 ml-2">({totalRatingsString})</span>
                                <span className="text-gray-600 mx-2">·</span>
                                <span className="text-gray-600">{costForTwoMessage}</span>
                            </b>
                        </div>
                        <div className="text-orange-500 font-semibold mb-2 underline">
                            {cuisines?.join(", ")}
                        </div>
                        <b>
                            <div className="flex items-center mb-2">
                                <span className="text-gray-700">Outlet</span>
                                <span className="text-gray-500 mx-2">{areaName}</span>
                            </div>
                            <div className="text-gray-700 mb-2">{sla?.slaString}</div>
                        </b>
                        <hr />
                        <div className="flex items-center text-gray-600 mt-2">
                            <span className="mr-2">🚴</span>
                            <span>{expectationNotifiers?.[0]?.text}</span>
                        </div>
                    </div>
                </div>

                {/* Offer Slider */}

                <div className="relative w-full max-w-4xl mx-auto mt-10 overflow-hidden">
                    <h1 className="font-bold ml-3">Deals for you</h1>
                    <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 50}%)` }}>
                        {offers.map((offer, index) => (
                            <div key={index} className="min-w-1/2 max-w-1/2 p-2 flex-shrink-0">
                                <div className="bg-white bg-opacity-50 border border-gray-400 shadow-md rounded-lg p-4 flex items-center">
                                    <div className={`text-white font-bold p-4 rounded-full `}>
                                        <img src={ICON_URL + offer?.info?.offerLogo} alt="top offers" width="48" height="48" />
                                    </div>
                                    <div className="ml-4">
                                        <div className="font-bold text-lg">{offer?.info?.header}</div>
                                        <div className="text-gray-600">{offer?.info?.couponCode}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button
                        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-100 p-2 rounded-full shadow-md"
                        onClick={prevSlide}
                    >
                        <FaArrowLeft />
                    </button>
                    <button
                        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-100 p-2 rounded-full shadow-md"
                        onClick={nextSlide}
                    >
                        <FaArrowRight />
                    </button>
                </div>

                {/*Accordion Here*/}

                <Accordion accordionInfo={accordionInfo} accordionCategory={accordionCategory} />
            </div>
        </>
    );
};

export default RestaurantMenu;
