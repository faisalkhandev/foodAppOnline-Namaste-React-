import { MainBody } from "."
import { Footer } from "./Footer"
import { Header } from "./Header"

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