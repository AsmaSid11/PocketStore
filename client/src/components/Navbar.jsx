import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Navbar() {
  const [darkMode, setDarkMode] = useState(true); // Default to dark
  const location = useLocation();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const linkStyle = (path) =>
    location.pathname === path
      ? 'text-cyan-400 border-b-2 border-cyan-400 pb-1'
      : 'text-gray-300 hover:text-cyan-400';

  return (
    <nav className="bg-zinc-800 dark:bg-zinc-900 shadow flex justify-between items-center px-6 py-4 rounded-b-lg">
      <h1 className="text-2xl font-bold text-cyan-400">PocketStore</h1>
      <div className="flex gap-6 items-center">
        <Link className={`${linkStyle('/')}`} to="/">Product Submission</Link>
        <Link className={`${linkStyle('/my-products')}`} to="/my-products">My Products</Link>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white px-3 py-1 rounded transition"
        >
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
