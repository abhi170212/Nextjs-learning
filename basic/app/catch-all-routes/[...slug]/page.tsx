export default async function CatchAllRoutes({params}: {params: Promise<{ slug: string[]}>}){
      const { slug } = await params
     return (
          <div className="w-screen bg-green-700 text-black">
               Catch all Routes page and slug is {slug}
          </div>
     )
}