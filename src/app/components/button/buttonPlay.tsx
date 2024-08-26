"use client"

import { FaPlay } from "react-icons/fa6";

export default function ButtonPlay(props: any) {
    const handlePlay = () => {
        const elementPlayAudio: any = document.querySelector(".inner-box-play");
        // Chèn song-id

        elementPlayAudio.setAttribute("song-id" , props.id);

        // hiển thị khối play
        if (elementPlayAudio.classList.contains("hidden")) {
            elementPlayAudio.classList.remove("hidden")
        }

        // hiển thị tính năng nghe nhạc
        const playAudio = elementPlayAudio?.querySelector(".inner-audio");
        const playSource = elementPlayAudio?.querySelector(".inner-source");
        playSource.src = props.audio;

        playAudio.load();
        playAudio.play();

        // Hiển thị ảnh

        const elementImage = elementPlayAudio?.querySelector(".inner-image");
        elementImage.src = props.image;
        elementImage.alt = props.title;
        // Hiển thị tiêu đề
        const elementTitle = elementPlayAudio?.querySelector(".inner-title");
        elementTitle.innerHTML = props.title;


        const elementSingers = elementPlayAudio?.querySelector(".inner-singer");
        console.log(elementSingers)
        elementSingers.innerHTML = props.singer;



        // Thêm class play cho box-button-play

        const boxButtonPlay = document.querySelector(".box-button-play");
        boxButtonPlay?.classList.add("play");

        const boxplaytime: any = document.querySelector(".box-play-time");
        const playtotal = boxplaytime?.querySelector(".inner-total");
        const playcurrent = boxplaytime?.querySelector(".inner-current");

        // Lấy ra tổng thời gian
        playAudio.onloadedmetadata = () => {
            const totalTime = playAudio.duration;
            playtotal.max = totalTime;


            // Lấy ra thời gian hiện tại
            playAudio.ontimeupdate = () => {
                const currentTime = playAudio.currentTime;
                playtotal.value = currentTime;


                const percent = currentTime * 100 / totalTime;
                playcurrent.style.width = `${percent}%`
            }
        }















    }
    return (

        <>
            <button onClick={handlePlay} 
                className= {props.className + "  inner-button-play"}
            
                        
            >
                <FaPlay />

            </button>
        </>
    )
}