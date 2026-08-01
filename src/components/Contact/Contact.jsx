import './Contact.scss'

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container contact__content">
        <div className="contact__information">
          <p className="section-label">Un projet, une question ?</p>
          <h2>Me contacter</h2>
          <p>Je suis disponible pour échanger autour du développement web et de nouvelles opportunités.</p>
          <div className="contact__links">
            <a href="mailto:samy.bensalemm@gmail.com">samy.bensalemm@gmail.com</a>
            <a href="#">LinkedIn</a>
            <a href="#">GitHub</a>
          </div>
        </div>

        <form className="contact-form" action="https://formspree.io/f/mdaqrpnv" method="POST">
          <div className="contact-form__field">
            <label htmlFor="name">Nom</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="contact-form__field">
            <label htmlFor="email">Adresse e-mail</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="contact-form__field">
            <label htmlFor="subject">Sujet</label>
            <input type="text" id="subject" name="subject" required />
          </div>
          <div className="contact-form__field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="6" required></textarea>
          </div>
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
