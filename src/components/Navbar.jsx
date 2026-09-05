function Navbar() {
  return (
    <header className="navbar">
      <a href="/" className="logo">
        SAYLUNA
      </a>

      <nav className="nav-links">
        <a href="#destinations">Destinations</a>
        <a href="#resorts">Resorts</a>
        <a href="#experiences">Experiences</a>
        <a href="#guides">Guides</a>
      </nav>

      <a href="#resorts" className="nav-button">
        Explore
      </a>
    </header>
  );
}

export default Navbar;
