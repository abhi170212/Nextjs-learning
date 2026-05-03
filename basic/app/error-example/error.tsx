"use client"

import { useEffect } from "react"

export default function ErrorExamplesFallbackUI({error,reset}:{
     error:Error & {digest?:string},
     reset:()=> void
}){

     useEffect(()=>{
          // sent a report to your error logging services
     },[error])

     return(
          <div className="text-red-800">
               <p>{error?.message || "An error occured"}</p>
          </div>
     )
}