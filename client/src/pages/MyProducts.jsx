import { useEffect, useState } from 'react';
import axios from 'axios';

function MyProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="bg-zinc-900 min-h-screen py-10 px-4 text-white">
      <h1 className="text-3xl font-bold text-center mb-8 text-cyan-400">My Products</h1>

      {products.length === 0 ? (
        <p className="text-center text-gray-400">No products added yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {products.map(product => (
            <div
              key={product.id}
              className="bg-zinc-800 rounded-lg shadow-lg border-2 border-transparent hover:border-gradient-to-r hover:from-purple-500 hover:to-cyan-400 transition p-4"
            >
              {product.image_url && (
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded mb-4"
                />
              )}
              <h2 className="text-xl font-semibold text-cyan-400 mb-2">{product.name}</h2>
              <p className="text-purple-300 font-medium mb-1">₹ {product.price}</p>
              <p className="text-gray-300 text-sm">{product.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyProducts;
