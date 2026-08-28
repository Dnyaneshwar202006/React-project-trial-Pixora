import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="navbar-logo-mark">P</span>

          <span className="navbar-logo-text">
            Pixora
          </span>
        </Link>

        <nav className="navbar-links">
          <Link to="/" className="navbar-link">
            <span className="navbar-link-icon">⌕</span>
            Search
          </Link>

          <Link to="/collection" className="navbar-link">
            <span className="navbar-link-icon">♡</span>
            Collection
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;