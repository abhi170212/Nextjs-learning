
async function getData(){
     await new Promise((resolve,reject)=>setTimeout(resolve,3000))

     return {
          stats:{
               users:1_000_000
          }
     }
}


export default async function LoadingExample(){
     const data = await getData();
     return (
          <div className="bg-green-300 min-h-screen flex flex-col gap-1 items-center justify-center text-black">
               <h1 className="font-bold">The stats</h1>
               <p className="bg-green-800 border border-2 p-3 rounded ">Users: {data.stats.users}</p>
          </div>
     )
}