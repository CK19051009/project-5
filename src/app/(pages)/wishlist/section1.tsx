"use client";
import Songlist2 from "@/app/components/song/songlist2";
import Title from "@/app/components/title/title";
import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useAuthen } from "@/app/context/AppProvider";
export default function Section1() {
  const [data, setData] = useState([]);
  const {wishlist} = useAuthen()
  useEffect(() => {
    const fetchData =  async () => {
        const token = Cookies.get("authToken")
        const api_host = process.env.NEXT_PUBLIC_API_HOST;

        const res = await axios.get(`${api_host}/client/songs/wishlist` , {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        const data = res.data.data;
        const result = data.map((item:any) => ({
            id: item._id,
            title: item.title,
            image: item.thumbnail[0],
            audio: item.audio[0],
            listen: item.listen,
            link: `/song/${item._id}`,
            wishlist: item._id,
            singer: item.singers,
        }))
        setData(result)
    }
    fetchData()
  }, [wishlist]);
  return (
    <>
      <div className="mt-[30px]">
        <Title text="Bài Hát Yêu Thích"/>
        <Songlist2 data={data}/>
      </div>
    </>
  );
}
