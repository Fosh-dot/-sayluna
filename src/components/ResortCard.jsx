import { Link } from "react-router-dom";

function ResortCard({ resort }) {
  return (
    <article className="resort-card">
      <div
        className="resort-image"
        style={{
          backgroundImage: `url(${resort.image})`,
        }}
      >
        <span className="resort-category">{resort.category}</span>

        <button className="favorite-button" aria-label={`Save ${resort.name}`}>
          ♡
        </button>
      </div>

      <div className="resort-info">
        <div className="resort-heading">
          <div>
            <h3>{resort.name}</h3>

            <p>{resort.location}</p>
          </div>

          <span className="resort-rating">★ {resort.rating}</span>
        </div>

        <div className="resort-bottom">
          <span>{resort.priceLevel}</span>

          <Link to={`/resorts/${resort.slug}`} className="view-resort">
            View Resort →
          </Link>
        </div>
      </div>
    </article>
  );
}

export default ResortCard;
