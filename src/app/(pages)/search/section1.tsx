"use client"

import Songlist2 from "@/app/components/song/songlist2";
import Title from "@/app/components/title/title";
import { dataFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
export default function Section1() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const keywordDefault = searchParams.get("keyword") || "";
    const [data, setData] = useState([]);


    useEffect(() => {
        const fetchApi = async () => {
            let result: any = await new Promise((resolver) => {
                const songRef = ref(dataFirebase, "songs");
                onValue(songRef, async (snapshot) => {
                    const data: any = [];
                    for (const key in snapshot.val()) {

                        const value = snapshot.val()[key];
                        data.push({
                            id: key,
                            title: value.title,
                            image: value.image,
                            audio: value.audio,
                            listen: value.listen,
                            link: `/song/${key}`
                        })
                    }
                    resolver(data)
                })
            });
            const regex = new RegExp(keywordDefault, "i");
            result = result.filter((item: any) => regex.test(item.title))
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