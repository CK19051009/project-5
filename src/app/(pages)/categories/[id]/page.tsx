import Cardsong from "@/app/components/card/cardsong";

import Section2 from "./section2";
import { onValue, ref } from "firebase/database";
import { dataFirebase } from "@/app/firebaseConfig";


export default async function SongsCategoriesPage({params } : {params : { id : string}} ) {
  
    const result :any = await new  Promise((resolver) => {
      const categoriesRef = ref(dataFirebase , `categories/${params.id}`)
    
    
   
      onValue(categoriesRef , (snapshot) => {
        const data = snapshot.val();
        resolver(data)

      });
    }); 
    return (
        <>
          <div className="">
              <Cardsong 
                image ={result.image}
                title = {result.title}
                desc = {result.description}
                link = ""
              />
              {/* section2 */}
              
              <Section2 id = {params.id}/>
              {/* end section2 */}




          </div>


        </>
    );
  }