import skills from '../../data/skills'
import './Skills.scss'

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <p className="section-label">Mes outils</p>
        <h2>Technologies utilisées</h2>
        <ul className="skills__list">
          {skills.map((skill) => (
            <li className="skill-card" key={skill.id}>
              <img src={skill.icon} alt={`Logo ${skill.name}`} />
              <p>{skill.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Skills
