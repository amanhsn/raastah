'use client'

import React from 'react'
import { useRouter } from 'next/navigation';

const HomePage = () => {
    const router = useRouter();
    const handleClick = () => {
        router.push('/home')
    }
    const handleRClick = () => {
        router.push('/routing.html')
    }
    const handleSClick = () => {
        router.push('/shortestpath.html')
    }
    const handleAClick = () => {
        router.push('/about')
    }
  return (
    <div className="flex justify-start items-start relative overflow-hidden gap-2.5 bg-white">
  <img
    src="raastah_bg-3.png"
    className="flex-grow-0 flex-shrink-0 w-full h-[1639px] object-cover"
  />
  <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[355px] h-[68px] absolute left-[418px] top-[648px] gap-8" />
  <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 absolute left-[62px] top-[46px] gap-8">
    <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[1280px] overflow-hidden gap-2.5 p-2.5 bg-gradient-to-b from-white to-white/0">
      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-16">
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5">
          <img
            src="raastah_logo-2.png"
            className="flex-grow-0 flex-shrink-0 w-[118px] h-[63px] object-none"
          />
        </div>
        <div className="flex justify-start items-end flex-grow-0 flex-shrink-0 gap-8">
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative cursor-pointer"
          onClick={handleClick}>
            <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-black">
              Home
            </p>
          </div>
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative cursor-pointer"
          onClick={handleRClick}>
            <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-black">
              Routing
            </p>
          </div>
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative cursor-pointer"
          onClick={handleSClick}>
            <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-black">
              Shortest Path
            </p>
          </div>
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative cursor-pointer"
          onClick={handleAClick}>
            <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-black">
              About us
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[1280px] gap-16">
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-8">
        <p className="flex-grow-0 flex-shrink-0 text-[56px] font-bold text-left text-white">
          RAASTAH
        </p>
        <p className="flex-grow-0 flex-shrink-0 text-[56px] font-bold text-left text-white">
          <span className="flex-grow-0 flex-shrink-0 text-[56px] font-bold text-left text-white">
            Navigation your journey,
          </span>
          <br />
          <span className="flex-grow-0 flex-shrink-0 text-[56px] font-bold text-left text-white">
            illuminating your path
          </span>
        </p>
      </div>
      <div className="flex justify-start items-start flex-grow relative gap-2.5 p-2.5">
        <img
          src="maps,-location-marker-and-navigation.png"
          className="flex-grow-0 flex-shrink-0 w-[542px] h-[542px] object-contain"
        />
      </div>
    </div>
    <div className="flex-grow-0 flex-shrink-0 w-[1315px] h-[773px] relative">
      <div className="flex justify-center items-center absolute left-[480px] top-16">
        <p className="flex-grow-0 flex-shrink-0 text-[56px] font-bold text-left text-white">
          Our Services
        </p>
      </div>
      <div className="flex justify-start items-start absolute left-0 top-[196px] gap-[116px]">
        <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 overflow-hidden gap-2.5 px-[132px] py-[46px] rounded-[64px] bg-gradient-to-t from-white to-white/0 border-[3px] border-black/40 cursor-pointer"
        onClick={handleRClick}>
          <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative gap-16">
            <img
              src="map-navigation-mobile-app.png"
              className="flex-grow-0 flex-shrink-0 w-[335px] h-[362px] object-contain"
            />
            <p className="flex-grow-0 flex-shrink-0 text-5xl font-bold text-left text-black">
              Routing
            </p>
          </div>
        </div>
        <div className="flex-grow-0 flex-shrink-0 w-[600px] h-[577px] relative overflow-hidden rounded-[64px] bg-gradient-to-t from-white to-white/0 border-[3px] border-black/40 cursor-pointer"
        onClick={handleSClick}>
          <div className="flex flex-col justify-start items-center absolute left-[68px] top-[47px] gap-16">
            <img
              src="map-with-navigation.png"
              className="flex-grow-0 flex-shrink-0 w-[340px] h-[362px] object-contain"
            />
            <p className="flex-grow-0 flex-shrink-0 text-5xl font-bold text-left text-black">
              Shortest Pathfinder
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default HomePage;