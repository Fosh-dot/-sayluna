import resorts from "../data/resorts";
import ResortCard from "./ResortCard";

function Resorts() {
  return (
    <section className="resorts" id="resorts">
      <div className="resorts-header">
        <div className="section-heading">
          <p>CURATED STAYS</p>

          <h2>Stay somewhere unforgettable.</h2>
        </div>

        <a href="#resorts" className="view-all">
          View all resorts →
        </a>
      </div>

      <div className="resort-grid">
        {resorts.map((resort) => (
          <ResortCard key={resort.id} resort={resort} />
        ))}
      </div>
    </section>
  );
}

export default Resorts;
