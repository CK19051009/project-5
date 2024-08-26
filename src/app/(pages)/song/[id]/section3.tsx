import Songlist2 from "@/app/components/song/songlist2";
import { dataFirebase } from "@/app/firebaseConfig";
import { on } from "events";
import { equalTo, onValue, orderByChild, query, ref } from "firebase/database";

export default async function Section3(props: { categoryId: string, songId: string }) {
    const { categoryId = "",
        songId = ""
    } = props;


    let result: any = await new Promise((resolver) => {

        const songsRef = ref(dataFirebase, "songs");
        const songsQuery = query(songsRef, orderByChild("categoryId"), equalTo(categoryId))
        onValue(songsQuery, async (snapshot) => {
            const data: any = [];
            for (const key in snapshot.val()) {
                const value = snapshot.val()[key];
                data.push({
                    id: key,
                    image: value.image,
                    title: value.title,
                    link: `/song/${key}`,
                    audio: value.audio


                })

            }
            resolver(data)
        });
    });

    result = result.filter((item: any) => item.id !== songId)

    
    return (

        <>

            <Songlist2 data={result} />
        </>
    );
}