"use client"

import Button from "@/app/components/button/button";
import FormInput from "@/app/components/form/forminput";
import Title from "@/app/components/title/title";
import { authFirebase } from "@/app/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";


export default function LoginPage() {
    const router = useRouter();
    const handleLogin = (event:any) => {
      event.preventDefault();
      const email = event.target.Email.value;
      const password = event.target.Password.value;
      signInWithEmailAndPassword(authFirebase, email, password) // hàm cho kiểm tra dữ liệu trong database cho phép chúng ta đang nhâpk
      .then((userCredential) => {
        const user = userCredential.user;
        if(user) {
          router.push("/")
        }
      })
      .catch((error) => {
          alert("Tai khoan mat khau sai")
      });
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