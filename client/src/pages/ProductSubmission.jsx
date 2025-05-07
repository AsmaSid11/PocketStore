import { useState } from 'react'
import axios from 'axios'

function ProductSubmission() {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    imageUrl: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validation (optional)
    if (!formData.name || !formData.price || !formData.description) {
      alert('Please fill all required fields.')
      return
    }

    axios.post('http://localhost:5000/api/products/add', formData)
      .then(res => {
        alert('Product added successfully!')
        setFormData({ name: '', price: '', description: '', imageUrl: '' }) // Clear form
      })
      .catch(err => {
        console.error('Error adding product:', err)
        alert('Failed to add product')
      })
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-blue-400">Submit a Product</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-700 text-white"
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price (in ₹)"
          value={formData.price}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-700 text-white"
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-700 text-white"
          required
        ></textarea>

        <input
          type="text"
          name="imageUrl"
          placeholder="Image URL (optional)"
          value={formData.imageUrl}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-700 text-white"
        />

        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
          Submit Product
        </button>
      </form>
    </div>
  )
}

export default ProductSubmission
