import React from 'react'
import Post from './Post'
import { useEffect, useState } from 'react'
import { db } from '../firebase'
import {collection, onSnapshot, orderBy, query, data} from "@firebase/firestore"

// const posts = [
//     {
//         id: '123',
//         username: 'ushbdiufb',
//         userImg: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
//         img: 'https://images.unsplash.com/photo-1599790772272-d1425cd3242e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
//         caption: 'isudgfgib'
//     },
//     {
//         id: '1236',
//         username: 'ushbd234iufb',
//         userImg: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
//         img: 'https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cm9ib3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
//         caption: 'i234sudgfgib'
//     },
//     {
//         id: '1234',
//         username: 'ushbd3iufb',
//         userImg: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
//         img: 'https://images.unsplash.com/photo-1601132359864-c974e79890ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
//         caption: 'isud4gfgib'
//     },
// ]

const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        return onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', "desc")),
        snapshot => {
            setPosts(snapshot.docs);
        })
    }, [db])

        // console.log(posts)

  return (
    <div>
        {posts.map((post) => (
        <Post key={post.id} id={post.id} username={post.data().username} userImg={post.data().profileImg} caption={post.data().caption} img={post.data().image}/>
        ))}
    </div>
  );
}

export default Posts