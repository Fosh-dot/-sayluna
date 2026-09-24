import SEO from "../components/SEO";

function Contact() {
  return (
    <main className="info-page">
      <SEO
        title="Contact SAYLUNA | Get in Touch"
        description="Contact SAYLUNA with questions, feedback, suggestions, or enquiries about the Philippine travel platform."
      />

      <section className="info-hero">
        <p className="eyebrow">GET IN TOUCH</p>

        <h1>
          We'd love to
          <span> hear from you.</span>
        </h1>

        <p>
          Have a question, suggestion, correction, or something you'd like to
          share with SAYLUNA? Get in touch with us.
        </p>
      </section>

      <section className="contact-content">
        <div className="contact-card">
          <p className="eyebrow">GENERAL ENQUIRIES</p>

          <h2>Let's talk.</h2>

          <p>
            For general questions, feedback, partnership enquiries, or
            information about SAYLUNA, you can reach us by email.
          </p>

          <a href="mailto:hello@sayluna.world" className="contact-email">
            hello@sayluna.world →
          </a>
        </div>

        <div className="contact-card">
          <p className="eyebrow">TRAVEL INFORMATION</p>

          <h2>Planning a trip?</h2>

          <p>
            If you're looking for information about a destination, resort, or
            travel guide featured on SAYLUNA, include the relevant page or
            destination in your message so we can better understand your
            enquiry.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Contact;
