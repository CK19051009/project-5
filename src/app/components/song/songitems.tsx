import ButtonPlay from "../button/buttonPlay";
import ButtonHeart from "../button/buttonHeart";
import Image from "next/image";
export default function SongItems(props : any) {

    const {
        id ="",
        image = "",
        title = "",
        singer = "",
        listen = "",
        audio = "",
        wishlist =""
        
    } = props;

    return(
        <>

                <div className="flex justify-between items-center bg-[#212121]  px-[10px] py-[10px]  rounded-[15px] "
                    song-id={id}
                >
                    <div className="flex">
                        <Image src={image}
                            className="w-[76px] h-[76px] object-cover truncate aspect-square rounded-[15px]"
                            alt={title}
                            height={76}
                            width={76}    
                        />
                        <div className="ml-[10px] flex-1">
                            <div className="md:font-[600] md:text-[16px] font-[500] text-[14px]   text-white mb-[3px] line-clamp-1">{title}</div>
                            <div className="md:font-[400] md:text-[12px] font-[500] text-[14px] text-[#ffffff80] mb-[5px] ">{singer}</div>
                            <div className="md:font-[400] md:text-[12px] font-[500] text-[14px] text-white">{listen.toLocaleString()} lượt nghe</div>
                        </div>
                    </div>
                    <div className="">
                        <ButtonPlay {...props} className = "mr-[10px] text-[16px] w-[34px] h-[34px] text-white rounded-full bg-primary inline-flex items-center justify-center"  />
                        <ButtonHeart {...props}/>
                    </div>
                </div>
        </>
    );
}