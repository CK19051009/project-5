import PostList from "@/app/components/postersong/posterSongList";
import Title from "@/app/components/title/title";
import axios from "axios";
export default async function Section3(){
    const api_host = process.env.NEXT_PUBLIC_API_HOST;
    const res = await axios.get(`${api_host}/client/singers/feature`)
    const data = res.data.data;
    const result: any = data.map((item:any) => ({
        image : item.avatar,
        title : item.fullName,
        desc : item.description || "Chưa có mô tả",
        link: `singers/${item._id}`
    }))
    return(

        <>
             <div className=" mt-[30px]">
                <Title text="Ca Sĩ Nổi Bật" />
            
                <PostList data = {result} />
            </div>

        </>
    );
}