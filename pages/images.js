import Image from 'next/image'
import img1 from "../public/img1.jpg"
import img2 from "../public/img2.jpg"
import img3 from "../public/img3.jpg"
import img4 from "../public/img4.jpg"
import img5 from "../public/img5.jpg"
import img6 from "../public/img6.jpg"
import img7 from "../public/img7.jpg"
import React, { useState, useEffect } from 'react';
var inter;
export default function Images(props) {
    const imgArray = [img1, img2, img3, img4, img5, img6, img7];
    //The use state hook provides state in functional components, forcing the DOM to
    //Rerender when I call setCurrImg. 
    const [currImg, setCurrImg] = useState(0);
    //UseEffect is a clean way of running code at mount and running code at demount. Effectively,
    //On render I am calling setInterval, and at derender I am caling clearInterval.
    useEffect(_ => {
    inter = setInterval(_ => {
        var selection = Math.round(Math.random()*6);
        setCurrImg(selection);
    }, 3000)
    return () => {clearInterval(inter)};    
}, []);
    //This useEffect watches for currImg changing and runs checkImg on change. If it's the first image,
    //It will increment times in the parent (setter passed by props.)
    useEffect(_ => {
        checkImg(currImg);
    }, [currImg]);
    function checkImg(val) {
        if (val == 0) {
            props.setTimes(props.times + 1);
        } 
    }
    return (
        <div>
            <div>
                {/*I am using the optimized nextjs image component as opposed to the img tag. It acts very similarly, but offers lazy loading 
                and caches more efficiently. Represented by a span in the dom.*/}
                <Image src={imgArray[currImg].src} alt="Image of an animal" width={500} height={500}/>
            </div>
            <button className="btn btn-primary mx-auto w-full" onClick={() => clearInterval(inter)}>Stop Animation</button>
        </div>
    )
   
}

