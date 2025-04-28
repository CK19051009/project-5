"use client";
import { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa6";
import { useAuthen } from "@/app/context/AppProvider";
import axios from "axios";
export default function ButtonHeart(props: any) {
  const { token, wishlist ,setWishlist} = useAuthen();
  const { id } = props;
  const [love, setLove] = useState(false);
  useEffect(() => {
    if (id && wishlist.includes(id)) {
      setLove(true); // Nếu bài hát đã được yêu thích, đặt trạng thái `love` là true
    }
  }, [wishlist, id]);
  const api_host = process.env.NEXT_PUBLIC_API_HOST;
  const handleWishList = async () => {
    try {
      if(token){

        const statusWishList = love ? "dislike" : "like"; // Nếu đã yêu thích thì gọi API dislike, ngược lại gọi like

        const response = await axios.patch(
          `${api_host}/client/songs/wishlist/${statusWishList}/${id}`,
          null,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
  
        if (response.data.success) {
          setLove(!love); // Đổi trạng thái yêu thích
          if (!love) {
            setWishlist([...wishlist, id]);
          } else {
            setWishlist(wishlist.filter((songId) => songId !== id));
          }
        } else {
          alert(response.data.message || "Có lỗi xảy ra!");
        }
      }
      else{
        alert("Bạn phải đang nhập để sử dụng tính năng!")
      }
    } catch (error: any) {
      console.error(
        "Error calling wishlist API:",
        error.response?.data || error.message
      );
      alert("Có lỗi xảy ra khi gọi API!");
    }
  };
  return (
    <>
      <button
        onClick={handleWishList}
        className={
          "text-[16px] w-[34px] h-[34px] text-white border rounded-full  inline-flex items-center justify-center " +
          (love ? "bg-primary border-primary " : "border-white")
        }
      >
        <FaRegHeart />
      </button>
    </>
  );
}
