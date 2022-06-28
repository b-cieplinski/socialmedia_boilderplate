import React from 'react'
import Image from 'next/image'
import { SearchIcon, PlusIcon, UserGroupIcon, HeartIcon, PaperAirplaneIcon, MenuIcon, HomeIcon } from '@heroicons/react/solid'
import { signIn, useSession, signOut } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'



const Header = () => {

    const {data: session} = useSession();
    const [open, setOpen] = useRecoilState(modalState);
    const router = useRouter();

  return (
      <div className=" bg-white py-1">
      <div className="flex ">
    <div onClick={() => router.push('/')} className="max-w-6xl flex justify-between mx-5 xl:mx-auto">
    <div className="relative w-24  hidden lg:inline-grid cursor-pointer">
        <Image objectFit="contain" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2880px-Instagram_logo.svg.png" layout="fill"/>
    </div>
    <div className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer">
        <Image objectFit="contain" src="https://1000logos.net/wp-content/uploads/2017/02/insta-logo.png" layout="fill"/>
    </div>
    </div>
<div className="max-w-xs">
<div className="flex mt-1 relative p-3 rounded-md ">
    <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
<SearchIcon className="h-5 w-5 text-gray-500"/>
    </div>
    <input className="bg-gray-50 focus:ring-black focus:border-black block w-full pl-10 sm:text-sm border-gray-300 rounded-md" placeholder="Search" type="text"></input>
</div>
</div>

<div className="flex justify-end items-center space-x-4">
    <HomeIcon className="navbtn"/>
    <MenuIcon className="h-6 md:hidden cursor-pointer "/>
    <PlusIcon className="navbtn" onClick={() => setOpen(true)}/>
    <PaperAirplaneIcon className="navbtn" />
    
</div>

{session ? (<>
    <div>
    <img onClick={signOut} src={session?.user?.image} className="rounded-full h-10 w-10 cursor pointer"/>
    </div>
    </>
):(
    <div>
        <button onClick={signIn}>Sign in</button>
    </div>
)}




    </div>
    </div>
  )
}

export default Header