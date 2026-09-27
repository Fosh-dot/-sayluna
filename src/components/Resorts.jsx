import resorts from "../data/resorts";
import ResortCard from "./ResortCard";

function Resorts() {
  return (
    <section className="resorts" id="resorts">
      <div className="resorts-header">
        <div className="section-heading">
          <p>STAY SOMEWHERE SPECIAL</p>

          <h2>
            Places worth
            <span> staying for.</span>
          </h2>
        </div>

        <p className="resorts-intro">
          Discover carefully selected resorts across the Philippines, from
          beachfront escapes and island hideaways to relaxing stays designed
          for unforgettable journeys.
        </p>
      </div>

      <div className="resort-grid">
        {resorts.map((resort) => (
          <ResortCard
            key={resort.id}
            resort={resort}
          />
        ))}
      </div>
    </section>
  );
}

export default Resorts;