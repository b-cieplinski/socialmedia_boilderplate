import React, { useEffect, useState } from 'react'
import { DotsHorizontalIcon, SearchIcon, PlusIcon, UserGroupIcon, HeartIcon, PaperAirplaneIcon, MenuIcon, HomeIcon, ChatIcon, BookmarkAltIcon, EmojiHappyIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import { db } from '../firebase'
import {collection, onSnapshot, orderBy, query, addDoc, serverTimestamp} from "@firebase/firestore"
import { useSession } from 'next-auth/react'


const Post = ({id, username, userImg, caption, img}) => {
  const { data: session } = useSession();
    const [comments, setComments] = useState([])
    const [comment, setComment] = useState([])

    useEffect(() => {
      return onSnapshot(query(collection(db, 'posts', id, 'comments'), orderBy('timestamp', "desc")),
      snapshot => {
          setComments(snapshot.docs);
      })
  }, [db])
    


    const sendComment = async (e) => {
      e.preventDefault();

      const commentToSend = comment;
      setComment('');

      await addDoc(collection(db, 'posts', id, 'comments'), {
        comment:commentToSend,
        username: session.user.username, 
        userImage: session.user.image,
        timestamp: serverTimestamp()
      })
    }

  return (
    <div className="bg-white my-7 rounded-sm border">
      {/* Header */}
      <div className="flex p-5 items-center">
        <div className="relative h-10 w-10 ">
        <Image src={userImg} layout="fill" alt="" className="rounded-full object-contain border mr-3"/>
        </div>
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5"/>
      </div>

      {/* img */}
      <img src={img} className="object-cover aspect-square"></img>

      {/* Buttons */}
      <div className="flex justify-between p-4">
      <div className="flex space-x-4">
        <HeartIcon className="postBtn" />
        <ChatIcon className="postBtn"/>
        <PaperAirplaneIcon className="postBtn"/>
      </div>
      <BookmarkAltIcon className="postBtn"/>
      </div>

      {/* Captions */}
      <div>
        <p className="p-5 truncate">
          <span className="font-bold">{username} </span>
          {caption}
        </p>
      </div>

      {/* Comments */}

      {comments.length > 0 &&(
        <div>
          {comments.map((comment) => (
          <div key={comment.id}>
                      <p>
                        <span className="font-bold">{comment.data().username}</span>{" "}{comment.data().comment}</p>
          </div>

          ))}
        </div>
      )}

      {/* Input box */}
      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-4"/>
        <input type="text" placeholder="Add a comment..." value={comment} onChange={e => setComment(e.target.value)} className="border-none flex-1 focus:ring-0 outline-none"/>
        <button type="submit"  onClick={sendComment} className="font-semibold text-blue-500">Post</button>
      </form>
    </div>
  )
}

export default Post