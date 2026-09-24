import SEO from "../components/SEO";

function About() {
  return (
    <main className="info-page">
      <SEO
        title="About SAYLUNA | Philippine Travel Discovery"
        description="Learn about SAYLUNA, a travel discovery platform helping travellers explore destinations, resorts, experiences, and travel guides across the Philippines."
      />

      <section className="info-hero">
        <p className="eyebrow">ABOUT SAYLUNA</p>

        <h1>
          Discover the Philippines
          <span> differently.</span>
        </h1>

        <p>
          SAYLUNA is a travel discovery platform created to make exploring the
          Philippines more inspiring, practical, and easier to plan.
        </p>
      </section>

      <section className="info-content">
        <article>
          <p className="eyebrow">OUR PURPOSE</p>

          <h2>Travel inspiration, brought together.</h2>

          <p>
            The Philippines is home to thousands of islands, beautiful
            coastlines, vibrant communities, unique experiences, and places
            worth discovering. SAYLUNA brings some of that inspiration together
            in one place.
          </p>

          <p>
            Our goal is to help travellers discover destinations, explore places
            to stay, find things to do, and learn more about the places they are
            considering before they travel.
          </p>
        </article>

        <article>
          <p className="eyebrow">WHAT YOU'LL FIND</p>

          <h2>Made for curious travellers.</h2>

          <p>
            SAYLUNA features destination guides, resort discoveries, travel
            experiences, and practical articles designed to support different
            kinds of trips.
          </p>

          <p>
            Whether you're looking for a peaceful island escape, a luxury
            resort, an adventure-filled trip, or inspiration for your next
            holiday, SAYLUNA is designed to help you explore your options.
          </p>
        </article>

        <article>
          <p className="eyebrow">OUR APPROACH</p>

          <h2>Useful information matters.</h2>

          <p>
            We aim to provide clear and useful travel information rather than
            simply showcasing beautiful places. Destination pages include
            planning information, things to do, where to stay, travel tips, and
            frequently asked questions.
          </p>

          <p>
            Travel details can change over time, including prices,
            transportation, opening hours, and availability. Travellers should
            confirm important details with relevant official sources before
            making arrangements.
          </p>
        </article>
      </section>
    </main>
  );
}

export default About;
