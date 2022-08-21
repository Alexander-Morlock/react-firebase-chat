import { getFirestore } from "firebase/firestore"
import { useContext } from "react"
import { Context } from ".."

export default function useFirebase() {
  const { firebase } = useContext(Context)
  const firestore = getFirestore(firebase)

  return { firebase, firestore }
}
