import Cardsong from "@/app/components/card/cardsong";
import Title from "@/app/components/title/title";
import Section2 from "./section2";
import Section3 from "./section3";
import { notFound } from "next/navigation";
import axios from "axios";

export default async function chitietbaihat({
  params,
}: {
  params: { id: string };
}) {
  const api_host = process.env.NEXT_PUBLIC_API_HOST;

  const res = await axios.get(
    `${api_host}/client/songs/detail/${params.id}`
  );
  const data = res.data.data;
  if (!data) {
    notFound();
  }

  return (
    <>
      {/* cradinfo */}
      <Cardsong
        image={data[0].thumbnail[0]}
        title={data[0].title}
        desc={data[0].description || "Chưa có mô tả"}
      />
      {/* end cradinfo */}
      {/* section2 */}
      <Section2 lyric={data[0].lyric} />
      {/* end section2 */}

      <div className="mt-[30px]">
        <Title text="Bài Hát Cùng Danh Mục" />
        <Section3 categoryId={data[0].topic_id} songId={params.id} />
      </div>
    </>
  );
}
