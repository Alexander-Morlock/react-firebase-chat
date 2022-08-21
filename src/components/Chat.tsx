import React from "react"
import PostsList from "./PostsList"
import PostSubmitForm from "./PostSubmitForm"

export type PostType = {
  id: string
  userName: string
  userEmail: string
  date: string
  photoURL: string
  message: string
}

export default function Chat() {
  return (
    <div className="p-2">
      <PostsList />
      <PostSubmitForm />
    </div>
  )
}
