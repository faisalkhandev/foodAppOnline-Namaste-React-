import { createContext } from "react"



const UserContext = createContext({
    isLoggedin: "Default User"
})


export default UserContext;