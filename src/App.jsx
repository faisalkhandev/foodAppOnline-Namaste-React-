import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { AboutUs, Contact, Error } from "./Pages"
import { MainBody, MainLayout, RestaurantMenu, Shop, Shrimmer } from "./components"
import { Suspense } from "react"


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
      },
      {
        path: '/shop',
        element: <Suspense fallback={<Shrimmer />}>
          <Shop />
        </Suspense>
      }

    ],
    errorElement: <Error />,

  },

])


function App() {
  return <RouterProvider router={appRouter} />
}





export default App
