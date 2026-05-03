import { Metadata } from "next";

const dummydata ={
     "1":{
          title:"One"
     },
     "2":{
          title:"Two"
     },
     "3":{
          title:"Three"
     }
}
//---------------------------------------------------------------------------
export async function generateMetadata({params}:{
     params:Promise<{slug:string}>;}): Promise<Metadata> {
          const { slug } =await  params;
          const data = dummydata[slug as keyof typeof dummydata]

          return{
               title:data.title,
               description:data.title
          }
     }
//----------------------------------------------------------------------------

export default async function DynamicMetadataExample({params}:{
     params:Promise<{slug:string}>;
}){
     const { slug } =await  params;

  const data = dummydata[slug as keyof typeof dummydata]
     return(
          <div>
               {
                    data.title
               }
          </div>
     )
}