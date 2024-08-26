
import Link from "next/link";

export default function Cardsong(props : any){
    const {
        image = "",
        title = "" ,
        desc = "",
        link = "",

    } = props;

    return(
        <>
              <div className="flex items-center justify-center h-[180px]">
                  <Link href="">
                      <div className="w-[177px] h-full rounded-[15px]">
                        <img src={image} alt=""
                            className="w-full h-full truncate aspect-square rounded-[15px] "
                        />

                      </div>
                  </Link>
                  <div className="ml-[20px] flex-1">
                    <div className="text-primary text-[35px] font-bold mb-[8px]">{title}</div>
                    <div className="font-[400] text-[14px] text-[#EFEEE0]">{desc}
                    </div>
                  </div>
              </div>
        </>
    );
}