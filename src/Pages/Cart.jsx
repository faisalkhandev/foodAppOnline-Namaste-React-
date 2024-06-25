import { useEffect, useState } from "react";
import { useSelector } from "react-redux"

const Cart = () => {

    const [cartInfo, setCartInfo] = useState([])
    const selector = useSelector(store => store.itemReducer.items);

    useEffect(() => {
        setCartInfo(selector)
    }, [selector])

    console.log("slectore;::", cartInfo)

    return (
        <div className="flex justify-center items-center mt-6">
            <div>
                <h1 className="text-2xl font-bold underline shadow-md p-4 rounded-lg  ">Cart</h1>

                <p className="mt-5">
                    selector
                </p>
            </div>
        </div>
    )
}
export default Cart



