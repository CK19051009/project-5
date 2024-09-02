"use client"
import Link from "next/link";
import ButtonPlay from "../button/buttonPlay";
import ButtonHeart2 from "../button/buttonHeart2";
import { useEffect, useRef, useState } from "react";
export default function Songitems2(props : any){
    const {
        image  ="",
        title = "",
        singer = "",

        link = "",
        audio = "",
        wishlist =""


    } = props;
    //         const totalTime = playAudio.duration;
    //         playtotal.max = totalTime;
    //         console.log(totalTime)
    // }
    const [timesong, setTimesong] = useState<string>("");
    const audioRef = useRef<HTMLAudioElement | null>(null);
    useEffect(() => {
        const savedTime = localStorage.getItem(`timesong-${audio}`);
        if (savedTime) {
            setTimesong(savedTime);
        }
    }, [audio]);

    useEffect(() => {
        if (audioRef.current) {
            const handleLoadedMetadata = () => {
                if (audioRef.current) {
                    const totalTime = audioRef.current.duration;
                    const minutes = Math.floor(totalTime / 60);
                    const seconds = Math.floor(totalTime % 60);
                    setTimesong(`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`);
                }
            };

            audioRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);

            // Clean up event listener on component unmount
            return () => {
                if (audioRef.current) {
                    audioRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
                }
            };
        }
    }, [audio]);

    return(
        <>
            <div className="px-[18px] py-[10px] flex justify-between items-center bg-[#212121] rounded-[15px]">
                    <div className="flex justify-start items-center w-[40%]">
                      <ButtonPlay {...props}  className = "w-[18px] h-[24px] mr-[9px]" />

                      <Link href={link}>
                          <img src={image}
                              className="w-[42px] object-cover rounded-[15px]"
                              alt={image} />
                      </Link>
                      <div className="font-bold text-[14px] text-white ml-[12px]">{title}</div>
                    </div>

                    <div className="font-[400] text-[14px] text-center text-white w-[30%] ">{singer}</div>
                   
                    <div className="w-[30%] flex items-center justify-end">
                        <div className="mr-[18px] font-[400] text-center text-[14px] text-white">{timesong}</div>
                        <ButtonHeart2 {...props} />
                    </div>
                    <audio ref={audioRef} src={audio} />
                  </div>
        </>
    );
}