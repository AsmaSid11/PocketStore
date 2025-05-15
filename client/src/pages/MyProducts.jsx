import { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

function MyProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [wishlistItems, setWishlistItems] = useState(new Set());
  const [cartItems, setCartItems] = useState(new Set());
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://pocketstore-01uq.onrender.com/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const toggleWishlist = (productId) => {
    setWishlistItems((prev) => {
      const newSet = new Set(prev);
      newSet.has(productId) ? newSet.delete(productId) : newSet.add(productId);
      return newSet;
    });
  };

  const toggleCart = (productId) => {
    setCartItems((prev) => {
      const newSet = new Set(prev);
      newSet.has(productId) ? newSet.delete(productId) : newSet.add(productId);
      return newSet;
    });
  };

const handleDelete = async (id) => {
  const confirmDelete = window.confirm("Are you sure you want to delete this product?");
  if (!confirmDelete) return;

  try {
    const numericId = parseInt(id); // 🔑 Ensure ID is numeric
    const res = await axios.delete(`https://pocketstore-01uq.onrender.com/api/products/${numericId}`);
    console.log("Delete response:", res.data);

    setProducts((prev) => prev.filter((product) => product.id !== numericId));
    setSelectedProduct(null);
  } catch (error) {
    console.error("Error deleting product:", error);
    alert("Failed to delete product.");
  }
};


  const filteredProducts = products.filter((product) =>
    `${product.name} ${product.description}`.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <div className="bg-zinc-900 min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-cyan-400"></div>
      </div>
    );
  }

  return (
    <div className="bg-zinc-900 min-h-screen py-10 px-4 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Search + Heading */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent"
          >
            My Products
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative w-full md:w-64"
          >
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full px-4 py-2 bg-zinc-800 rounded-lg border border-cyan-500/30 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/20 outline-none transition text-white placeholder-gray-400 text-sm"
            />
            {searchQuery && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-xs text-gray-400 mt-1"
              >
                Found {filteredProducts.length}{" "}
                {filteredProducts.length === 1 ? "product" : "products"}
              </motion.p>
            )}
          </motion.div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center text-gray-400 bg-zinc-800/50 p-8 rounded-xl max-w-md mx-auto">
            {searchQuery ? (
              <>
                <p className="text-xl mb-4">No products found</p>
                <p className="text-sm text-gray-500">Try different search terms</p>
              </>
            ) : (
              <>
                <p className="text-xl mb-4">No products added yet.</p>
                <p className="text-sm text-gray-500">Start by adding your first product!</p>
              </>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, index) => (
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
                      src={`https://pocketstore-01uq.onrender.com${product.image_url}`}
                      alt={product.name}
                      className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-56 bg-gradient-to-br from-purple-500/20 to-cyan-400/20 flex items-center justify-center">
                      <span className="text-gray-400">No image available</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Action Buttons */}
                  <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => toggleWishlist(product.id)}
                      className={`p-2 rounded-full shadow-lg transition-colors ${
                        wishlistItems.has(product.id)
                          ? "bg-red-500 text-white"
                          : "bg-zinc-800/80 text-gray-300 hover:bg-red-500 hover:text-white"
                      }`}
                    >
                      ❤️
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => toggleCart(product.id)}
                      className={`p-2 rounded-full shadow-lg transition-colors ${
                        cartItems.has(product.id)
                          ? "bg-cyan-500 text-white"
                          : "bg-zinc-800/80 text-gray-300 hover:bg-cyan-500 hover:text-white"
                      }`}
                    >
                      🛒
                    </motion.button>
                  </div>
                </div>

                <div className="p-6">
                  <h2 className="text-2xl font-bold text-cyan-400 mb-2">
                    {product.name}
                  </h2>
                  <p className="text-2xl font-bold text-purple-300 mb-3">₹ {product.price}</p>

                  <div className="mt-4 pt-4 border-t border-zinc-700">
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="w-full bg-gradient-to-r from-purple-500 to-cyan-400 text-white py-2 rounded-lg font-semibold hover:opacity-90 transition"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-zinc-800 rounded-xl shadow-2xl max-w-lg w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedProduct.image_url && (
                <img
                  src={`https://pocketstore-01uq.onrender.com${selectedProduct.image_url}`}
                  alt={selectedProduct.name}
                  className="w-full h-64 object-cover"
                />
              )}

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-3xl font-bold text-cyan-400">
                    {selectedProduct.name}
                  </h2>
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    ❌
                  </button>
                </div>

                <p className="text-3xl font-bold text-purple-300 mb-4">
                  ₹ {selectedProduct.price}
                </p>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-purple-300">Description</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {selectedProduct.description}
                  </p>
                </div>

                <div className="mt-6 flex flex-col gap-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => toggleWishlist(selectedProduct.id)}
                    className={`py-3 rounded-lg font-semibold transition-colors ${
                      wishlistItems.has(selectedProduct.id)
                        ? "bg-red-500 text-white"
                        : "bg-zinc-700 text-gray-300 hover:bg-red-500 hover:text-white"
                    }`}
                  >
                    {wishlistItems.has(selectedProduct.id)
                      ? "Remove from Wishlist"
                      : "Add to Wishlist"}
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => toggleCart(selectedProduct.id)}
                    className={`py-3 rounded-lg font-semibold transition-colors ${
                      cartItems.has(selectedProduct.id)
                        ? "bg-cyan-500 text-white"
                        : "bg-gradient-to-r from-purple-500 to-cyan-400 text-white"
                    }`}
                  >
                    {cartItems.has(selectedProduct.id)
                      ? "Remove from Cart"
                      : "Add to Cart"}
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleDelete(selectedProduct.id)}
                    className="py-3 rounded-lg font-semibold bg-red-700 text-white hover:bg-red-600 transition"
                  >
                    Delete Product
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MyProducts;
