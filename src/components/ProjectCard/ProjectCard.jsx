import './ProjectCard.scss'

function ProjectCard({
  title,
  description,
  context,
  objectives,
  skills,
  results,
  improvements,
  technologies,
  image,
  github,
}) {
  return (
    <article className="project-card">
      <img className="project-card__image" src={image} alt={`Aperçu du projet ${title}`} />
      <div className="project-card__content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-card__details">
          <section>
            <h4>Contexte</h4>
            <p>{context}</p>
          </section>
          <section>
            <h4>Objectifs</h4>
            <p>{objectives}</p>
          </section>
          <section>
            <h4>Compétences développées</h4>
            <p>{skills}</p>
          </section>
          <section>
            <h4>Résultats et impact</h4>
            <p>{results}</p>
          </section>
          <section>
            <h4>Perspectives d'amélioration</h4>
            <p>{improvements}</p>
          </section>
        </div>
        <div className="project-card__technology-list">
          <h4>Technologies</h4>
          <ul className="project-card__technologies">
            {technologies.map((technology) => <li key={technology}>{technology}</li>)}
          </ul>
        </div>
        <div className="project-card__links">
          <a href={github} target="_blank" rel="noopener noreferrer">Retrouvez le projet sur GitHub</a>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
