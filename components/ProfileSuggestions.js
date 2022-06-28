import React from 'react'

const ProfileSuggestions = ({username, userImg}) => {
  return (
    <div className="flex margin-auto py-2 px-4 items-center justify-between ml-14 bg-white border">
        <img className="h-10 w-10 rounded-full" src={userImg} alt={username}/>
        <p className="truncate text-sm text-bold ">{username}</p>
        <button className="text-blue-400 text-sm">Follow</button>
    </div>
  )
}

export default ProfileSuggestions