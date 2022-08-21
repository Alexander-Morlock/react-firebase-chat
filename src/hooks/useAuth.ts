import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth"
import { useAuthState } from "react-firebase-hooks/auth"
import useFirebase from "./useFirebase"

export default function useAuth() {
  const { firebase } = useFirebase()
  const auth = getAuth(firebase)
  const [user, isLoading, error] = useAuthState(auth)

  const isAuth = Boolean(user)

  const signIn = async () => {
    const provider = new GoogleAuthProvider()
    provider.addScope("profile")
    provider.addScope("email")
    await signInWithPopup(auth, provider)
  }

  return {
    user,
    isLoading,
    error,
    isAuth,
    signIn,
    signOut: () => signOut(auth),
  }
}
