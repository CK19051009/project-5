import Cardsong from "@/app/components/card/cardsong";
import Section2 from "./section2";
import { onValue, ref } from "firebase/database";
import { dataFirebase } from "@/app/firebaseConfig";

export default async function Chitietcasi({params } : {params : { id : string}} ) {

  const result :any = await new  Promise((resolver) => {
    const singersRef = ref(dataFirebase , `singers/${params.id}`)
  
  
 
    onValue(singersRef , (snapshot) => {
      const data = snapshot.val();
      resolver(data)

    });
  }); 



    return (
        <>
          <Cardsong 
            image ={result.image}
            title ={result.title}
            desc = {result.description}
          />
          <Section2 singerId = {params.id}/>


        </>
    );
  }