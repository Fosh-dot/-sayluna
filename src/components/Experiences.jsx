import experiences from "../data/experiences";
import ExperienceCard from "./ExperienceCard";

function Experiences() {
  return (
    <section className="experiences" id="experiences">
      <div className="experiences-header">
        <div className="section-heading">
          <p>FIND YOUR EXPERIENCE</p>

          <h2>
            Travel for the
            <span> moments.</span>
          </h2>
        </div>

        <p className="experiences-intro">
          From island adventures to slow afternoons by the sea, discover
          experiences that make every escape memorable.
        </p>
      </div>

      <div className="experience-grid">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </section>
  );
}

export default Experiences;
