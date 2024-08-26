
import Link from "next/link";
import ButtonPlay from "../button/buttonPlay";
import ButtonHeart2 from "../button/buttonHeart2";
export default function Songitems2(props : any){
    const {
        image  ="",
        title = "",
        singer = "",
        time = "",
        link = "",
        audio = "",
        wishlist =""


    } = props;
    return(
        <>
            <div className="px-[18px] py-[10px] flex justify-between items-center bg-[#212121] rounded-[15px]">
                    <div className="flex justify-start items-center w-[40%]">
                      {/* <button className="w-[18px] h-[24px] mr-[9px] ">
                        <FaPlay />
                      </button> */}
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
                        <div className="mr-[18px] font-[400] text-center text-[14px] text-white">{time}</div>
                        <ButtonHeart2 {...props} />
                    </div>

                  </div>
        </>
    );
}