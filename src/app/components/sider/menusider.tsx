"use client"
import { Url } from "next/dist/shared/lib/router/router";

import { ReactNode, useEffect, useState } from "react";
import { FaHeart, FaHouse, FaMusic, FaPodcast, FaRightFromBracket, FaUser, FaUserPlus } from "react-icons/fa6";
import MenuItems from "./menuItems";
import { onAuthStateChanged } from "firebase/auth";
import { authFirebase } from "@/app/firebaseConfig";

export default function MenuSider() {

    const [isLogin , setIsLogin] = useState<boolean>();
    useEffect(() => {

      onAuthStateChanged(authFirebase , (user) =>{
 
        if(user){
           setIsLogin(true)
        
        }
        else{
           setIsLogin(false)
        }
    
    });
    }, [])


    interface Menu {
        icon : ReactNode,
        title : string,
        link : Url,
        flag?: Boolean
    }
    const menu : Menu[] = [
            {
            icon: <FaHouse />,
            title: "Trang Chủ",
            link: "/"
          },
          {
            icon: <FaMusic />,
            title: "Danh mục bài hát",
            link: "/categories"
          },
          {
            icon: <FaPodcast />,
            title: "Ca sĩ",
            link: "/singers"
          },
          {
            icon: <FaHeart />,
            title: "Bài hát yêu thích",
            link: "/wishlist",
            flag : true
          },
          {
            icon: <FaRightFromBracket />,
            title: "Đăng xuất",
            link: "/logout",
            flag: true 
          },
          {
            icon: <FaUser />,
            title: "Đăng nhập",
            link: "/login",
            flag: false
          },
          {
            icon: <FaUserPlus />,
            title: "Đăng ký",
            link: "/register",
            flag:false
          }
    ]

    return (

        <>
           <nav className="px-[20px]">
                <ul>

                    {menu.map((item , index) => (
                       <MenuItems key={index}  item={item}

                       iShow = {
                          item.flag === undefined || item.flag === isLogin ? true : false
                       }

                       
                       
                       
                       />
                    ))}
                    
                </ul>
            
            </nav> 
        </>
    );
}