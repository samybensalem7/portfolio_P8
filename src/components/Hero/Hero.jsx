import samyphoto from '../../assets/images/samyphoto.png'
import './Hero.scss'

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero__content">
        <img className="hero__photo" src={samyphoto} alt="Portrait de Samy Bensalem" />
        <div className="hero__text">
          <p className="hero__intro">Bonjour, je suis</p>
          <h1>Samy Bensalem</h1>
          <h2>Développeur web</h2>
          <p>Développeur web passionné, je conçois des interfaces modernes, intuitives et responsives, en accordant une attention particulière à l’accessibilité, à la qualité du code et à l’expérience utilisateur. Curieux et motivé, j’aime transformer des idées en projets web fonctionnels et agréables à utiliser.</p>
          <div className="hero__links">
            <a href="https://github.com/samybensalem7">GitHub</a>
            <a href="https://www.linkedin.com/in/samy-bensalem-3901481b6/">LinkedIn</a>
            <a className="button" href="#projects">Voir mes projets</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
