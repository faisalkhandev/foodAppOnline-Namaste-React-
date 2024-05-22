import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { AboutUs, Contact, Error } from "./Pages"
import { MainBody, MainLayout } from "./components"


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

    ],
    errorElement: <Error />,

  },

])


function App() {
  return <RouterProvider router={appRouter} />
}





export default App
