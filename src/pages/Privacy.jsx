import SEO from "../components/SEO";

function Privacy() {
  return (
    <main className="info-page">
      <SEO
        title="Privacy Policy | SAYLUNA"
        description="Read the SAYLUNA Privacy Policy to understand how we handle information when you use our website."
      />

      <section className="info-hero">
        <p className="eyebrow">PRIVACY POLICY</p>

        <h1>
          Your privacy
          <span> matters.</span>
        </h1>

        <p>
          This Privacy Policy explains how SAYLUNA handles information when you
          visit and use our website.
        </p>
      </section>

      <section className="info-content">
        <article>
          <p className="eyebrow">01</p>
          <h2>Information we collect</h2>

          <p>
            SAYLUNA may collect information that you voluntarily provide when
            you contact us, such as your name, email address, and the contents
            of your message.
          </p>

          <p>
            We may also collect basic technical information about website
            visits, such as browser type, device information, pages visited, and
            general usage information.
          </p>
        </article>

        <article>
          <p className="eyebrow">02</p>
          <h2>How we use information</h2>

          <p>
            Information may be used to respond to enquiries, improve the
            website, understand how visitors use SAYLUNA, and maintain the
            security and functionality of the platform.
          </p>
        </article>

        <article>
          <p className="eyebrow">03</p>
          <h2>Cookies and analytics</h2>

          <p>
            SAYLUNA may use cookies and similar technologies to improve website
            functionality and understand website usage.
          </p>

          <p>
            If advertising or analytics services are enabled on SAYLUNA, those
            services may use cookies or similar technologies in accordance with
            their own privacy policies.
          </p>
        </article>

        <article>
          <p className="eyebrow">04</p>
          <h2>Third-party services</h2>

          <p>
            SAYLUNA may link to or use third-party services, including resort
            websites, travel resources, analytics services, advertising
            services, or other external platforms.
          </p>

          <p>
            We are not responsible for the privacy practices of external
            websites. We recommend reviewing their privacy policies before
            providing personal information.
          </p>
        </article>

        <article>
          <p className="eyebrow">05</p>
          <h2>Data security</h2>

          <p>
            We take reasonable steps to protect information handled through
            SAYLUNA. However, no method of transmitting or storing information
            online can be guaranteed to be completely secure.
          </p>
        </article>

        <article>
          <p className="eyebrow">06</p>
          <h2>Contact us</h2>

          <p>
            If you have questions about this Privacy Policy or how information
            is handled on SAYLUNA, you can contact us at:
          </p>

          <p>
            <a href="mailto:hello@sayluna.world">hello@sayluna.world</a>
          </p>
        </article>
      </section>
    </main>
  );
}

export default Privacy;
