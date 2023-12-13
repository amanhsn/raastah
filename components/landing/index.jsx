'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

const Landing = () => {

    const router = useRouter()
    const handleClick = () => {
        router.push('/home')
    }
  return (
    <div className="w-full h-[763px] relative overflow-hidden bg-white">
  <img
    src="/raastah_bg-1.png"
    className="w-full h-full absolute left-[-1px] top-[-1px]  object-cover"
  />
  <div className="w-[705px] h-[635px] absolute left-[409px] top-[140px] overflow-hidden rounded-tl-[64px] rounded-tr-[64px] bg-gradient-to-b from-white to-white/0" />
  <div className="flex flex-col justify-start items-center absolute left-[570px] top-[173px] gap-16">
    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-8">
      <img
        src="/raastah_logo.png"
        className="flex-grow-0 flex-shrink-0 w-[383px] h-[202px] object-none"
      />
      <p className="flex-grow-0 flex-shrink-0 text-left">
        <span className="flex-grow-0 flex-shrink-0 text-base text-left text-black/60">
          End Semester Data Structures &amp; Algorithim Project
        </span>
        <span className="flex-grow-0 flex-shrink-0 text-xs text-left text-black"> </span>
      </p>
    </div>
    <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[225px] relative overflow-hidden px-6 py-3.5 rounded-md bg-black cursor-pointer"
    onClick={handleClick}>
      <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-white">
        Begin
      </p>
    </div>
  </div>
</div>
  )
}

export default Landing;