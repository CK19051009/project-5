
"use client"
import Songlist2 from "@/app/components/song/songlist2";
import Title from "@/app/components/title/title";
import { authFirebase, dataFirebase } from "@/app/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";


export default function Section1 () {
    const [data , setData] = useState([]);

    useEffect(() => { 

        
        onAuthStateChanged(authFirebase , async (user) => {

            if(user) {
                const userId = user.uid;

                const result : any = await new Promise((resolver) => {
                    const songRef = ref(dataFirebase , "songs");
                    onValue(songRef , async (snapshot) => {
                        const data : any = [];
                        for (const key in snapshot.val()){
                            const value = snapshot.val()[key];
                            if(value.wishlist && value.wishlist[userId]){
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

                        }
                        resolver(data)
                    }) 
                })
                setData(result)
                
            }
        });

    }
       
        
        ,[])
      return (
          <>
             <div className="mt-[30px]">
                  <Title text="Bài Hát Yêu Thích" />
                  <Songlist2 data = {data}/>
              </div>
          </>
      );
    }