import './aboutPanel.css'

const AboutPanel = () => {
    return (
      <div className="aboutPanel">
        <div className="aboutHeader">
          <p className="aboutEyebrow">SYSTEM NODE</p>
          <h2>james@portfolio</h2>
        </div>
  
        <div className="aboutProfile">
            <img src="/Profile.jpg" alt="James Cadavona" />
            <div>
                <strong>James Daniel Cadavona</strong>
                <p>Full Stack Engineer</p>
            </div>
        </div>

        <div className="aboutGrid">
          <div className="aboutCard">
            <span>Status</span>
            <strong>Online</strong>
          </div>
  
          <div className="aboutCard">
            <span>Role</span>
            <strong>Full Stack → DevOps Focus</strong>
          </div>
  
          <div className="aboutCard">
            <span>Location</span>
            <strong>Southern California</strong>
          </div>
  
          <div className="aboutCard">
            <span>Availability</span>
            <strong>Open to roles</strong>
          </div>
        </div>
  
        <div className="aboutSection">
          <h3>Overview</h3>
          <p>
          James Daniel Cadavona: Full Stack Engineer focused on building end-to-end applications with an interest in backend systems and infrastructure.
          </p>
          <p>
          I hold a Bachelor of Science in Computer Science from California State
            University, Fullerton, and a Master of Science in Software Engineering with
            a focus in DevOps from Western Governors University.
          </p>
          <p>
          I enjoy working across the stack, from developing user interfaces to
            designing APIs and deploying applications in cloud environments.
          </p>
        </div>
  
        <div className="aboutSection">
          <h3>Technical Focus</h3>
          <ul>
            <li>Full stack development (React / React Native / Node / Python)</li>
            <li>Cloud and infrastructure (AWS, Azure, Terraform)</li>
            <li>Containerization and deployment workflows (Docker, Kubernetes)</li>
            <li>Building scalable and observable systems (CI/CD, Prometheus, Grafana)</li>
          </ul>
        </div>
        <div className="aboutSection">
            <h3>Current Work</h3>
            <p>
                Building full-stack applications that simulate real-world systems, with a focus
                on connecting frontend interfaces to backend services and deploying them in
                cloud environments.
            </p>
            <p>
                Recent projects involve system monitoring dashboards, API design, and
                infrastructure setup using Docker and cloud platforms.
            </p>
        </div>
        <div className="aboutSection">
            <h3>Direction</h3>
            <p>
                Interested in moving deeper into infrastructure and DevOps over time,
                particularly in areas like deployment pipelines, system reliability, and
                scalable architecture.
            </p>
            <p>
                Currently focused on building a strong foundation through hands-on
                development and real-world project experience.
            </p>
            </div>
      </div>
    )
  }
  

export default AboutPanel;
