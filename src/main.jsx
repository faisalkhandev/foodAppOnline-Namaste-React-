import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UserContext from './Hooks/UserContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContext.Provider value={{ isLoggedin: "faisalkhan" }}>
      <App />
    </UserContext.Provider>
  </React.StrictMode >,
)
