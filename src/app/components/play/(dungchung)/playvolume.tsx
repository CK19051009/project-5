"use client"

import { IoVolumeHighOutline } from "react-icons/io5";

export default function PlayVolume() {


    const handleChange = (event: any) => {
        event.preventDefault();
        const elementPlayAudio: any = document.querySelector(".inner-box-play");
        const playAudio = elementPlayAudio?.querySelector(".inner-audio");

        playAudio.volume = parseFloat(event.target.value)/100
        const volumeCurrent: any = document.querySelector(".box-volume .inner-current");
        volumeCurrent.style.width = `${event.target.value}%`

    }


    return (

        <div className="w-[184px] flex items-end box-volume">
            <button className="text-[16px] text-white">
                <IoVolumeHighOutline />
            </button>
            <div className="ml-[6px] relative">
                <div className="h-[3px] w-[0] bg-primary rounded-[50px] absolute left-0 top-[14px] inner-current"></div>
                {/* để tạo được hiệu ứng chạy nhạc ta tạo thẻ input có kiểu range */}
                <input
                    type="range"
                    min={0}
                    max={100}
                    defaultValue={100}

                    className="w-full h-[3px] bg-[#FFFFFF1A] appearance-none rounded-[50px] cursor-pointer range-sm inner-total"
                    onChange={handleChange}
                />
            </div>
        </div>
    );
}