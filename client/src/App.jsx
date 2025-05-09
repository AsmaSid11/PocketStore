import Navbar from './components/Navbar'
import Home from './pages/Home'
import ProductSubmission from './pages/ProductSubmission'
import MyProducts from './pages/MyProducts'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen bg-zinc-900 text-gray-100">
      <Navbar />
      <main className="p-4 max-w-5xl mx-auto">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-submission" element={<ProductSubmission />} />
        <Route path="/my-products" element={<MyProducts />} />
      </Routes>
      </main>
    </div>
  )
}

export default App
