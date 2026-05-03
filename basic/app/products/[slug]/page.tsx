
async function productDetails({params}: {params: Promise<{ slug: string }>}){
      const { slug } = await params
     return (<p className="bg-green-300 text-center min-h-screen text-amber-950">This is the product page and slug is {slug}</p>)
}
 export default productDetails