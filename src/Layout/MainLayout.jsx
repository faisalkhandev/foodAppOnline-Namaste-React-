import { Outlet } from "react-router-dom"
import { Footer, Header } from "../components"
import UserContext from "../Hooks/UserContext"


const MainLayout = () => {
    return (
        <div>
            <UserContext.Provider value={{ isLoggedin: 'Contact Us' }}>
                <Header />
            </UserContext.Provider>
            <Outlet />
            <Footer />
        </div>
    )
}

export default MainLayout