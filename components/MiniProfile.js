import React from 'react'
import { signOut, useSession } from 'next-auth/react'


const MiniProfile = ({name}) => {

  const {data: session} = useSession()

  return (
    <div className="flex items-center justify-between mt-12 ml-10 bg-white">
        <img src={session.user.image} className="rounded-full w-16 h-16 border p-[2px] mt-110 ml-10"/>
    

    <div className="flex-1 mx-4">
      <h2 className="font-bold">{session?.user.username}</h2>
      <h3 className="text-sm text-gray-400">Welcome Bitch</h3>
    </div>
    <button onClick={signOut} className="text-blue-400 text-sm">Sign Out</button>
    </div>
  )
}

export default MiniProfile