import React, { useEffect, useState } from "react"
import { parseISO, compareDesc } from "date-fns"
import Loader from "./Loader"
import useFirebase from "../hooks/useFirebase"
import { collection } from "firebase/firestore"
import { useCollection } from "react-firebase-hooks/firestore"
import { PostType } from "./Chat"
import Post from "./Post"

export default function PostsList() {
  const [posts, setPosts] = useState<PostType[] | undefined>()
  const { firestore } = useFirebase()

  const [value, loading, error] = useCollection(collection(firestore, "posts"))

  useEffect(() => {
    const fetchedPosts = value?.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    })) as PostType[] | undefined

    fetchedPosts &&
      setPosts(
        fetchedPosts.sort((a, b) =>
          compareDesc(parseISO(a.date), parseISO(b.date))
        )
      )
  }, [value])

  if (loading) {
    return <Loader />
  }

  return (
    <div className="posts-list">
      <h1>{!error ? "Posts" : error.message}</h1>
      <ul>
        {posts?.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </ul>
    </div>
  )
}
