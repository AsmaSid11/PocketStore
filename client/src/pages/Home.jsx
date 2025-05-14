import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import heroImg from '/images/logo.png';  

function Home() {
  return (
    <div className="bg-zinc-900 text-white">
      {/* Hero Section */}
      <section className="min-h-[85vh] flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-10 gap-10 relative overflow-hidden">
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

      {/* Features Section */}
      <section className="px-6 md:px-16 py-20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/5 via-transparent to-transparent pointer-events-none" />
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
            Why Choose PocketStore?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">Discover the features that make us the best platform for selling your pocket-friendly gadgets</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {[
            {
              title: "Easy Listing",
              description: "List your products in minutes with our simple submission process",
              icon: "📱",
              gradient: "from-purple-500/20 to-purple-500/5"
            },
            {
              title: "Secure Payments",
              description: "Safe and secure payment processing for all transactions",
              icon: "🔒",
              gradient: "from-cyan-400/20 to-cyan-400/5"
            },
            {
              title: "24/7 Support",
              description: "Round-the-clock customer support for all your needs",
              icon: "💬",
              gradient: "from-purple-500/20 to-cyan-400/5"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`bg-gradient-to-br ${feature.gradient} backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 shadow-lg hover:shadow-xl`}
            >
              <div className="text-5xl mb-6 transform hover:scale-110 transition-transform duration-300">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Popular Categories Section */}
      <section className="px-6 md:px-16 py-20 bg-zinc-800/50 backdrop-blur-sm relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-cyan-400/5 pointer-events-none" />
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
            Popular Categories
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">Browse through our most popular product categories</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative">
          {[
            { name: "Smartphones", count: "120+", icon: "📱" },
            { name: "Accessories", count: "85+", icon: "🎧" },
            { name: "Gadgets", count: "95+", icon: "⌚" },
            { name: "Wearables", count: "65+", icon: "🖥️" }
          ].map((category, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-zinc-900/80 backdrop-blur-sm p-6 rounded-xl text-center border border-white/10 hover:border-white/20 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer group"
            >
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{category.icon}</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors duration-300">{category.name}</h3>
              <p className="text-cyan-400 font-medium">{category.count} Products</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="px-6 md:px-16 py-20 relative">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-400 opacity-90" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent" />
          <div className="relative p-12 md:p-16 text-center">
            <motion.h2 
              className="text-3xl md:text-5xl font-bold mb-6"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              Ready to Start Selling?
            </motion.h2>
            <p className="text-white/90 mb-10 max-w-2xl mx-auto text-lg">
              Join thousands of sellers who are already making money with PocketStore
            </p>
            <Link to="/product-submission">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-zinc-900 px-8 py-4 rounded-xl font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
              >
                Start Selling Now
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default Home;

