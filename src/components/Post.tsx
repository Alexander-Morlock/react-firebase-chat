import React from "react"
import { PostType } from "./Chat"
import User from "./User"
import { parseISO, format } from "date-fns"

interface Props {
  post: PostType
}

export default function Post({ post }: Props) {
  const { id, userName, userEmail, date, photoURL, message } = post

  return (
    <li key={id} className="post">
      <User
        displayName={message}
        photoURL={photoURL}
        userName={userName}
        userEmail={userEmail}
      />
      <i>{format(parseISO(date), "dd-MM-yyyy HH:mm")}</i>
    </li>
  )
}
