import PostList from "@/app/components/postersong/posterSongList";
import Title from "@/app/components/title/title";
import axios from "axios";
export default async function Section2(){
    const api_host = process.env.NEXT_PUBLIC_API_HOST;
    const res = await axios.get(`${api_host}/client/topics/trending`)
    const data = res.data.data;
    const result = data.map((item:any) => ({
        image : item.avatar,
        title : item.title,
        desc : item.description || "Chưa có mô tả",
        link : `/categories/${item._id}`
    }))

    return(
        <>
        
            <div className="mt-[30px] ">
                <Title text="Danh Mục Nổi Bật" />            
                <PostList data = {result} />
            </div>
        </>
    );
}