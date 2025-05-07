import Navbar from './components/Navbar'
import ProductSubmission from './pages/ProductSubmission'
import MyProducts from './pages/MyProducts'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductSubmission />} />
        <Route path="/my-products" element={<MyProducts />} />
      </Routes>
    </div>
  )
}

export default App
