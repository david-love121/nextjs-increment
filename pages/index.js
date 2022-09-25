import Images from "./images.js";
import Image from 'next/image';
import img1 from "../public/img1.jpg";
import React, { useState, useEffect } from 'react';
export default function Home() {
  const [times, setTimes] = useState(0);
  return (
    <div className="flex flex-col w-full h-full items-center justify-center">
      <h1 className="text-3xl font-bold underline text-primary">
        Images demonstration
      </h1>
        <Images times={times} setTimes={setTimes}/>
        <span>The first image in the array:</span>
        <Image src={img1.src} width={100} height={100} />
        <span>Was selected {times} times.</span>
    </div>
  )
}

