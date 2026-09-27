import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const goToSection = (section) => {
    if (location.pathname === "/") {
      document.getElementById(section)?.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      window.location.href = `/#${section}`;
    }
  };

  return (
    <header className="navbar">
      <Link to="/" className="logo">
        SAYLUNA
      </Link>

      <nav className="nav-links">
        <button onClick={() => goToSection("destinations")}>
          Destinations
        </button>

        <button onClick={() => goToSection("resorts")}>Resorts</button>

        <button onClick={() => goToSection("experiences")}>Experiences</button>

        <button onClick={() => goToSection("guides")}>Guides</button>
      </nav>

      <button onClick={() => goToSection("resorts")} className="nav-button">
        Explore
      </button>
    </header>
  );
}

export default Navbar;
