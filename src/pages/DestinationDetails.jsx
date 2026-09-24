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
            <span> {destination.name}.</span>
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
              <span>{String(index + 1).padStart(2, "0")}</span>

              <h3>{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* DETAILED GUIDE CONTENT */}
      <section className="destination-guide-content">
        <div className="destination-guide-heading">
          <p className="eyebrow">THE SAYLUNA GUIDE</p>

          <h2>
            Everything you need to know about
            <span> {destination.name}.</span>
          </h2>
        </div>

        <div className="destination-guide-sections">
          {destination.sections.map((section, index) => (
            <article className="destination-guide-section" key={index}>
              <span className="guide-section-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div>
                <h3>{section.heading}</h3>

                {section.paragraphs.map((paragraph, paragraphIndex) => (
                  <p key={paragraphIndex}>{paragraph}</p>
                ))}
              </div>
            </article>
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

      {/* FAQ */}
      <section className="destination-faq">
        <div className="destination-faq-heading">
          <p className="eyebrow">FREQUENTLY ASKED QUESTIONS</p>

          <h2>
            Planning your
            <span> {destination.name} trip?</span>
          </h2>
        </div>

        <div className="destination-faq-list">
          {destination.faqs.map((faq, index) => (
            <article className="destination-faq-item" key={index}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="destination-final">
        <p className="eyebrow">KEEP EXPLORING</p>

        <h2>
          Your next escape
          <span> is waiting.</span>
        </h2>

        <p>
          Explore more destinations, stays, experiences, and travel guides with
          SAYLUNA.
        </p>

        <Link to="/" className="primary-button">
          Explore SAYLUNA
        </Link>
      </section>
    </main>
  );
}

export default DestinationDetails;
