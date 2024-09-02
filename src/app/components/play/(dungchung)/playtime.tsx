"use client"
export default function PlayTime() {
    const handleChange = (event:any) => {
        event.preventDefault();
        const onChangeInput = event.target;

        const elementPlayAudio : any = document.querySelector(".inner-box-play");
        const playAudio = elementPlayAudio?.querySelector(".inner-audio");

        playAudio.currentTime = parseFloat(onChangeInput.value)
        console.log(playAudio.currentTime)
        // console.log(elementPlayAudio)

    }
    return (
        <>
            <div className="mt-[11px] relative box-play-time">
                <div className="h-[4px] w-[0] bg-primary rounded-[50px] absolute left-0 top-[13px] inner-current"></div>
                <input
                    type="range"
                    min={0}
                    max={0}
                    defaultValue={0}
                    className="w-full h-[4px] bg-[#FFFFFF0A] appearance-none rounded-[50px] cursor-pointer range-sm inner-total"
                    onChange={handleChange}
                />
            </div>
        </>
    );
}