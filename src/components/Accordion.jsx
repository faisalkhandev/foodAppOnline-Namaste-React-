/* eslint-disable react/prop-types */

import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { IMAGE_URL } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { addCartItem } from "../redux/cartSlice";

// eslint-disable-next-line react/prop-types
const Accordion = ({ accordionInfo, accordionCategory }) => {
    // states
    const [isOpen, setIsOpen] = useState(true);
    const dispatch = useDispatch();

    // functions
    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    function handleAddItem(item) {
        console.log("dispatch:;", item);
        dispatch(addCartItem(item));
    }

    const itemCards = accordionInfo?.itemCards;
    const itemCategories = accordionCategory?.categories;

    return (
        <>
            <h1 className="font-bold flex align-middle justify-center mt-10 tracking-widest underline">
                MENU
            </h1>
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-10">
                <div
                    className="p-4 border-b flex items-center justify-between"
                    onClick={toggleAccordion}
                >
                    <h2 className="text-xl font-semibold">
                        {accordionInfo?.title || accordionCategory?.title} (
                        {itemCards?.length || itemCategories?.length}){" "}
                    </h2>
                    {isOpen ? (
                        <FaAngleUp className="text-xl" />
                    ) : (
                        <FaAngleDown className="text-xl" />
                    )}
                </div>
                {isOpen &&
                    (itemCards && itemCards.length > 0
                        ? itemCards.map((item) => (
                            <div className="p-4" key={item?.card?.info?.id}>
                                <div className="border-b mb-4">
                                    <div className="flex justify-between items-center mb-2">
                                        <div>
                                            <span className="text-red-500 font-semibold">
                                                {item?.card?.info?.ribbon?.text}
                                            </span>
                                            <h3 className="text-lg font-bold">
                                                {item?.card?.info?.name}
                                            </h3>
                                            <p className="font-semibold">
                                                $
                                                {item?.card?.info?.price
                                                    ? item?.card?.info?.price / 100
                                                    : item?.card?.info?.defaultPrice}
                                            </p>
                                            <p className="text-green-600 font-semibold">
                                                ⭐{" "}
                                                {item?.card?.info?.ratings?.aggregatedRating?.rating}{" "}
                                                (
                                                {
                                                    item?.card?.info?.ratings?.aggregatedRating
                                                        ?.ratingCountV2
                                                }
                                                +)
                                            </p>
                                            <p className="text-slate-700 font-bold">
                                                {item?.card?.info?.category}
                                            </p>
                                            <p>{item?.card?.info?.description}</p>
                                        </div>
                                        <div>
                                            <img
                                                src={IMAGE_URL + item?.card?.info?.imageId}
                                                alt={item?.card?.info?.name}
                                                className="w-20 h-20 object-cover rounded-md"
                                            />
                                            <button
                                                className="mt-2 w-20 bg-green-500 text-white px-4 py-1 rounded"
                                                onClick={() => handleAddItem(item?.card?.info)}
                                            >
                                                ADD
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                        : itemCategories &&
                        itemCategories.length > 0 &&
                        itemCategories.map((category, categoryIndex) => {
                            return category?.itemCards.map((item, itemIndex) => {
                                return (
                                    <div className="p-4" key={`${categoryIndex}-${itemIndex}`}>
                                        <div className="border-b mb-4">
                                            <div className="flex justify-between items-center mb-2">
                                                <div>
                                                    <span className="text-red-500 font-semibold">
                                                        {item?.card?.info?.ribbon?.text}
                                                    </span>
                                                    <h3 className="text-lg font-bold">
                                                        {item?.card?.info?.name}
                                                    </h3>
                                                    <p className="font-semibold">
                                                        ${item?.card?.info?.price / 100}{" "}
                                                    </p>
                                                    <p className="text-green-600 font-semibold">
                                                        ⭐{" "}
                                                        {
                                                            item?.card?.info?.ratings?.aggregatedRating
                                                                ?.rating
                                                        }{" "}
                                                        (
                                                        {
                                                            item?.card?.info?.ratings?.aggregatedRating
                                                                ?.ratingCountV2
                                                        }
                                                        +)
                                                    </p>
                                                    <p className="text-slate-700 font-bold">
                                                        {item?.card?.info?.category}
                                                    </p>
                                                    <p>{item?.card?.info?.description}</p>
                                                </div>
                                                <div>
                                                    <img
                                                        src={IMAGE_URL + item?.card?.info?.imageId}
                                                        alt={item?.card?.info?.name}
                                                        className="w-20 h-20 object-cover rounded-md"
                                                    />
                                                    <button
                                                        className="mt-2 w-20 bg-green-500 text-white px-4 py-1 rounded"
                                                        onClick={() =>
                                                            handleAddItem(item?.card?.info)
                                                        }
                                                    >
                                                        ADD
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            });
                        }))}
            </div>
        </>
    );
};

export default Accordion;
