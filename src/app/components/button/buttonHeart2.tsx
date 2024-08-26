"use client"

import { authFirebase, dataFirebase } from "@/app/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { ref, runTransaction } from "firebase/database";
import { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa6";

export default function ButtonHeart2 (props : any) {
    const {id , wishlist} = props;
    console.log(id)

    const [love , setLove] = useState(false);
    useEffect(() => {

        onAuthStateChanged(authFirebase , (user) =>{
   
          if(user){
            const userId = user.uid;
            //  setIsLogin(true)
            if(wishlist && wishlist[userId])
            {
                setLove(true)
            }
          
          }
         
      
      });
      }, [])

    const handleLove = () => {



          const userId = authFirebase?.currentUser?.uid;

          if (userId && id) {

            const songsRef = ref(dataFirebase , `songs/${id}`);


            runTransaction(songsRef, (song) => {
                if (song) {
                  if (song.wishlist && song.wishlist[userId]) {
                    
                    song.wishlist[userId] = null;
                    setLove(false)
                  } else {
                    
                    if (!song.wishlist) {
                      song.wishlist = {};
                    }
                    song.wishlist[userId] = true;
                    setLove(true)
                  }
                }
                return song;
            });
          }


    }
    return (
        <>
            <button onClick={handleLove} 
                    className={"text-[20px]  "
                        + (love ? "text-primary border-primary " : "border-white")}
            >
                <FaRegHeart 
                   
                />

            </button>
        </>
    )
}