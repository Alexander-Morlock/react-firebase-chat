import React from "react"
import useAuth from "../hooks/useAuth"

export default function LoginForm() {
  const { signIn } = useAuth()

  const onFormSUbmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    signIn()
  }

  return (
    <div className="full-size-wrapper p-2">
      <form onSubmit={onFormSUbmit} className="auth-submit-form">
        <h1>Authorization request</h1>
        <button type="submit">Authorize</button>
      </form>
    </div>
  )
}
