import Songlist2 from "@/app/components/song/songlist2";
import Title from "@/app/components/title/title";
import { dataFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";

export default async function Section2 (props : {singerId : any}) {

    const {singerId} = props;
    let result : any = await new Promise((serolver) => {
        const songRef = ref(dataFirebase , "songs");

        onValue(songRef , async (snapshot) => {
            const data : any = []
            for (const key in snapshot.val()){
                const value = snapshot.val()[key]

                if (value.singerId.includes(singerId) // lấy ra danh mục id cá dĩ sáng tác bài hát 
                ){
                    data.push({
                        id : key,
                        title: value.title,
                        image : value.image,
                        audio : value.audio,
                        listen : value.listen,
                        link : `/song/${key}`,
                        wishlist: value.wishlist,
                        singer : value.singer
                    })
                }
                
            }

            serolver(data)
        });
    });
    console.log(result)
    return (
          <>
             <div className="mt-[30px]">
                  <Title text="Danh Sách Bài Hát" />
                  <Songlist2 data = {result}/>
              </div>
          </>
    );
    }
