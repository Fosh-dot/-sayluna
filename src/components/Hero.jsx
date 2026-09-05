function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-eyebrow">DISCOVER THE PHILIPPINES</p>

        <h1>
          Your world of
          <span> beautiful escapes.</span>
        </h1>

        <p className="hero-description">
          Discover extraordinary resorts, breathtaking destinations, and
          unforgettable experiences across the Philippines.
        </p>

        <div className="hero-actions">
          <a href="#resorts" className="primary-button">
            Explore Resorts
          </a>

          <a href="#destinations" className="secondary-button">
            Discover Destinations
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
