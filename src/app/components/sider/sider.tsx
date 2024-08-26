
import Link from "next/link";
import MenuSider from "./menusider";

export default function Sider() {


    return (

        <>
            <div className="bg-[#212121] h-[100vh] fixed w-[280px] ">
                <div className="bg-[#1C1C1C] py-[25px] px-[20px] mb-[30px]">
                    <Link href="/">
                        <img 
                            src="/logo_28tech.svg"
                            alt="logo"
                            className="w-auto h-[42px]"
                        
                        />
                    </Link>
                </div>
                <MenuSider />
            </div>   
        </>
    );
}