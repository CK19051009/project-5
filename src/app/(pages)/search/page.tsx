import { Suspense } from "react";
import Section1 from "./section1";


export default function SreachPage() {
 
    return (
        <>
            <Suspense >

               <Section1 />
            </Suspense>
        </>
    );
  }