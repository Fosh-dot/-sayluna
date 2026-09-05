import { Link } from "react-router-dom";

function GuideCard({ guide }) {
  return (
    <article className="guide-card">
      <Link to={`/guides/${guide.slug}`}>
        <div
          className="guide-image"
          style={{
            backgroundImage: `url(${guide.image})`,
          }}
        />
      </Link>

      <div className="guide-info">
        <div className="guide-meta">
          <span>{guide.category}</span>
          <span>{guide.readTime}</span>
        </div>

        <h3>{guide.title}</h3>

        <p>{guide.excerpt}</p>

        <Link to={`/guides/${guide.slug}`} className="guide-link">
          Read guide →
        </Link>
      </div>
    </article>
  );
}

export default GuideCard;
