 "use client"
 import Link from "next/link";
 import Image from "next/image";
 import {useState, useEffect} from "react";
 import {signIn, signOut, useSession, getProviders} from "next-auth/react";
import { set } from "mongoose";


const Nav = () => {
  const isLoggedIn = true;
  const [providers, setProviders] = useState(null)
  const [toggle, setToggle] = useState(false)
  useEffect(() => {
    const setProviders = async () => {
      const response = await getProviders()
      setProviders(response)  
    }
    setProviders()  
  }, [])
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <div className="h-35 w-35 rounded-full bg-blue-500">
          <div className="bg-yellow-500 h-20 w-20 rounded-full text-white" >G</div>
        </div>
        <p className="logo_text">NextGen</p>
      </Link>
      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        {isLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn" >
              Create Post
            </Link>
            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>
            <Link href="/profile">
            👤
            </Link>
          </div>
        ): 
        (<>
        {providers && Object.values(providers).map((provider) => (  
          <button key={provider.name} onClick={() => signIn(provider.id)} className="black_btn">
            Sign in with {provider.name}
          </button>
        )
        )}
        </>)}

      </div> 
      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        {isLoggedIn ? (
          <div className="flex bg-blue-300 rounded-full p-2" 
          onClick={()=>setToggle((prev)=> !prev)}>
            👤
            {toggle && (
            <div className="dropdown">
            <Link href="/profile" className="dropdown_link"
            onClick={()=>setToggle(false)}> My Profile</Link>
            <Link href="/create-prompt" className="dropdown_link"
            onClick={()=>setToggle(false)}> Create Prompt</Link>
            <button type="button" onClick={()=>{
              setToggle(false) 
              signOut()
            }} className="mt-5 w-full black_btn">Sign Out</button>
            </div>
          )}

          </div>
          
        ) : 
        (<>
        {providers && Object.values(providers).map((provider) => (  
          <button key={provider.name} onClick={() => signIn(provider.id)} className="black_btn">
            Sign in with {provider.name}
          </button>
        )
        )}
        </>)}
      </div>
    </nav>
  )
}

export default Nav