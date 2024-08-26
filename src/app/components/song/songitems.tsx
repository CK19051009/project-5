import ButtonPlay from "../button/buttonPlay";
import ButtonHeart from "../button/buttonHeart";
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
                        <img src={image}
                            className="w-[76px] h-[76px] object-cover truncate aspect-square rounded-[15px]"
                            alt={title} />
                        <div className="ml-[10px] flex-1">
                            <div className="font-[600] text-[16px]  text-white mb-[3px]">{title}</div>
                            <div className="font-[400] text-[12px] text-[#ffffff80] mb-[5px] ">{singer}</div>
                            <div className="font-[400] text-[12px] text-white">{listen.toLocaleString()} lượt nghe</div>
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