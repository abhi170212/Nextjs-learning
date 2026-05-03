import { Metadata } from "next"
import Link from "next/link"

export const metadata : Metadata = {
     title:"Metadata example",
     description:"This is my static metadata example"

}

export default function metaDataExample(){
     const products = [
          {
               id:"1",
               name:"Mobile"
          },
          {
               id:"2",
               name:"Smart Watch"
          },
          {
               id:"3",
               name:"Laptop"
          }
     ]

     return(
          <div className="bg-green-600 min-h-screen flex flex-col gap-2">
               <h1 className="text-black p-2 border-3  border-green-900">Meta Data Examples</h1>
               {
                    products.map(item=>(
                         <div key={item.id}>
                             <Link href={`/meta-data-example/${item.id}`} className="text-black">{item.name}</Link>
                         </div>     
                    ))
               }
          </div>
     )
}