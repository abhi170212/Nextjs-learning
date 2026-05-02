import Link from "next/link";

const products = [
  { id: 1001, name: "Smart Phone", price: 500 },
  { id: 1002, name: "Laptop", price: 1200 },
  { id: 1003, name: "Tablet", price: 300 },
  { id: 1004, name: "Headphones", price: 150 },
  { id: 1005, name: "Smart Watch", price: 250 },
  { id: 1006, name: "Keyboard", price: 80 },
  { id: 1007, name: "Mouse", price: 40 },
  { id: 1008, name: "Monitor", price: 600 }
];

//-----------------------------------------------------------------------------------------------------------------

function Products() {
  return (
    <div className="min-h-screen bg-green-50 p-6">
      
      <h1 className="text-3xl font-extrabold text-green-800 text-center mb-8">
        Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-green-100 rounded-2xl shadow-sm p-5 hover:shadow-lg hover:scale-105 transition duration-300"
          >
            <h2 className="text-xl font-semibold text-green-900 mb-2">
              {item.name}
            </h2>

            <p className="text-green-600 font-bold mb-4">
              ${item.price}
            </p>

           <Link href={`/products/${item.id}`} className="text-bold">Click</Link>
          </div>
        ))}

      </div>
    </div>
  );
}
//-----------------------------------------------------------------------------------------------------------------------------------

export default Products;