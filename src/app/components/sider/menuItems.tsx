import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
interface Menu {
    icon : ReactNode,
    title : string,
    link : Url,
    flag?: Boolean
}
export default function MenuItems (props :{item : Menu , iShow : Boolean}) {
    const {item , iShow = false} = props;
  

    const pathname = usePathname();
    return(

        <>

            {iShow &&
                <li  className="mb-[30px]">
                    <Link 
                        href={item.link} 
                        className={
                            "flex items-center hover:text-primary " +
                            (item.link === pathname ? "text-primary" : "text-white")
                        }
                    >
                        <span className="text-[24px] mr-[20px]">
                            {item.icon}
                        </span>                        
                        <span className="font-[700] text-[16px]">
                            {item.title}
                        </span>                        
                    
                    </Link>
                </li>
            
            }
           
        </>
    )
}