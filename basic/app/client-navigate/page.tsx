"use client"

import { useRouter,usePathname, useSearchParams } from "next/navigation"

//---------------------------------------------------------------------
export default function ClientNavigate(){
     // HOOKS
     const router =useRouter()
     const pathName = usePathname()
     const searchParams = useSearchParams()

     // searchParams.get("age") -> localhost ? age=18.....
     // searchParams.has("age") -> true


     //FUNCTION
     const handleNavigation = () =>{
          router.push("/")
     }
     return(
          <div>
               <p>This is the Client Navigation Learning</p>
               <button onClick={handleNavigation} className="text-white bg-green-500 rounded-lg hover:cursor-pointer p-4 m-6 border border-green-600 border-2">Home Page</button>
          </div>     
     )
}
//-----------------------------------------------------------------------------