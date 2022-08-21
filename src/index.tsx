import React, { createContext } from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { initializeApp } from "firebase/app"
import { firebaseConfig } from "./firebase-config"

const firebase = initializeApp(firebaseConfig)

export const Context = createContext({ firebase })

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <Context.Provider value={{ firebase }}>
      <App />
    </Context.Provider>
  </React.StrictMode>
)
