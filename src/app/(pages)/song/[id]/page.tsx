import Cardsong from "@/app/components/card/cardsong";
import Title from "@/app/components/title/title";

import Songlist2 from "@/app/components/song/songlist2";
import Section2 from "./section2";
import { onValue, ref } from "firebase/database";
import { dataFirebase } from "@/app/firebaseConfig";
import Section3 from "./section3";
import { notFound } from "next/navigation";



export default async function chitietbaihat({params } : {params : { id : string }}) {
  

    const result : any = await new Promise((resolver) => {
      const songsRef = ref(dataFirebase, `songs/${params.id}`)
          onValue(songsRef , (snapshot) => {
            const data = snapshot.val();
            resolver(data)
          })

    })
    console.log(result)
    
    if (!result){
      notFound();
    }

    
   
    return (
        <>
          {/* cradinfo */}
            <Cardsong
                image= {result.image}
                title = {result.title}
                desc= ""
            />
          {/* end cradinfo */}

          {/* section2 */}
            <Section2 lyric={result.lyric} />
          {/* end section2 */}

            <div className="mt-[30px]">
                <Title text="Bài Hát Cùng Danh Mục" />
                <Section3 categoryId  = {result.categoryId} 
                          songId = {params.id}
                
                                      
                />
            </div>

        </>
    );
  }