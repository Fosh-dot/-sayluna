import { Link, useParams } from "react-router-dom";

import guides from "../data/guides";
import SEO from "../components/SEO";

function GuideDetails() {
  const { slug } = useParams();

  const guide = guides.find((item) => item.slug === slug);

  if (!guide) {
    return (
      <main className="not-found">
        <h1>Guide not found</h1>

        <p>We couldn't find the travel guide you're looking for.</p>

        <Link to="/" className="primary-button">
          Back to SAYLUNA
        </Link>
      </main>
    );
  }

  return (
    <main className="guide-details">
      <SEO
        title={`${guide.title} | SAYLUNA Journal`}
        description={guide.excerpt}
      />
      {/* HERO IMAGE */}

      <div
        className="guide-details-image"
        style={{
          backgroundImage: `url(${guide.image})`,
        }}
      />

      {/* ARTICLE */}

      <article className="guide-article">
        <Link to="/" className="article-back">
          ← Back to SAYLUNA
        </Link>

        <p className="article-category">{guide.category}</p>

        <h1>{guide.title}</h1>

        <div className="article-meta">
          <span>{guide.location}</span>

          <span>{guide.readTime}</span>
        </div>

        <p className="article-intro">{guide.intro}</p>

        {/* ARTICLE CONTENT */}

        <div className="article-body">
          {guide.sections.map((section, index) => (
            <section key={index} className="article-section">
              <h2>{section.heading}</h2>

              {section.paragraphs.map((paragraph, paragraphIndex) => (
                <p key={paragraphIndex}>{paragraph}</p>
              ))}
            </section>
          ))}
        </div>

        {/* END */}

        <div className="article-end">
          <p className="eyebrow">KEEP EXPLORING</p>

          <h2>Your next escape is waiting.</h2>

          <Link to="/" className="primary-button">
            Explore SAYLUNA
          </Link>
        </div>
      </article>
    </main>
  );
}

export default GuideDetails;
