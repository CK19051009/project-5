import BannerPages from "@/app/components/banner/banner";
import SongList from "@/app/components/song/songlist";
import Title from "@/app/components/title/title";
import axios from "axios";
export default async function Section1() {
  const api_host = process.env.NEXT_PUBLIC_API_HOST;
  const res = await axios.get(`${api_host}/client/songs/listens`)
  const data = res.data.data;
  const result = data.map((item:any) => ({
    id: item._id,
    image: item.thumbnail[0],
    listen: item.listen,
    audio: item.audio[0],
    title: item.title,
    singer: item.singers,
    wishlist: item.like,
  }))


  return (
    <>
      <div className="flex items-start  xl:flex-nowrap flex-wrap">
        {/* left */}
        <BannerPages />
        {/* end left */}
        <div className="xl:ml-[20px] md:mt-[0px] mt-[20px] flex-1">
          <Title text="Nghe Nhiều" />
          <SongList data={result} />
        </div>
      </div>
    </>
  );
}
