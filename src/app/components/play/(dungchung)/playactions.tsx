"use client"
import { FaBackwardStep, FaForwardStep, FaPlay } from "react-icons/fa6";
import { FaPause } from "react-icons/fa";

export default function PlayActions () {

    const handlePlayPause = () => {

        const elementPlayAudio : any = document.querySelector(".inner-box-play");
        const boxButtonPlay = elementPlayAudio?.querySelector(".box-button-play");
        const elementAudio = elementPlayAudio?.querySelector(".inner-audio");

        if(boxButtonPlay.classList.contains("play")){
            boxButtonPlay.classList.remove("play");
            elementAudio.pause();//dừng bài hát 
        }
        else{
            boxButtonPlay.classList.add("play");
            elementAudio.play();// phát bài hát 

        }

    }

    const handleNextPrev = (action :string) => {
        const elementPlayAudio: any = document.querySelector(".inner-box-play");
        const id = elementPlayAudio.getAttribute("song-id");


        const songId = document.querySelector(`[song-list] [song-id = "${id}"]`);
        if(songId) {
            switch (action){
                case "Prev":
                    {
                        const songIdPrev = songId.previousElementSibling;
                        if(songIdPrev){
                            const buttonPlay:any = songIdPrev.querySelector(".inner-button-play")
                            buttonPlay.click();
                        }
                        
                    }
                    break
                case "Next":
                    {
                        const songIdNext = songId.nextElementSibling;
                            if(songIdNext){
                                const buttonPlay:any = songIdNext.querySelector(".inner-button-play")
                                buttonPlay.click();
                            }
                            
                    }
                        break
    

            }
        } 
    }

    return (
        <>
            <div className="flex items-center justify-center">
                            <button 
                                onClick={() => handleNextPrev("Prev")}
                                className="text-[16px] text-white">
                                <FaBackwardStep />
                            </button>



                            <button 
                                onClick={handlePlayPause}
                                className="text-[16px] text-white w-[32px] h-[32px] bg-primary rounded-full inline-flex items-center justify-center mx-[42px] box-button-play">
                                <FaPlay className="icon-play" />
                                <FaPause className="icon-pause" />

                            </button>
                            <button className="text-[16px] text-white"
                            
                                onClick={() => handleNextPrev("Next")}
                            >
                                <FaForwardStep />
                            </button>
            </div>
        </>
    );
}