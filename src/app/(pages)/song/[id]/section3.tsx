import Songlist2 from "@/app/components/song/songlist2";
import axios from "axios";

export default async function Section3(props: {
  categoryId: string;
  songId: string;
}) {
  const { categoryId = "", songId = "" } = props;
  const api_host = process.env.NEXT_PUBLIC_API_HOST;
  const res = await axios.get(
    `${api_host}/client/songs/topic/${categoryId}`
  );
  const result: any = res.data.data.map((item: any) => ({
    id: item._id,
    image: item.thumbnail[0],
    title: item.title,
    link: `/song/${item._id}`,
    audio: item.audio,
    singer: item.singers,
  }));

  return (
    <>
      <Songlist2 data={result} />
    </>
  );
}
