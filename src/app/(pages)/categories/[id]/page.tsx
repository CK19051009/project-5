import Cardsong from "@/app/components/card/cardsong";

import Section2 from "./section2";

import axios from "axios";


export default async function SongsCategoriesPage({params } : {params : { id : string}} ) {
  const api_host = process.env.NEXT_PUBLIC_API_HOST;
  const res = await axios.get(`${api_host}/client/topics/detail/${params.id}`)
  const data = res.data.data;

    return (
        <>
          <div className="">
              <Cardsong 
                image ={data.avatar}
                title = {data.title}
                desc = {data.description}
                link = ""
              />
              {/* section2 */}
              
              <Section2 id = {params.id}/>
              {/* end section2 */}




          </div>


        </>
    );
  }