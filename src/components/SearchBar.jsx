import { useState } from "react";
import { useNavigate } from "react-router-dom";

import destinations from "../data/destinations";

function SearchBar() {
  const [destination, setDestination] = useState("");
  const [stayType, setStayType] = useState("All stays");

  const navigate = useNavigate();

  function handleSearch(event) {
    event.preventDefault();

    const params = new URLSearchParams();

    if (destination) {
      params.set("destination", destination);
    }

    if (stayType !== "All stays") {
      params.set("type", stayType);
    }

    navigate(`/search?${params.toString()}`);
  }

  return (
    <section className="search-section">
      <div className="search-container">
        <div className="search-heading">
          <p>PLAN YOUR ESCAPE</p>

          <h2>
            Where do you want
            <span> to go?</span>
          </h2>
        </div>

        <form className="search-bar" onSubmit={handleSearch}>
          {/* DESTINATION */}

          <div className="search-field">
            <label htmlFor="destination">Destination</label>

            <select
              id="destination"
              value={destination}
              onChange={(event) => setDestination(event.target.value)}
            >
              <option value="">All destinations</option>

              {destinations.map((item) => (
                <option key={item.id} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>

          <div className="search-divider" />

          {/* STAY TYPE */}

          <div className="search-field">
            <label htmlFor="stay-type">Stay type</label>

            <select
              id="stay-type"
              value={stayType}
              onChange={(event) => setStayType(event.target.value)}
            >
              <option value="All stays">All stays</option>
              <option value="Resort">Resort</option>
              <option value="Luxury Resort">Luxury Resort</option>
              <option value="Island Resort">Island Resort</option>
              <option value="Beach Resort">Beach Resort</option>
              <option value="Private Island">Private Island</option>
            </select>
          </div>

          <button type="submit" className="search-button">
            Search
          </button>
        </form>
      </div>
    </section>
  );
}

export default SearchBar;
