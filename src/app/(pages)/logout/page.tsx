"use client"
import axios from "axios";
import { log } from "console";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuthen } from "@/app/context/AppProvider";
export default function LogoutPage () {
    
    const router = useRouter();
    const {token,setToken} = useAuthen()
    const api_host = process.env.NEXT_PUBLIC_API_HOST;
    useEffect(() =>  {
          try {
            const logout = async () => {
              const res = await axios.get(`${api_host}/client/authen/logout`)
              if(res.data.success){
                Cookies.remove("authToken")
                setToken(null)
                // router.push("/login")
                window.location.href = "/login";
              }
              else{
                alert("Lỗi hãy thử lại")
              }
            }
            logout();
          } catch (error:any) {
              // Xử lý lỗi khi gọi API
              console.error("Error during registration:", error.response?.data || error.message);
              alert("Đăng xuất thất bại. Vui lòng thử lại!");
          }

    }, [router, setToken])
    // console.log("Logout ",token)
    return (

        <>
        </>
    );
}