import { Outlet } from "react-router-dom"
import Body from "./MainBody"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { MainBody } from "."

const MainLayout = () => {
    return (
        <div>
            <Header />
            <MainBody />
            <Footer />
        </div>
    )
}

export default MainLayout