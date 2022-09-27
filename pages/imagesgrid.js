import Image from 'next/image';
import { useEffect, useState } from 'react';
import img1 from "../public/img1.jpg"
import img2 from "../public/img2.jpg"
import img3 from "../public/img3.jpg"
import img4 from "../public/img4.jpg"
import img5 from "../public/img5.jpg"
import img6 from "../public/img6.jpg"
import img7 from "../public/img7.jpg"
var inter;
export default function ImagesGrid(props) {
    const imgArray = [img1, img2, img3, img4, img5, img6, img7];
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [num3, setNum3] = useState(0);
    const [num4, setNum4] = useState(0);
    const [num5, setNum5] = useState(0);
    const nums = [num1, num2, num3, num4, num5];
    const numsFunc = [setNum1, setNum2, setNum3, setNum4, setNum5];
    var curr = 0;
    
    const Row = (imgSrc, Rid) => {
        return (
        <div className="flex" id={Rid}>
            <Image src={imgSrc} height={100} width={100}/>
            <Image src={imgSrc} height={100} width={100}/>
            <Image src={imgSrc} height={100} width={100}/>
            <Image src={imgSrc} height={100} width={100}/>
            <Image src={imgSrc} height={100} width={100}/>
        </div>
        )
    }
    useEffect(_ => {
        if (props.triggered) {
        inter = setInterval(_ => {
            numsFunc[curr](Math.round(Math.random()*6));
            curr == 4 ? curr = 0 : curr = curr + 1;
        props.setNumberPrinted(numberPrinted => numberPrinted + 5);
        }, 450);
        
    } else {
        clearInterval(inter);
    }
    return() => {clearInterval(inter)}}, [props.triggered]);
    return (
       <div>
        {Row(imgArray[num1].src, "r1")}
        {Row(imgArray[num2].src, "r2")}
        {Row(imgArray[num3].src, "r3")}
        {Row(imgArray[num4].src, "r4")}
        {Row(imgArray[num5].src, "r5")}
       </div> 
    );
}