 "use client"
 import Link from "next/link";
 import Image from "next/image";
 import {useState, useEffect} from "react";
 import {signIn, signOut, useSession, getProviders} from "next-auth/react";


const Nav = () => {
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <div className="bg-blue-500 w-30 h-30 rounded-full">
          <div className="bg-yellow-500" h-20 w-20 rounded-full>G</div>
        </div>
        <h1 className="head_text">NextGen</h1>
      </Link>
    </nav>
  )
}

export default Nav