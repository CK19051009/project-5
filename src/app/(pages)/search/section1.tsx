"use client"

import Songlist2 from "@/app/components/song/songlist2";
import Title from "@/app/components/title/title";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
export default function Section1() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const keywordDefault = searchParams.get("keyword") || "";
    const [data, setData] = useState([]);
    const api_host = process.env.NEXT_PUBLIC_API_HOST;

    useEffect(() => {
        const fetchApi = async () => {
            const res = await axios.get(`${api_host}/client/songs/search?keyword=${keywordDefault}`)
            const result = res.data.data.map((item:any) => (
                {
                    id: item._id,
                    title: item.title,
                    image: item.thumbnail[0],
                    audio: item.audio[0],
                    listen: item.listen,
                    link: `/song/${item._id}`,
                    singer : item.singers
                }
            ))
            setData(result)
        }
        fetchApi();


    }, [keywordDefault])
    return (

        <>
            <div className="mt-[30px]">
                <Title text="Kết Quả Tìm Kiếm" />
                <Songlist2 data={data} />
            </div>
        </>
    );
}