import Songlist2 from "@/app/components/song/songlist2";
import Title from "@/app/components/title/title";
import axios from "axios";
export default async function Section2(props: { singerId: string }) {
  const { singerId } = props;
  const api_host = process.env.NEXT_PUBLIC_API_HOST;

  const res = await axios.get(
    `${api_host}/client/songs/singer/${singerId}`
  );
  const data = res.data.data;
  const result: any = data.map((item: any) => ({
    id: item._id,
    title: item.title,
    image: item.thumbnail[0],
    audio: item.audio[0],
    listen: item.listen,
    link: `/song/${item._id}`,
    wishlist: item.like,
    singer: item.singers,
  }));
  return (
    <>
      <div className="mt-[30px]">
        <Title text="Danh Sách Bài Hát" />
        <Songlist2 data={result} />
      </div>
    </>
  );
}
