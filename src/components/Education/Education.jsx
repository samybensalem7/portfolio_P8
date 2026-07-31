import education from '../../data/education'
import EducationCard from '../EducationCard/EducationCard'
import './Education.scss'

function Education() {
  return (
    <section className="education" id="education">
      <div className="container">
        <p className="section-label">Mon apprentissage</p>
        <h2>Mes formations</h2>
        <div className="education__grid">
          {education.map((item) => <EducationCard key={item.id} {...item} />)}
        </div>
      </div>
    </section>
  )
}

export default Education
