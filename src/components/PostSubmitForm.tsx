import React, { useState } from "react"
import useAuth from "../hooks/useAuth"
import { collection, addDoc } from "firebase/firestore"
import useFirebase from "../hooks/useFirebase"

export default function PostSubmitForm() {
  const { user } = useAuth()
  const { firestore } = useFirebase()
  const [message, setMessage] = useState("")

  const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const newMessage = {
      userName: user?.displayName || "Unknown",
      userEmail: user?.email || "Unknown",
      photoURL: user?.photoURL,
      date: new Date().toISOString(),
      message,
    }

    try {
      await addDoc(collection(firestore, "posts"), newMessage)
      setMessage("")
    } catch (e) {
      console.error("Error adding document: ", e)
    }
  }

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setMessage(e.target.value)

  return (
    <form onSubmit={onFormSubmit} className="post-submit-form">
      <input type="text" value={message} onChange={onInputChange} />
      <button type="submit">Send</button>
    </form>
  )
}
