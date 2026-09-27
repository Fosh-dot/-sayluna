import { Link } from "react-router-dom";

function ResortCard({ resort }) {
  return (
    <article className="resort-card">
      <Link
        to={`/resorts/${resort.slug}`}
        className="resort-card-link"
      >
        <div
          className="resort-image"
          style={{
            backgroundImage: `url(${resort.image})`,
          }}
        >
          <div className="resort-overlay">
            <div className="resort-card-content">
              <p className="resort-location">
                {resort.location}
              </p>

              <h3>{resort.name}</h3>

              <p className="resort-description">
                {resort.description}
              </p>

              <span className="resort-explore">
                Explore resort →
              </span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default ResortCard;