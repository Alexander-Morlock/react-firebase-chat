import React from "react"
import AppRouter from "./components/AppRouter"
import Loader from "./components/Loader"
import NavBar from "./components/NavBar"
import useAuth from "./hooks/useAuth"

function App() {
  const { isLoading } = useAuth()
  return (
    <>
      <NavBar />
      <AppRouter />
      {isLoading && <Loader />}
    </>
  )
}

export default App
