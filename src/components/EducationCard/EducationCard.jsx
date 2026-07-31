import './EducationCard.scss'

function EducationCard({ title, school, year, description }) {
  return (
    <article className="education-card">
      <p className="education-card__year">{year}</p>
      <h3>{title}</h3>
      <p className="education-card__school">{school}</p>
      <p>{description}</p>
    </article>
  )
}

export default EducationCard
