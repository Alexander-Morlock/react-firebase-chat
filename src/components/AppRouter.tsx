import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import { RouteType, privateRoutes, publicRoutes } from "../routes"
import Chat from "./Chat"
import LoginForm from "./LoginForm"

export default function AppRouter() {
  const { isAuth } = useAuth()

  const routeMapCallback = (route: RouteType) => {
    const { Component, path } = route
    return <Route key={path} path={path} element={<Component />} />
  }

  return (
    <BrowserRouter>
      {isAuth ? (
        <Routes>
          {privateRoutes.map(routeMapCallback)}
          <Route path="*" element={<Chat />} />
        </Routes>
      ) : (
        <Routes>
          {publicRoutes.map(routeMapCallback)}
          <Route path="*" element={<LoginForm />} />
        </Routes>
      )}
    </BrowserRouter>
  )
}
