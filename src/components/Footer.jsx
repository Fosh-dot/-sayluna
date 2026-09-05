import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            SAYLUNA
          </Link>

          <p>
            Discover beautiful escapes, unforgettable experiences, and places
            worth travelling for.
          </p>
        </div>

        <div className="footer-column">
          <h3>Explore</h3>

          <a href="/#destinations">Destinations</a>

          <a href="/#resorts">Resorts</a>

          <a href="/#experiences">Experiences</a>

          <a href="/#guides">Travel Journal</a>
        </div>

        <div className="footer-column">
          <h3>Discover</h3>

          <Link to="/search?destination=Palawan&type=Resort">Palawan</Link>

          <Link to="/search?destination=Boracay&type=Resort">Boracay</Link>

          <Link to="/search?destination=Cebu&type=Resort">Cebu</Link>

          <Link to="/search?destination=Siargao&type=Resort">Siargao</Link>
        </div>

        <div className="footer-column">
          <h3>SAYLUNA</h3>

          <a href="/#guides">Our Journal</a>

          <a href="/#experiences">Experiences</a>

          <a href="/#resorts">Find a Resort</a>

          <a href="/#destinations">Destinations</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} SAYLUNA. All rights reserved.</p>

        <p>Your world of beautiful escapes.</p>
      </div>
    </footer>
  );
}

export default Footer;
