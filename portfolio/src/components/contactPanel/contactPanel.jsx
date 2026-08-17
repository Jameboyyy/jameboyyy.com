import './contactPanel.css'

const ContactPanel = () => {
  return (
    <div className="contactPanel">
      <div className="contactHeader">
        <p className="contactEyebrow">NETWORK INTERFACE</p>
        <h2>Contact Node</h2>
      </div>

      <div className="contactProfile">
        <img src="/Contact.jpg" alt="James Cadavona" />
        <div>
          <strong>James Cadavona</strong>
          <p>Systems, Cloud & DevOps Engineer</p>
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
          <li>GitHub: github.com/Jameboyyy</li>
          <li>LinkedIn: linkedin.com/in/jcadav</li>
        </ul>
      </div>

      <div className="contactSection">
        <h3>Availability</h3>
        <p>
          Open to full-time opportunities in systems administration, Linux
          administration, cloud operations, SysOps, infrastructure engineering,
          and junior DevOps roles.
        </p>
      </div>

      <div className="contactSection">
        <h3>Collaboration</h3>
        <p>
          Interested in working with teams that operate, automate, monitor, and
          improve reliable infrastructure. Looking for opportunities to contribute
          across Linux and Windows systems, cloud environments, networking,
          monitoring, deployment workflows, and infrastructure automation.
        </p>
      </div>
    </div>
  )
}

export default ContactPanel