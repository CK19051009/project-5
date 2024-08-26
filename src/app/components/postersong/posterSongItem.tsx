import Link from "next/link";

export default function PostItems(props : any) {
    const {
        image = "",
        title = "",
        desc = "",
        link = ""

    } = props;
    return (
        <>
            <div className="w-[180px] h-auto">
              <Link href={link}>
                    <div className="">
                        <img src={image} alt={title} 
                            className="rounded-[15px] truncate object-cover"
                        />
                    </div>
                    <div className="mt-[10px]">
                        <div className="font-bold mb-[10px] text-white text-[14px]">{title}</div>
                        <div className="font-[400] text-[12px] text-[#ffffff80] line-clamp-1">{desc}</div>
                    </div>
              
              </Link>
                    
            </div>
        </>
    )
}