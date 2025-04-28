
import Link from "next/link";
import MenuSider from "./menusider";
import Image from "next/image";

export default function Sider() {


    return (

        <>
            <div className="bg-[#212121] h-[100vh] fixed lg:w-[280px] md:w-[240px]  md:block hidden ">
                <div className="bg-[#1C1C1C] py-[25px] px-[20px] mb-[30px]">
                    <Link href="/">
                        <Image 
                            src="/logo_28tech.svg"
                            alt="logo"
                            height={42}
                            width={42}
                            className="w-auto h-[42px]"
                        
                        />
                    </Link>
                </div>
                <MenuSider />
            </div>   
        </>
    );
}