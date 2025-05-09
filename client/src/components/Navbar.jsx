import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const linkStyle = (path) =>
    location.pathname === path
      ? "text-cyan-400 border-b-2 border-cyan-400 pb-1"
      : "text-gray-300 hover:text-cyan-400 transition";

  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav className="bg-zinc-900 shadow flex justify-between items-center px-6 h-16 sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <img
          src="/images/logo.png"
          alt="PocketStore Logo"
          className="h-20 w-30 object-contain cursor-pointer hover:opacity-90 transition-opacity"
          onClick={scrollToTop}
        />
        {/* <h1 className="text-2xl font-bold text-cyan-400">PocketStore</h1> */}
      </div>
      <div className="flex gap-6 items-center">
        <Link className={linkStyle("/")} to="/">
          Home
        </Link>
        <Link
          className={linkStyle("/product-submission")}
          to="/product-submission"
        >
          Product Submission
        </Link>
        <Link className={linkStyle("/my-products")} to="/my-products">
          My Products
        </Link>
        <a
          href="#contact-section"
          onClick={scrollToContact}
          className="text-gray-300 hover:text-cyan-400 transition"
        >
          Contact Us
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
