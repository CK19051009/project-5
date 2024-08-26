import PostList from "@/app/components/postersong/posterSongList";
import Title from "@/app/components/title/title";
import { dataFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
export default async function Section3(){

    let result :any = await new Promise((resolver) => {
        const categoriesRef = ref(dataFirebase , "singers");
        onValue(categoriesRef , async (snapshot) => {
            const data : any = [];
            for (const key in snapshot.val()){
                const value = snapshot.val()[key];
                data.push({
                    image : value.image,
                    title : value.title,
                    desc : value.description
                });

             }
        resolver(data);
        
        });
    
    });
    result = result.slice(0 ,5)
    return(

        <>
             <div className=" mt-[30px]">
                <Title text="Ca Sĩ Nổi Bật" />
            
                <PostList data = {result} />
            </div>

        </>
    );
}