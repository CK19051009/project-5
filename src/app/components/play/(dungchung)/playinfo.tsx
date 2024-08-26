export default function PlayInfo() {

    return (
        <>
            <div className=" flex items-center">
                        <div className="w-[49px] aspect-square rounded-[14px] truncate">
                            <img
                                src=""
                                alt=""
                                className="w-full h-full object-cover inner-image"
                             
                            />
                        </div>
                        <div className="ml-[13px] ">
                            <div className="font-bold text-white text-[14px] line-clamp-1 inner-title"></div>
                            <div className="font-bold text-[#FFFFFF70] text-[12px] line-clamp-1 inner-singer"></div>
                        </div>
            </div>
        </>
    );
}