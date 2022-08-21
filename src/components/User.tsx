import React from "react"

interface Props {
  displayName?: string | null
  photoURL?: string | null
  userName?: string | null
  userEmail?: string | null
}

export default function User({
  displayName,
  photoURL,
  userName,
  userEmail,
}: Props) {
  return (
    <div className="user" data-info={`${userName} (${userEmail})`}>
      <img
        src={
          photoURL ||
          "http://artofdesign.ru/storage/cache/images/000/383/DSC-2386,medium_large.1541358320.jpg"
        }
        alt="avatar"
        className="user__avatar"
      />
      <p className="user__name">{displayName || "Logged off user"}</p>
    </div>
  )
}
