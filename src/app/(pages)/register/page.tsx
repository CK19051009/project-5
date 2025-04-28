
"use client"
import Button from "@/app/components/button/button";
import FormInput from "@/app/components/form/forminput";
import Title from "@/app/components/title/title";
import axios from "axios";
import { useRouter } from "next/navigation";
import Cookies from 'js-cookie';
export default function RegisterPage() {
  const api_host = process.env.NEXT_PUBLIC_API_HOST;
  const router = useRouter();
  const handleRegister = async (event : React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = event.currentTarget;
    const data = {
      fullName: formData.Fullname.value,
      email: formData.email.value,
      password: formData.password.value
    };

    try {
      const res = await axios.post(
        `${api_host}/client/authen/register`,
        data
      );
      // console.log(res.data)
      if (res.data.success && res.data.token) {
        Cookies.set("authToken", res.data.token);
        router.push("/");
      } else {
        alert("Đăng ký thất bại: " + res.data.message);
      }
    } catch (error: any) {
           // Xử lý lỗi khi gọi API
           console.error("Error during registration:", error.response?.data || error.message);
           alert("Đăng ký thất bại. Vui lòng thử lại!");
    }
  }
  return (
    <>
      <div className="mx-auto w-[500px] mt-[60px]">

        <Title
          className="text-center"
          text="Đăng Ký Tài Khoản"

        />

        <form onSubmit={handleRegister} className="mt-[20px]">
          <FormInput
            label="fullName"
            type="text"
            name="Fullname"
            placeholder="le van a"
            required={true}
            id="fullName"



          />
          <FormInput
            label="Email"
            type="Email"
            name="email"
            placeholder="Ví dụ: levana@gmail.com"
            required={true}
            id="Email"



          />
          <FormInput
            label="Password"
            type="Password"
            name="password"
            placeholder=""
            required={true}
            id="Password"

          />
          <Button text="Đăng ký" />
        </form>
      </div>
    </>
  );
}