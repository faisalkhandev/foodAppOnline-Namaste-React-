import { useSelector } from "react-redux"

const Cart = () => {

    const selector = useSelector(store => console.log(store));

    console.log("slectore;::", selector)

    return (
        <>
            <h1 className="text-2xl flex justify-center items-center">Cart</h1>
        </>
    )
}
export default Cart



