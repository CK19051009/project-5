import PostList from "@/app/components/postersong/posterSongList";
import Title from "@/app/components/title/title";
import axios from "axios";

export default async function Section1(){
    const api_host = process.env.NEXT_PUBLIC_API_HOST;
    const res = await axios.get(`${api_host}/client/topics`)
    const data = res.data.data;

    const result:any = data.map((item:any) => ({
        id: item._id,
        image : item.avatar,
        title : item.title,
        desc : item.description,
        link : `/categories/${item._id}`,
    }))
    return(
        <>
        
            <div className=" mt-[30px]">
                <Title text="Danh Mục Bài Hát" />
            
                <PostList data = {result} />
            </div>
        </>
    );
}