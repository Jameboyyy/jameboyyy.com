import './contactPanel.css'

const ContactPanel = () => {
  return (
    <div className="contactPanel">
      <div className="contactHeader">
        <p className="contactEyebrow">NETWORK INTERFACE</p>
        <h2>Contact Node</h2>
      </div>

      <div className="contactProfile">
        <img src="/Contact.jpg" alt="profile" />
        <div>
          <strong>James Cadavona</strong>
          <p>Full Stack Engineer</p>
        </div>
      </div>

      <div className="contactGrid">
        <div className="contactCard">
          <span>Status</span>
          <strong>Available</strong>
        </div>

        <div className="contactCard">
          <span>Response</span>
          <strong>Active</strong>
        </div>
      </div>

      <div className="contactSection">
        <h3>Channels</h3>
        <ul>
          <li>Email: jdpcadavona@gmail.com</li>
          <li>GitHub: github.com/jameboyyy</li>
          <li>LinkedIn: linkedin.com/in/jamescadavona</li>
        </ul>
      </div>

      <div className="contactSection">
        <h3>Availability</h3>
        <p>
          Open to full-time opportunities in full stack and backend development.
          Also interested in roles that involve infrastructure and system design.
        </p>
      </div>

      <div className="contactSection">
        <h3>Collaboration</h3>
        <p>
          Interested in working on products where I can contribute across the
          stack and grow into building and maintaining production systems.
        </p>
      </div>
    </div>
  )
}

export default ContactPanel