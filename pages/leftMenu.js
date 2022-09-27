import Image from 'next/image';
import { useEffect, useState } from 'react';
export default function LeftMenu(props) {
    const [topBtnCn, settopBtnCn] = useState("btn mx-auto w-full my-1 transition-all ease-in-out");
    const [botBtnCn, setbotBtnCn] = useState("btn mx-auto w-full my-1 transition-all ease-in-out");
    const aniMenu = () => {
        if (props.currAni == 0) {
        return (
            <div className="flex-col flex items-center h-full">
                <span>The first image in the array:</span>
                <div className="items-center align-center">
                    <Image src={props.img} width={100} height={100}/>
                </div>
                <span>Was selected {props.times} times.</span>  
            </div>
        )
        } 
        if (props.currAni == 1) {
            return (
            <div className="flex-col flex items-center h-full">
                <span>{props.numberPrinted} images have been printed on the grid.</span>
            </div>
            )
        }
    }
    useEffect(_ => {
        console.log("test");
        if (props.currAni == 0) {
            settopBtnCn("btn mx-auto w-full my-1 transition-all ease-in-out btn-success duration-500");
            setbotBtnCn("btn mx-auto w-full my-1 transition-all ease-in-out btn-error duration-500");
        } else if (props.currAni == 1) {
            settopBtnCn("btn mx-auto w-full my-1 transition-all ease-in-out btn-error duration-500");
            setbotBtnCn("btn mx-auto w-full my-1 transition-all ease-in-out btn-success duration-500");
        }
    }, [props.currAni]);
    return (
    <div className="flex-initial w-[50%] border-gray-700 border-2 bg-base-300 h-full">
        <div className="flex-col flex justify-center items-center h-full">
            {aniMenu()}
            <div className="mt-auto mb-2">
                <button className={topBtnCn} onClick={() => props.changeType(0)}>Show Animation 1</button>
                <button className={botBtnCn} onClick={() => props.changeType(1)}>Show Animation 2</button>
            </div>
            <label className="label cursor-pointer ">
                <span className="label-text px-6">Toggle animation</span>
                <input type="checkbox" className="toggle toggle-primary px-6" defaultChecked onChange={(() => props.switchAni())}/>
            </label>
        </div>
    </div>
    );
}