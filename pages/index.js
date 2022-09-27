import Images from "./images.js";
import LeftMenu from "./leftMenu.js"
import img1 from "../public/img1.jpg";
import React, { useState, useEffect } from 'react';
import ImagesGrid from "./imagesgrid.js";
export default function Home() {
  const [times, setTimes] = useState(0);
  const [triggered, setTriggered] = useState(true);
  const [currAni, setCurrAni] = useState(0);
  const [numberPrinted, setNumberPrinted] = useState(0);
  const switchAni = () => {
    setTriggered(!triggered);
  }
  const rightCon = _ => {
    if (currAni == 0) {
      return <Images times={times} setTimes={setTimes} triggered={triggered}/>
    } 
    if (currAni == 1) {
      return <ImagesGrid triggered={triggered} setNumberPrinted={setNumberPrinted}/>
    }
  }
  return (
    <div className="flex flex-col w-full h-full items-center justify-center">
      <h1 className="text-3xl font-bold underline text-primary">
        Images demonstration
      </h1>
        <div className="flex w-[85%] mx-auto items-center justify-center">
          <LeftMenu img={img1.src} times={times} switchAni={switchAni} changeType={(val) => setCurrAni(val)} currAni={currAni} numberPrinted={numberPrinted}/>
          {rightCon()}
        </div>
    </div>
  )
}

