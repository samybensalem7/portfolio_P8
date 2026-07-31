import './Header.scss'

function Header() {
  return (
    <header className="header">
      <div className="container header__content">
        <a className="header__name" href="#home">Samy Bensalem</a>
        <nav aria-label="Navigation principale">
          <ul className="header__menu">
            <li><a href="#home">Accueil</a></li>
            <li><a href="#about">À propos</a></li>
            <li><a href="#skills">Technologies</a></li>
            <li><a href="#projects">Projets</a></li>
            <li><a href="#education">Formations</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
