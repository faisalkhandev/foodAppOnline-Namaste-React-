import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { AboutUs, Contact, Error } from "./Pages"
import { MainBody, MainLayout, RestaurantMenu } from "./components"


const appRouter = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <MainBody />,
        errorElement: <Error />
      }
      ,
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
        path: "restaurant/:resId",
        element: <RestaurantMenu />
      }

    ],
    errorElement: <Error />,

  },

])


function App() {
  return <RouterProvider router={appRouter} />
}





export default App
