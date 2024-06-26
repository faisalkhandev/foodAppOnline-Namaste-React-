import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IMAGE_URL } from "../utils/Constants";
import { removeCartItem } from "../redux/cartSlice";

const Cart = () => {
    const [cartInfo, setCartInfo] = useState([]);
    const selector = useSelector((store) => store.itemReducer.items);
    const dispatch = useDispatch();

    useEffect(() => {
        setCartInfo(selector);
    }, [selector]);

    function handleClear() {
        dispatch(removeCartItem())
    }



    return (
        <div className="mt-6 w-full">
            <div>
                <h1 className="text-2xl font-bold underline shadow-md p-4 rounded-lg text-center">
                    Cart
                </h1>
                <div className="flex justify-center items-center">
                    <button className="p-4 bg-slate-900 text-white rounded-lg flex justify-center items-center" onClick={handleClear}>
                        Clear Cart
                    </button>
                </div>
                <div className="bg-gray-100 h-screen py-8">
                    <div className="container mx-auto px-4">
                        <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="md:w-3/4">
                                <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                                    <table className="w-full">
                                        <thead>
                                            <tr>
                                                <th className="text-left font-semibold">Product</th>
                                                <th className="text-left font-semibold">Price</th>
                                                <th className="text-left font-semibold">Quantity</th>
                                                <th className="text-left font-semibold">Total</th>
                                            </tr>
                                        </thead>
                                        {cartInfo && cartInfo.length > 0 ? (
                                            cartInfo.map((item) => {

                                                return (
                                                    <tbody key={item.id}>
                                                        <tr >
                                                            <td className="py-4">
                                                                <div className="flex items-center">
                                                                    <img className="h-16 w-16 mr-4" src={IMAGE_URL + item.imageId} alt="Product image"></img>
                                                                    <span className="font-semibold">{item.name}</span>
                                                                </div>
                                                            </td>
                                                            <td className="py-4">Rs {item.price / 100}</td>
                                                            <td className="py-4">
                                                                <div className="flex items-center">
                                                                    <button className="border rounded-md py-2 px-4 mr-2">-</button>
                                                                    <span className="text-center w-8">1</span>
                                                                    <button className="border rounded-md py-2 px-4 ml-2">+</button>
                                                                </div>
                                                            </td>
                                                            <td className="py-4">Rs {item.price / 100}</td>
                                                        </tr>
                                                    </tbody>
                                                );
                                            })
                                        ) : (
                                            <tr>
                                                <td colSpan="4" className="text-center">
                                                    Your cart is empty
                                                </td>
                                            </tr>
                                        )}

                                    </table>
                                </div>
                            </div>
                            <div className="md:w-1/4">
                                <div className="bg-white rounded-lg shadow-md p-6">
                                    <h2 className="text-lg font-semibold mb-4">Summary</h2>
                                    <div className="flex justify-between mb-2">
                                        <span>Subtotal</span>
                                        <span>Rs 19.99</span>
                                    </div>
                                    <div className="flex justify-between mb-2">
                                        <span>Taxes</span>
                                        <span>Rs 1.99</span>
                                    </div>
                                    <div className="flex justify-between mb-2">
                                        <span>Shipping</span>
                                        <span>Rs 0.00</span>
                                    </div>
                                    <hr className="my-2"></hr>
                                    <div className="flex justify-between mb-2">
                                        <span className="font-semibold">Total</span>
                                        <span className="font-semibold">Rs 21.98</span>
                                    </div>
                                    <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">Checkout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
