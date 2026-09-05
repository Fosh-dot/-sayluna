import destinations from "../data/destinations";
import DestinationCard from "./DestinationCard";

function Destinations() {
  return (
    <section className="destinations" id="destinations">
      <div className="section-heading">
        <p>EXPLORE THE PHILIPPINES</p>

        <h2>Where will you escape?</h2>
      </div>

      <div className="destination-grid">
        {destinations.map((destination) => (
          <DestinationCard key={destination.id} destination={destination} />
        ))}
      </div>
    </section>
  );
}

export default Destinations;
