import { Link, useParams } from "react-router-dom";
import experiences from "../data/experiences";
import SEO from "../components/SEO";

function ExperienceDetails() {
  const { slug } = useParams();

  const experience = experiences.find((item) => item.slug === slug);

  if (!experience) {
    return (
      <>
        <SEO
          title="Experience Not Found | SAYLUNA"
          description="The travel experience you are looking for could not be found on SAYLUNA."
        />

        <main className="experience-details not-found">
          <div className="experience-details-container">
            <p className="eyebrow">SAYLUNA EXPERIENCES</p>

            <h1>Experience not found</h1>

            <p>We couldn't find the travel experience you're looking for.</p>

            <Link to="/" className="experience-back-link">
              ← Back to SAYLUNA
            </Link>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <SEO
        title={`${experience.title} in ${experience.location} | SAYLUNA`}
        description={experience.description}
      />

      <main className="experience-details">
        {/* HERO */}
        <section className="experience-details-hero">
          <div
            className="experience-details-image"
            style={{
              backgroundImage: `url(${experience.image})`,
            }}
          >
            <div className="experience-details-overlay">
              <div className="experience-details-container">
                <p className="experience-category">{experience.category}</p>

                <h1>{experience.title}</h1>

                <p className="experience-location">{experience.location}</p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <section className="experience-details-content">
          <div className="experience-details-container">
            <div className="experience-details-main">
              {/* INTRODUCTION */}
              <div className="experience-introduction">
                <p className="eyebrow">THE EXPERIENCE</p>

                <h2>
                  Discover {experience.title.toLowerCase()} in{" "}
                  {experience.location}.
                </h2>

                <p>{experience.description}</p>
              </div>

              {/* OVERVIEW */}
              {experience.overview && (
                <section className="experience-text-section">
                  <h2>Overview</h2>

                  <p>{experience.overview}</p>
                </section>
              )}

              {/* HIGHLIGHTS */}
              {experience.highlights?.length > 0 && (
                <section className="experience-text-section">
                  <h2>Highlights</h2>

                  <div className="experience-highlight-grid">
                    {experience.highlights.map((highlight, index) => (
                      <div className="experience-highlight" key={index}>
                        <span>0{index + 1}</span>

                        <p>{highlight}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* PLANNING TIPS */}
              {experience.planningTips?.length > 0 && (
                <section className="experience-text-section">
                  <h2>Planning Tips</h2>

                  <div className="experience-tips">
                    {experience.planningTips.map((tip, index) => (
                      <div className="experience-tip" key={index}>
                        <span>✓</span>

                        <p>{tip}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* LOCATION */}
              <section className="experience-text-section">
                <h2>Why experience it in {experience.location}?</h2>

                <p>
                  {experience.location} offers travellers a distinctive setting
                  for this experience, combining natural scenery, local
                  character, and opportunities to spend time outdoors. Whether
                  you're planning a dedicated activity or building it into a
                  wider trip, it can become an important part of your time in
                  the destination.
                </p>
              </section>
            </div>

            {/* SIDEBAR */}
            <aside className="experience-details-sidebar">
              <div className="experience-sidebar-card">
                <p className="eyebrow">PLAN YOUR ESCAPE</p>

                <h3>Make {experience.location} part of your next journey.</h3>

                <p>
                  Explore more destinations, resorts, and travel inspiration on
                  SAYLUNA.
                </p>

                <Link
                  to={`/destinations/${experience.location
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  className="experience-sidebar-link"
                >
                  Explore {experience.location} →
                </Link>

                <Link to="/" className="experience-sidebar-secondary">
                  Discover more experiences
                </Link>
              </div>
            </aside>
          </div>
        </section>

        {/* BOTTOM NAVIGATION */}
        <section className="experience-details-footer">
          <div className="experience-details-container">
            <Link to="/" className="experience-back-link">
              ← Back to SAYLUNA
            </Link>

            <Link to="/#experiences" className="experience-explore-link">
              Explore more experiences →
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

export default ExperienceDetails;
