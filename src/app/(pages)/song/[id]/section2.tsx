import Title from "@/app/components/title/title";


export default function Section2(props: { lyric: string }) {

    const {
        lyric = " "
    } = props;
    return (
        <>
            <div className="mt-[30px]">
                <Title text="Lời Bài Hát" />

                <div className="bg-[#212121] mt-[20px] rounded-[15px] p-[20px]">
                    <div className="text-white font-[500] text-[14px] whitespace-pre-line ">
                        {lyric}
                    </div>
                </div>


            </div>
        </>
    )
}