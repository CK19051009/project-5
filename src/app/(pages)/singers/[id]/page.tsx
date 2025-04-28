import Cardsong from "@/app/components/card/cardsong";
import Section2 from "./section2";
import axios from "axios";

export default async function Chitietcasi({
  params,
}: {
  params: { id: string };
}) {
  const api_host = process.env.NEXT_PUBLIC_API_HOST;
  
  const res = await axios.get(
    `${api_host}/client/singers/detail/${params.id}`
  );
  const data = res.data.data;

  return (
    <>
      <Cardsong
        image={data.avatar}
        title={data.fullName}
        desc={data.description}
      />
      <Section2 singerId={params.id} />
    </>
  );
}
