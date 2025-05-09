import { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

function MyProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:5000/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="bg-zinc-900 min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-cyan-400"></div>
      </div>
    );
  }

  return (
    <div className="bg-zinc-900 min-h-screen py-10 px-4 text-white">
      <motion.h1 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent"
      >
        My Products
      </motion.h1>

      {products.length === 0 ? (
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center text-gray-400 bg-zinc-800/50 p-8 rounded-xl max-w-md mx-auto"
        >
          <p className="text-xl mb-4">No products added yet.</p>
          <p className="text-sm text-gray-500">Start by adding your first product!</p>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-800 rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                {product.image_url ? (
                  <img
                    src={`http://localhost:5000${product.image_url}`}
                    alt={product.name}
                    className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-56 bg-gradient-to-br from-purple-500/20 to-cyan-400/20 flex items-center justify-center">
                    <span className="text-gray-400">No image available</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h2 className="text-2xl font-bold text-cyan-400 mb-2 group-hover:text-purple-400 transition-colors">
                  {product.name}
                </h2>
                <p className="text-2xl font-bold text-purple-300 mb-3">₹ {product.price}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{product.description}</p>
                
                <div className="mt-4 pt-4 border-t border-zinc-700">
                  <button className="w-full bg-gradient-to-r from-purple-500 to-cyan-400 text-white py-2 rounded-lg font-semibold hover:opacity-90 transition">
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyProducts;
