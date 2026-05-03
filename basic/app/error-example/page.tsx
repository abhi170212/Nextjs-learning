async function getProducts(){
     const shouldError = Math.random() >0.5
     if(shouldError){
          throw new Error("Failed to Fetch Products")
     }

     return [
          {
               id:1,
               name:'One'
          },
           {
               id:2,
               name:'Two'
          },
           {
               id:3,
               name:'Three'
          }
     ]
}


//-----------------------------------------------------------------------
export default async function ErrorExample(){
     const products = await getProducts();
     return (
          <div className="p-5">
                    <h1>Products List</h1>
                    <div className="grid gap-3">
                         {
                              products.map(item=>(
                                   <div key={item.id}>
                                        {
                                             item.name
                                        }
                                   </div>
                              ))
                         }
                    </div>
          </div>
     )
}