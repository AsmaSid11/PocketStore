import { useState, useEffect } from 'react'
import axios from 'axios'

function MyProducts() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(res => {
        setProducts(res.data)
      })
      .catch(err => {
        console.error('Error fetching products:', err)
      })
  }, [])

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-blue-400">My Products</h1>

      {products.length === 0 ? (
        <p className="text-gray-400">No products submitted yet.</p>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {products.map(product => (
            <div key={product.id} className="bg-gray-800 rounded-lg p-4 shadow hover:shadow-lg transition">
              {product.imageUrl && (
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="h-40 w-full object-cover rounded mb-3"
                />
              )}
              <h2 className="text-xl font-semibold text-blue-300">{product.name}</h2>
              <p className="text-gray-300 text-sm mb-2 line-clamp-3">{product.description}</p>
              <p className="font-bold text-blue-400">₹{product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default MyProducts
