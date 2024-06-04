import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UserContext from './Hooks/UserContext.jsx'
import { Provider } from 'react-redux'
import { appStore } from './redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Provider store={appStore}>
      <UserContext.Provider value={{ isLoggedin: " Abhi Order Karo 😋🍕🍗" }}>
        <App />
      </UserContext.Provider>
    </Provider>
  </React.StrictMode >,
)
