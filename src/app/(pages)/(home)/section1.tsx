import BannerPages from "@/app/components/banner/banner";
import SongList from "@/app/components/song/songlist";
import Title from "@/app/components/title/title";
import { dataFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";




export default async function Section1(){
   


    let result :any = await new Promise((resolver) => {
        const songsRef = ref(dataFirebase , "songs");
        onValue(songsRef , async (snapshot) => {
            const data : any = [];
            for (const key in snapshot.val()){
                const value = snapshot.val()[key];
                data.push({
                    id: key ,
                    image : value.image,
                    listen : value.listen,
                    audio : value.audio,
                    title : value.title,
                    singer:value.singer,
                    wishlist : value.wishlist
                });

             }
        resolver(data);
        
        });
    
    });
 
    result = result.slice(0 ,3);

    console.log(result)
    


    return (
        <>
            <div className="flex items-start xl:flex-nowrap flex-wrap">
            {/* left */}
                <BannerPages />
                {/* end left */}
                <div className="xl:ml-[20px] mt-[20px] flex-1">
                    <Title  
                        text="Nghe Nhiều"
                    />
                    <SongList data = {result} />
                </div>

            </div>
        </>
    );
}