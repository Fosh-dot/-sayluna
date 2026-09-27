import { Link, useParams } from "react-router-dom";

import resorts from "../data/resorts";

import SEO from "../components/SEO";

function ResortDetails() {
  const { slug } = useParams();
  const resort = resorts.find((item) => item.slug === slug);

  if (!resort) {
    return (
      <main className="not-found">
        <h1>Resort not found</h1>
        <p>We couldn't find the resort you're looking for.</p>
        <Link to="/" className="primary-button">
          Back to SAYLUNA
        </Link>
      </main>
    );
  }

  return (
    <main className="resort-details">
      <SEO
        title={`${resort.name} | SAYLUNA`}
        description={`${resort.description} Discover ${resort.name} in ${resort.location} with SAYLUNA.`}
      />

      {/* HERO */}
      <section
        className="resort-hero"
        style={{
          backgroundImage: `url(${resort.image})`,
        }}
      >
        <div className="resort-hero-overlay">
          <div className="resort-hero-content">
            <Link to="/" className="resort-back">
              ← Back to SAYLUNA
            </Link>

            <h1>{resort.name}</h1>

            <p className="resort-location">{resort.location}</p>
          </div>
        </div>
      </section>

      {/* QUICK INFORMATION */}
      <section className="resort-overview">
        <div className="resort-rating">
          <span className="rating-star">★</span>
          <strong>{resort.rating}</strong>
          <span>{resort.ratingLabel || "Guest rating"}</span>
        </div>

        <div className="resort-price">
          <span>Stay level</span>
          <strong>{resort.priceLevel}</strong>
        </div>

        <div className="resort-region">
          <span>Region</span>
          <strong>{resort.region}</strong>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="resort-content">
        <div className="resort-main">
          <p className="eyebrow">ABOUT THE STAY</p>

          <h2>
            A place worth
            <span> escaping to.</span>
          </h2>

          <p className="resort-description">{resort.description}</p>

          {/* OVERVIEW */}
          {resort.overview && (
            <div className="resort-section">
              <p className="eyebrow">THE RESORT</p>

              {resort.overview.map((paragraph, index) => (
                <p className="resort-description" key={index}>
                  {paragraph}
                </p>
              ))}
            </div>
          )}

          {/* LOCATION */}
          {resort.locationDetails && (
            <div className="resort-section">
              <p className="eyebrow">LOCATION</p>

              {resort.locationDetails.map((paragraph, index) => (
                <p className="resort-description" key={index}>
                  {paragraph}
                </p>
              ))}
            </div>
          )}

          {/* HIGHLIGHTS */}
          <div className="resort-section">
            <p className="eyebrow">HIGHLIGHTS</p>

            <div className="highlight-grid">
              {resort.highlights.map((highlight, index) => (
                <div className="highlight-item" key={index}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{highlight}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FEATURES */}
          <div className="resort-section">
            <p className="eyebrow">RESORT FEATURES</p>

            <div className="features-list">
              {resort.features.map((feature, index) => (
                <div className="feature-item" key={index}>
                  <span>✓</span>
                  <p>{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* EXPERIENCES */}
          {resort.experiences && (
            <div className="resort-section">
              <p className="eyebrow">EXPERIENCES</p>

              {resort.experiences.map((experience, index) => (
                <div className="resort-text-block" key={index}>
                  <h3>{experience.heading}</h3>

                  <p>{experience.description}</p>
                </div>
              ))}
            </div>
          )}

          {/* WHO IT IS FOR */}
          <div className="resort-section">
            <p className="eyebrow">BEST FOR</p>

            <div className="best-for-list">
              {resort.bestFor.map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </div>
          </div>

          {/* THINGS TO CONSIDER */}
          {resort.considerations && (
            <div className="resort-section">
              <p className="eyebrow">BEFORE YOU BOOK</p>

              {resort.considerations.map((item, index) => (
                <p className="resort-description" key={index}>
                  {item}
                </p>
              ))}
            </div>
          )}

          {/* NEARBY */}
          {resort.nearby && (
            <div className="resort-section">
              <p className="eyebrow">NEARBY</p>

              {resort.nearby.map((item, index) => (
                <div className="resort-text-block" key={index}>
                  <h3>{item.name}</h3>

                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* SIDEBAR */}
        <aside className="resort-sidebar">
          <div className="stay-card">
            <p className="eyebrow">READY TO ESCAPE?</p>

            <h3>Discover your next island stay.</h3>

            <p>
              Check the resort's official website for current availability,
              rates, amenities, and booking information.
            </p>

            <a
              href={resort.officialWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="stay-button"
            >
              Visit resort website →
            </a>

            <span className="stay-note">
              Rates and availability may change.
            </span>
          </div>
        </aside>
      </section>
    </main>
  );
}

export default ResortDetails;
