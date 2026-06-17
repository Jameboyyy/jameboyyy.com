import './aboutPanel.css'

const AboutPanel = () => {
    return (
      <div className="aboutPanel">
        <div className="aboutHeader">
          <p className="aboutEyebrow">SYSTEM NODE</p>
          <h2>JamesOS@portfolio</h2>
        </div>
  
        <div className="aboutProfile">
            <div className="avatarWrapper">
                <img src="/Profile.jpg" alt="James Cadavona" />
                <span className="statusDot" />
            </div>

            <div>
                <strong>James Daniel Cadavona</strong>
                <p>Aspiring Azure Cloud & DevOps Engineer</p>
            </div>
        </div>

        <div className="aboutGrid">
          <div className="aboutCard">
            <span>Status</span>
            <strong>Online</strong>
          </div>
  
          <div className="aboutCard">
            <span>Role</span>
            <strong>Azure Administration & DevOps Focus</strong>
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
          James Daniel Cadavona is a Computer Science graduate with a background in software development and a growing focus on Azure cloud infrastructure, networking, and DevOps practices.

          I am currently building hands-on projects and a hybrid Azure homelab while pursuing Microsoft Azure certifications and infrastructure-focused technologies such as Terraform and Kubernetes.
          </p>
          <p>
          I hold a Bachelor of Science in Computer Science from California State
            University, Fullerton, and a Master of Science in Software Engineering with
            a focus in DevOps from Western Governors University.
          </p>
        </div>
  
        <div className="aboutSection">
          <h3>Technical Focus</h3>
          <ul>
            <li>Azure Administration and cloud infrastructure</li>
            <li>Azure networking and security</li>
            <li>Infrastructure as Code (Terraform)</li>
            <li>Containerization and orchestration (Docker, Kubernetes)</li>
            <li>CI/CD and automation workflows</li>
            <li>Software development (React, React Native, Node.js, Python)</li>
          </ul>
        </div>
        <div className="aboutSection">
            <h3>Current Work</h3>
            <p>
              Currently building an Azure-focused homelab environment to gain practical experience with networking, identity, storage, monitoring, and infrastructure security.

              Recent projects include Azure Storage networking, service endpoints, network security controls, and technical documentation through a hands-on blog series.
            </p>
            <p>
                Recent projects involve system monitoring dashboards, API design, and
                infrastructure setup using Docker and cloud platforms.
            </p>
        </div>
        <div className="aboutSection">
            <h3>Direction</h3>
            <p>
                Working toward a career in Azure Cloud Engineering, DevOps, or Infrastructure Engineering.
            </p>
            <p>
                Current learning goals include AZ-104, Terraform, Azure DevOps, Kubernetes, and cloud security, with an emphasis on translating certification knowledge into real-world projects.
            </p>
            </div>
      </div>
    )
  }
  

export default AboutPanel;
