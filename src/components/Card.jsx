/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { IMAGE_URL, NO_IMAGE_AVAILABLE } from "../utils/Constants";
import Shrimmer from "./Shrimmer";

const Card = ({ listOfRest }) => {


    if (!listOfRest) {
        return <p>No restaurants available.</p>;
    }

    listOfRest?.length === 0 ? <Shrimmer /> : "";

    return (
        <>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {listOfRest.map((restaurant) => (
                    <div
                        key={restaurant.info.id}
                        className="flex flex-col rounded-lg shadow-lg overflow-hidden"
                    >
                        <Link to={"restaurant/" + restaurant.info.id}>
                            <img
                                src={IMAGE_URL + restaurant?.info?.cloudinaryImageId || NO_IMAGE_AVAILABLE}
                                alt={restaurant.info.name || "No Name available"}
                                className="h-48 w-full object-cover"
                            />
                        </Link>
                        <div className="p-4 flex-1">
                            <Link to={"restaurant/" + restaurant.info.id}><h2 className="text-xl font-bold mb-2">{restaurant.info.name}</h2></Link>
                            <p className="text-gray-600 mb-2">
                                {restaurant.info.cuisines.join(", ")}
                            </p>
                            <p className="text-green-600 mb-2 font-semibold">
                                ⭐ {restaurant.info.avgRating} Stars (
                                {restaurant?.info?.totalRatingsString}){" "}
                            </p>
                            <p className="text-gray-600 mb-2">
                                {restaurant.info.costForTwoMsg}
                            </p>
                        </div>
                    </div>
                ))}
            </div >
        </>
    );
};

export const openRestaurants = (WrappedComponent) => {
    // eslint-disable-next-line react/display-name
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
                    Open
                </label>
                <WrappedComponent {...props} />
            </div>
        );
    };
};

export default Card;
