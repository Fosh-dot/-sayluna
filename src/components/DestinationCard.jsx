import { Link } from "react-router-dom";

function DestinationCard({ destination }) {
  return (
    <Link
      to={`/destinations/${destination.slug || destination.name.toLowerCase()}`}
      className="destination-card"
    >
      <div
        className="destination-card-image"
        style={{
          backgroundImage: `url(${destination.image})`,
        }}
      />

      <div className="destination-card-content">
        <div>
          <p>{destination.region}</p>

          <h3>{destination.name}</h3>
        </div>

        <span className="destination-card-arrow">Explore →</span>
      </div>
    </Link>
  );
}

export default DestinationCard;
