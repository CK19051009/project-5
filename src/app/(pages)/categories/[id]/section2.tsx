import Songlist2 from "@/app/components/song/songlist2";
import Title from "@/app/components/title/title";
import { dataFirebase } from "@/app/firebaseConfig";

import { equalTo, onValue, orderByChild, query, ref } from "firebase/database";

export default async function Section2(props : {id : string}) {
    const {id} = props;
    let result : any = await new Promise((serolver) => {
        const songRef = ref(dataFirebase , "songs");
        const songQuery = query(songRef , orderByChild("categoryId") , equalTo(id))

        onValue(songQuery , async (snapshot) => {
            const data : any = []
            for (const key in snapshot.val()){
                const value = snapshot.val()[key]


                data.push({
                    id : key,
                    title: value.title,
                    image : value.image,
                    audio : value.audio,
                    listen : value.listen,
                    link : `/song/${key}`,
                    wishlist : value.wishlist
                })
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