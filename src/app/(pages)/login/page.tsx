"use client"

import Button from "@/app/components/button/button";
import FormInput from "@/app/components/form/forminput";
import Title from "@/app/components/title/title";
import Cookies from "js-cookie";
import axios from "axios";

import { useRouter } from "next/navigation";

import { useAuthen } from "@/app/context/AppProvider";
export default function LoginPage() {
    const api_host = process.env.NEXT_PUBLIC_API_HOST;
    const {setToken} = useAuthen()
    const router = useRouter();
    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const formData = event.currentTarget;
      const email = formData.Email.value;
      const password = formData.Password.value;
      const data ={
        email : email,
        password : password
      }
      try {
        const res = await axios.post(`${api_host}/client/authen/login`, data)
        console.log(res)
        if (res.data.success && res.data.token){
          Cookies.set("authToken", res.data.token)
          setToken(res.data.token)
        
          router.push("/")
          window.location.href = "/";
          router.refresh();
        }
        else{
          alert("Tài khoản mật khẩu sai!")
        }
      } catch (error:any) {
        // Xử lý lỗi khi gọi API
        console.error("Error during registration:", error.response?.data || error.message);
        alert("Đăng ký thất bại. Vui lòng thử lại!");
      }
    }
    return (
        <>
          <div className=" mx-auto w-[500px] mt-[60px]">
            <Title 
              className="text-center"
              text="Đăng Nhập Tài Khoản"
              
            />

            <form onSubmit={handleLogin} className="mt-[20px]">
              <FormInput 
                label ="Email"
                type = "Email"
                name = "Email"
                placeholder ="Ví dụ: levana@gmail.com"
                required = {true}
                id="Email"
              
              
              
              />
              <FormInput
                   label ="Password"
                   type = "Password"
                   name = "Password"
                   placeholder =""
                   required = {true}
                   id="Password"
              
              />
              <Button text="Đăng Nhập" />
            </form>
          </div> 
        </>
    );
  }