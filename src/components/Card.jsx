/* eslint-disable react/prop-types */
import { IMAGE_URL, NO_IMAGE_AVAILABLE } from "../utils/Constants";
import Shrimmer from "./Shrimmer";

const Card = ({ listOfRest }) => {
    console.log("restaurants::", listOfRest);

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
                        <img
                            src={IMAGE_URL + restaurant?.info?.cloudinaryImageId || NO_IMAGE_AVAILABLE}
                            alt={restaurant.info.name || "No Name available"}
                            className="h-48 w-full object-cover"
                        />
                        <div className="p-4 flex-1">
                            <h2 className="text-xl font-bold mb-2">{restaurant.info.name}</h2>
                            <p className="text-gray-600 mb-2">
                                {restaurant.info.cuisines.join(", ")}
                            </p>
                            <p className="text-gray-600 mb-2">
                                {restaurant.info.avgRating} Stars (
                                {restaurant?.info?.totalRatingsString}){" "}
                            </p>
                            <p className="text-gray-600 mb-2">
                                {restaurant.info.costForTwoMsg}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Card;
