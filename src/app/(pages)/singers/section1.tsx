import PostList from "@/app/components/postersong/posterSongList";
import Title from "@/app/components/title/title";
import { dataFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";

export default async function Section1(){



    let  result : any = await new Promise((resolver) => {
        const singersRef = ref(dataFirebase , "singers");
        onValue(singersRef , async (snapshot) => {
            const data : any = [];
            for (const key in snapshot.val()){
                const value = snapshot.val()[key];
                data.push({
                    id : key , 
                    image : value.image,
                    title : value.title,
                    desc : value.description,
                    link : `singers/${key}`,
                    // wishlist : value.wishlist
                })
            }
            resolver(data)
        })

    })
    console.log(result)
    return(
        <>
        
            <div className=" mt-[30px]">
                <Title text="Danh Sách Ca Sĩ" />
            
                <PostList data = {result} />
            </div>
        </>
    );
}