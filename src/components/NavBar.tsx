import React from "react"
import useAuth from "../hooks/useAuth"
import User from "./User"

export default function NavBar() {
  const { isAuth, signIn, signOut, user } = useAuth()
  return (
    <div className="navbar">
      <User displayName={user?.displayName} photoURL={user?.photoURL} />
      {isAuth && <button onClick={signOut}>Log off</button>}
      {!isAuth && <button onClick={signIn}>Log in</button>}
    </div>
  )
}
