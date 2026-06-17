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
          <p>Aspiring Azure Cloud & DevOps Engineer</p>
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
          Open to full-time opportunities in Azure cloud, infrastructure, DevOps,
          and platform-focused roles. Also interested in positions that combine
          software development with cloud operations and automation.
        </p>
      </div>

      <div className="contactSection">
        <h3>Collaboration</h3>
        <p>
          Interested in working on teams that build, automate, and maintain
          reliable cloud environments. Looking for opportunities to contribute
          to infrastructure, networking, deployment workflows, and operational
          excellence while continuing to grow as an Azure-focused engineer.
        </p>
      </div>
    </div>
  )
}

export default ContactPanel