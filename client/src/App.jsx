import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ProductSubmission from "./pages/ProductSubmission";
import MyProducts from "./pages/MyProducts";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-zinc-900 text-gray-100">
      <Navbar />
      <main>
        <div className="p-4 max-w-5xl mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product-submission" element={<ProductSubmission />} />
            <Route path="/my-products" element={<MyProducts />} />
          </Routes>
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default App;
