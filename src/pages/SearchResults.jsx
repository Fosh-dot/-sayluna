import { Link, useSearchParams } from "react-router-dom";

import resorts from "../data/resorts";

function SearchResults() {
  const [searchParams] = useSearchParams();

  const destination = searchParams.get("destination") || "";
  const stayType = searchParams.get("type") || "";

  const filteredResorts = resorts.filter((resort) => {
    const matchesDestination =
      !destination ||
      resort.location.toLowerCase().includes(destination.toLowerCase()) ||
      resort.region.toLowerCase().includes(destination.toLowerCase());

    const matchesType =
      !stayType ||
      stayType === "All stays" ||
      stayType === "Resort" ||
      resort.category.toLowerCase() === stayType.toLowerCase();

    return matchesDestination && matchesType;
  });

  const resultDescription = destination
    ? `Escapes in ${destination}`
    : "Explore our escapes";

  return (
    <main className="search-results">
      <section className="search-results-header">
        <Link to="/" className="results-back">
          ← Back to SAYLUNA
        </Link>

        <p>SEARCH RESULTS</p>

        <h1>{resultDescription}</h1>

        <span>
          {stayType && stayType !== "All stays"
            ? `${stayType} · `
            : "All stays · "}
          {filteredResorts.length}{" "}
          {filteredResorts.length === 1 ? "result" : "results"}
        </span>
      </section>

      <section className="results-grid">
        {filteredResorts.length > 0 ? (
          filteredResorts.map((resort) => (
            <article className="result-card" key={resort.id}>
              <div
                className="result-image"
                style={{
                  backgroundImage: `url(${resort.image})`,
                }}
              />

              <div className="result-info">
                <p>{resort.category}</p>

                <h2>{resort.name}</h2>

                <span>{resort.location}</span>

                <div className="result-bottom">
                  <span>★ {resort.rating}</span>

                  <Link to={`/resorts/${resort.slug}`}>View resort →</Link>
                </div>
              </div>
            </article>
          ))
        ) : (
          <div className="no-results">
            <h2>We couldn't find a matching escape.</h2>

            <p>Try another destination or choose a different stay type.</p>

            <Link to="/" className="primary-button">
              Explore all destinations
            </Link>
          </div>
        )}
      </section>
    </main>
  );
}

export default SearchResults;
