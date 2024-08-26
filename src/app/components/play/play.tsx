

import PlayInfo from "./(dungchung)/playinfo";
import PlayActions from "./(dungchung)/playactions";
import PlayTime from "./(dungchung)/playtime";
import PlayVolume from "./(dungchung)/playvolume";
import PlayAudio from "./(dungchung)/playaudio";

export default function Play() {


    return (

        <>
            <div className="bg-[#212121] fixed z-[900] py-[20px] w-full bottom-0 left-0 border-[#494949] border-t hidden inner-box-play">
                <PlayAudio />
                <div className="container mx-auto flex items-center justify-between">


                    {/* info song */}
                    <PlayInfo />
                    {/* end info song */}

                    {/* listen */}
                    <div className="flex-1 mx-[66px]">
                        <PlayActions />
                        <PlayTime />

                    </div>
                    {/* end listen */}
                    {/* volume */}
                    <PlayVolume />
                    {/* end volume */}
                </div>
            </div>
        </>
    );
}


