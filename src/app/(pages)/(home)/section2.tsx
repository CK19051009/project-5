import PostList from "@/app/components/postersong/posterSongList";
import Title from "@/app/components/title/title";
import { dataFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";

export default async function Section2(){


    let result :any = await new Promise((resolver) => {
        const categoriesRef = ref(dataFirebase , "categories");
        onValue(categoriesRef , async (snapshot) => {
            const data : any = [];
            for (const key in snapshot.val()){
                const value = snapshot.val()[key];
                data.push({
                    image : value.image,
                    title : value.title,
                    desc : value.description,
                    link : `/categories/${key}`

                });

             }
        resolver(data);
        
        });
    
    });

    result = result.slice(0 ,5)
  

    return(
        <>
        
            <div className=" mt-[30px]">
                <Title text="Danh Mục Nổi Bật" />
            
                <PostList data = {result} />
            </div>
        </>
    );
}