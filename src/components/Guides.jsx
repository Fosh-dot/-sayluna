import guides from "../data/guides";
import GuideCard from "./GuideCard";

function Guides() {
  return (
    <section className="guides" id="guides">
      <div className="guides-header">
        <div className="section-heading">
          <p>THE SAYLUNA JOURNAL</p>

          <h2>
            Travel a little
            <span> smarter.</span>
          </h2>
        </div>

        <p className="guides-intro">
          Practical guides, destination inspiration, and ideas for making your
          next escape unforgettable.
        </p>
      </div>

      <div className="guides-grid">
        {guides.map((guide) => (
          <GuideCard key={guide.id} guide={guide} />
        ))}
      </div>
    </section>
  );
}

export default Guides;
