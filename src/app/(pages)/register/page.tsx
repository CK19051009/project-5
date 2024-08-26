
"use client"
import Button from "@/app/components/button/button";
import FormInput from "@/app/components/form/forminput";
import Title from "@/app/components/title/title";
import { authFirebase, dataFirebase } from "@/app/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import { useRouter } from "next/navigation";

export default function RegisterPage() {

  const router = useRouter();
  const handleRegister = (event: any) => {
    event.preventDefault();
    const fullName = event.target.Fullname.value;
    const email = event.target.Email.value;
    const password = event.target.Password.value;
    createUserWithEmailAndPassword(authFirebase, email, password) // hám trong firebase có thể đọc docs
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          set(ref(dataFirebase, 'users/' + user.uid), {
            fullName: fullName
          }).then(() => {
            router.push("/")
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
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
            name="Email"
            placeholder="Ví dụ: levana@gmail.com"
            required={true}
            id="Email"



          />
          <FormInput
            label="Password"
            type="Password"
            name="Password"
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