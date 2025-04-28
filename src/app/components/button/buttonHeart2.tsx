"use client";
import { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa6";
import { useAuthen } from "@/app/context/AppProvider";
import axios from "axios";
export default function ButtonHeart2(props: any) {
  const { token, wishlist, setWishlist } = useAuthen();
  const { id } = props;
  const [love, setLove] = useState(false);
  useEffect(() => {
    if (id && wishlist.includes(id)) {
      setLove(true); // Nếu bài hát đã được yêu thích, đặt trạng thái `love` là true
    }
  }, [wishlist, id]);
  const handleLove = async () => {
    try {
      if (token) {
        const statusWishList = love ? "dislike" : "like"; // Nếu đã yêu thích thì gọi API dislike, ngược lại gọi like
        console.log(statusWishList);
        const response = await axios.patch(
          `http://localhost:5050/api/v1/client/songs/wishlist/${statusWishList}/${id}`,
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
      } else {
        alert("Bạn phải đang nhập để sử dụng tính năng!");
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
        onClick={handleLove}
        className={
          "text-[20px]  " +
          (love ? "text-primary border-primary " : "border-white")
        }
      >
        <FaRegHeart />
      </button>
    </>
  );
}
