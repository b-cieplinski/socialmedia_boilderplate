import React from 'react'
import { getProviders, signIn } from "next-auth/react"
import Header from '../../components/Header'

//Browser render
function signin({ providers }) {
  return (
<>
<Header/>
<div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center">
    <img className="w-80" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2880px-Instagram_logo.svg.png" />
<div className="mt-40">
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button className="p-3 bg-blue-400 text-white rounded-lg" onClick={() => signIn(provider.id, {callbackUrl: '/'})}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
      </div>
      </div>
    </>
  )
}

//SSR
export async function getServerSideProps() {
    const providers = await getProviders()
    return {
      props: { providers },
    }
  }

export default signin