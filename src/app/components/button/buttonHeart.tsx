"use client"

import { authFirebase, dataFirebase } from "@/app/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { ref, runTransaction } from "firebase/database";
import { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa6";

export default function ButtonHeart(props : any) {
    const {id , wishlist} = props;
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


    const handleWishList = () => {
        const uid = authFirebase?.currentUser?.uid;

        if (uid && id ){
            const songsRef = ref(dataFirebase , `songs/${id}`);


            runTransaction(songsRef, (song) => {
                if (song) {
                  if (song.wishlist && song.wishlist[uid]) {
                    
                    song.wishlist[uid] = null;
                    setLove(false)
                  } else {
                    
                    if (!song.wishlist) {
                      song.wishlist = {};
                    }
                    song.wishlist[uid] = true;
                    setLove(true)
                  }
                }
                return song;
            });
        }
       
    

    }
    return (
        <>
            <button 
            
                onClick={handleWishList}
                className={"text-[16px] w-[34px] h-[34px] text-white border rounded-full  inline-flex items-center justify-center "
                        + (love ? "bg-primary border-primary " : "border-white")
                    
                }>
                <FaRegHeart />
            </button>
        </>
    )
}