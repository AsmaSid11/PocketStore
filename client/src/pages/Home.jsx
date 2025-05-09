import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import heroImg from '/images/logo.png';  // adjust path if needed

function Hero() {
  return (
    <section className="bg-zinc-900 text-white min-h-[85vh] flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-10 gap-10">
      
      {/* Left Text Content */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
          Welcome to{' '}
          <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
            PocketStore
          </span>
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          Your personal marketplace to sell trendy pocket-friendly gadgets and accessories. List and manage your products effortlessly.
        </p>

        <div className="flex gap-4">
          <Link to="/product-submission">
            <button className="bg-gradient-to-r from-purple-500 to-cyan-400 px-5 py-2 rounded font-semibold hover:opacity-90 transition">
              Add Product
            </button>
          </Link>
          <Link to="/my-products">
            <button className="border border-cyan-400 px-5 py-2 rounded font-semibold text-cyan-400 hover:bg-cyan-400 hover:text-zinc-900 transition">
              View Products
            </button>
          </Link>
        </div>
      </motion.div>

      {/* Right Image Content */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex justify-center w-full md:w-[40%]"
      >
        <img src={heroImg} alt="PocketStore logo" className="w-64 md:w-80 drop-shadow-xl" />
      </motion.div>
    </section>
  );
}

export default Hero;

