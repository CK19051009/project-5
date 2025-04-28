import PostList from "@/app/components/postersong/posterSongList";
import Title from "@/app/components/title/title";
// import { dataFirebase } from "@/app/firebaseConfig";
// import { onValue, ref } from "firebase/database";
// import { useState } from "react";
import axios from "axios";
export default async function Section1() {
  const api_host = process.env.NEXT_PUBLIC_API_HOST;
  const res = await axios.get(`${api_host}/client/singers`);
  const data = res.data.data;
  const array = data.map((item: any) => ({
    id: item._id,
    image: item.avatar || "",
    title: item.fullName,
    desc: item.description || "Chưa thêm mô tả",
    link: `singers/${item._id}`,
  }));
  return (
    <>
      <div className=" mt-[30px]">
        <Title text="Danh Sách Ca Sĩ" />

        <PostList data={array} />
      </div>
    </>
  );
}
