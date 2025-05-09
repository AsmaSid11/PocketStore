import { useState } from 'react';
import axios from 'axios';

function ProductSubmission() {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    image_url: '',
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/products/add', formData);
      alert('Product added successfully!');
      setFormData({ name: '', price: '', description: '', image_url: '' });
    } catch (error) {
      alert('Failed to add product');
    }
  };

  return (
    <div className="bg-zinc-900 min-h-screen flex justify-center items-center px-4 py-10">
      <form
        onSubmit={handleSubmit}
        className="bg-zinc-800 rounded-xl shadow-lg max-w-md w-full p-8 text-white border border-cyan-500/30"
      >
        <h1 className="text-3xl font-bold text-cyan-400 text-center mb-6">Add Product</h1>

        <div className="mb-4">
          <label className="block text-purple-300 mb-1">Product Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 bg-zinc-700 rounded border border-purple-500/30 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition"
          />
        </div>

        <div className="mb-4">
          <label className="block text-purple-300 mb-1">Price (₹)</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 bg-zinc-700 rounded border border-purple-500/30 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition"
          />
        </div>

        <div className="mb-4">
          <label className="block text-purple-300 mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="3"
            required
            className="w-full px-3 py-2 bg-zinc-700 rounded border border-purple-500/30 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition"
          ></textarea>
        </div>

        <div className="mb-6">
          <label className="block text-purple-300 mb-1">Image URL</label>
          <input
            type="text"
            name="image_url"
            value={formData.image_url}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-zinc-700 rounded border border-purple-500/30 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-500 to-cyan-400 text-white py-2 rounded hover:opacity-90 transition font-semibold"
        >
          Submit Product
        </button>
      </form>
    </div>
  );
}

export default ProductSubmission;
