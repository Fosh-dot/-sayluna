import SEO from "../components/SEO";

function Terms() {
  return (
    <main className="info-page">
      <SEO
        title="Terms of Use | SAYLUNA"
        description="Read the Terms of Use for using the SAYLUNA travel discovery website."
      />

      <section className="info-hero">
        <p className="eyebrow">TERMS OF USE</p>

        <h1>
          Using SAYLUNA
          <span> responsibly.</span>
        </h1>

        <p>
          These Terms of Use explain the general terms that apply when you
          access and use the SAYLUNA website.
        </p>
      </section>

      <section className="info-content">
        <article>
          <p className="eyebrow">01</p>
          <h2>Using SAYLUNA</h2>

          <p>
            SAYLUNA provides travel discovery content, destination information,
            resort information, experiences, guides, and other travel-related
            resources for general informational purposes.
          </p>

          <p>
            By using the website, you agree to use its content and services
            lawfully and responsibly.
          </p>
        </article>

        <article>
          <p className="eyebrow">02</p>
          <h2>Travel information</h2>

          <p>
            Travel information can change. Prices, availability, transportation,
            opening hours, entry requirements, weather conditions, and other
            details may change without notice.
          </p>

          <p>
            You should confirm important travel information with the relevant
            official source before making bookings or travel arrangements.
          </p>
        </article>

        <article>
          <p className="eyebrow">03</p>
          <h2>External websites</h2>

          <p>
            SAYLUNA may provide links to external websites, including resort
            websites and other travel resources.
          </p>

          <p>
            External websites are operated independently from SAYLUNA. We are
            not responsible for their content, availability, policies, prices,
            or services.
          </p>
        </article>

        <article>
          <p className="eyebrow">04</p>
          <h2>Content ownership</h2>

          <p>
            Unless otherwise stated, content published on SAYLUNA, including
            written content, branding, design elements, and original materials,
            belongs to SAYLUNA or is used with appropriate permission.
          </p>

          <p>
            Content should not be copied, reproduced, or redistributed for
            commercial purposes without permission.
          </p>
        </article>

        <article>
          <p className="eyebrow">05</p>
          <h2>Accuracy of information</h2>

          <p>
            We aim to provide useful and accurate information, but SAYLUNA
            cannot guarantee that every piece of information on the website will
            always be complete, current, or error-free.
          </p>
        </article>

        <article>
          <p className="eyebrow">06</p>
          <h2>Changes to these terms</h2>

          <p>
            SAYLUNA may update these Terms of Use from time to time as the
            website develops. Updated terms will be published on this page.
          </p>
        </article>

        <article>
          <p className="eyebrow">07</p>
          <h2>Contact</h2>

          <p>
            If you have questions about these Terms of Use, contact SAYLUNA at:
          </p>

          <p>
            <a href="mailto:hello@sayluna.world">hello@sayluna.world</a>
          </p>
        </article>
      </section>
    </main>
  );
}

export default Terms;
