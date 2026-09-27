import { Link } from "react-router-dom";

function ExperienceCard({ experience }) {
  return (
    <article className="experience-card">
      <div
        className="experience-image"
        style={
          experience.image
            ? {
                backgroundImage: `url(${experience.image})`,
              }
            : undefined
        }
      >
        <div className="experience-overlay">
          <p>{experience.category}</p>

          <h3>{experience.title}</h3>

          <span>{experience.location}</span>

          <p className="experience-description">
            {experience.description}
          </p>

          {experience.slug && (
            <Link to={`/experiences/${experience.slug}`}>
              Explore experience →
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}

export default ExperienceCard;