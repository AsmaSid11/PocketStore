import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Navbar() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <nav className="bg-gray-800 dark:bg-gray-900 shadow p-4 flex gap-4 justify-between items-center">
      <div className="flex gap-4">
        <Link className="font-semibold text-blue-400 hover:underline" to="/">Product Submission</Link>
        <Link className="font-semibold text-blue-400 hover:underline" to="/my-products">My Products</Link>
      </div>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
      >
        {darkMode ? '☀️ Light' : '🌙 Dark'}
      </button>
    </nav>
  )
}

export default Navbar
