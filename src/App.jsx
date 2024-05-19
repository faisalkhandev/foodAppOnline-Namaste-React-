import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { AboutUs, Contact, Error } from "./Pages"
import { MainLayout } from "./components"


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
  },
  {
    path: "about",
    element: <AboutUs />,
    errorElement: <Error />
  },
  {
    path: "contact",
    element: <Contact />,
    errorElement: <Error />
  },
  {
    path: "*",
    element: <Error />
  }

])


function App() {
  return <RouterProvider router={appRouter} />
}





export default App
