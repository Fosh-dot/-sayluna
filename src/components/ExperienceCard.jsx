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

          {experience.guideSlug ? (
            <Link to={`/guides/${experience.guideSlug}`}>
              Explore experience →
            </Link>
          ) : (
            <span className="experience-coming-soon">Guide coming soon</span>
          )}
        </div>
      </div>
    </article>
  );
}

export default ExperienceCard;
