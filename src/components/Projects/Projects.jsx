import projects from '../../data/projects'
import ProjectCard from '../ProjectCard/ProjectCard'
import './Projects.scss'

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <p className="section-label">Mes réalisations</p>
        <h2>Mes projets en développement web</h2>
        <div className="projects__grid">
          {projects.map((project) => <ProjectCard key={project.id} {...project} />)}
        </div>
      </div>
    </section>
  )
}

export default Projects
