import { Link, useParams } from "react-router-dom";

import destinationDetails from "../data/destinationDetails";
import SEO from "../components/SEO";
import resorts from "../data/resorts";

function DestinationDetails() {
  const { slug } = useParams();

  const destination = destinationDetails.find((item) => item.slug === slug);

  if (!destination) {
    return (
      <main className="not-found">
        <h1>Destination not found</h1>

        <p>We couldn't find the destination you're looking for.</p>

        <Link to="/" className="primary-button">
          Back to SAYLUNA
        </Link>
      </main>
    );
  }

  const destinationResorts = resorts.filter(
    (resort) =>
      resort.location.toLowerCase().includes(destination.name.toLowerCase()) ||
      resort.region.toLowerCase().includes(destination.region.toLowerCase()),
  );

  return (
    <main className="destination-details">
      <SEO
        title={`${destination.name} Travel Guide | SAYLUNA`}
        description={destination.description}
      />

      {/* HERO */}

      <section
        className="destination-hero"
        style={{
          backgroundImage: `url(${destination.image})`,
        }}
      >
        <div className="destination-hero-overlay">
          <div className="destination-hero-content">
            <Link to="/" className="destination-back">
              ← Back to SAYLUNA
            </Link>

            <p className="destination-eyebrow">{destination.region}</p>

            <h1>{destination.name}</h1>

            <p>{destination.tagline}</p>
          </div>
        </div>
      </section>

      {/* INTRO */}

      <section className="destination-intro">
        <div>
          <p className="eyebrow">DISCOVER {destination.name.toUpperCase()}</p>

          <h2>
            Your guide to
            <span> the island.</span>
          </h2>
        </div>

        <p>{destination.description}</p>
      </section>

      {/* BEST FOR */}

      <section className="destination-section">
        <p className="eyebrow">BEST FOR</p>

        <div className="destination-tags">
          {destination.bestFor.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
      </section>

      {/* HIGHLIGHTS */}

      <section className="destination-section">
        <p className="eyebrow">DON'T MISS</p>

        <div className="destination-highlights">
          {destination.highlights.map((item, index) => (
            <div className="destination-highlight" key={index}>
              <span>0{index + 1}</span>

              <h3>{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* TRAVEL TIPS */}

      <section className="destination-tips">
        <div>
          <p className="eyebrow">BEFORE YOU GO</p>

          <h2>
            A few things
            <span> to know.</span>
          </h2>
        </div>

        <div className="tips-list">
          {destination.travelTips.map((tip, index) => (
            <div className="tip" key={index}>
              <span>{index + 1}</span>

              <p>{tip}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RESORTS */}

      {destinationResorts.length > 0 && (
        <section className="destination-resorts">
          <div className="destination-resorts-heading">
            <div>
              <p className="eyebrow">WHERE TO STAY</p>

              <h2>
                Stay somewhere
                <span> special.</span>
              </h2>
            </div>

            <Link to="/search">Explore all stays →</Link>
          </div>

          <div className="destination-resort-grid">
            {destinationResorts.map((resort) => (
              <Link
                to={`/resorts/${resort.slug}`}
                className="destination-resort-card"
                key={resort.id}
              >
                <div
                  className="destination-resort-image"
                  style={{
                    backgroundImage: `url(${resort.image})`,
                  }}
                />

                <div>
                  <p>{resort.category}</p>

                  <h3>{resort.name}</h3>

                  <span>Discover resort →</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

export default DestinationDetails;
