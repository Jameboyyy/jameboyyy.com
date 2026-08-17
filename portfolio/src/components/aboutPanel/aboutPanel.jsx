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
          <p>Systems, Cloud & DevOps Engineer</p>
        </div>
      </div>

      <div className="aboutGrid">
        <div className="aboutCard">
          <span>Status</span>
          <strong>Online</strong>
        </div>

        <div className="aboutCard">
          <span>Role</span>
          <strong>Systems Administration & Cloud Operations</strong>
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
          Computer Science graduate with an M.S. in Software Engineering – DevOps
          Engineering and hands-on experience across Linux administration, Azure
          infrastructure, cloud networking, monitoring, containers, and automation.
        </p>

        <p>
          I build infrastructure-focused projects that emphasize system reliability,
          troubleshooting, observability, security, and repeatable deployment.
        </p>
      </div>

      <div className="aboutSection">
        <h3>Technical Focus</h3>
        <ul>
          <li>Linux and Windows systems administration</li>
          <li>Azure infrastructure, networking, identity, and monitoring</li>
          <li>Infrastructure as Code with Terraform and automation with Ansible</li>
          <li>Containerization and orchestration with Docker and Kubernetes</li>
          <li>Monitoring and observability with Prometheus and Grafana</li>
          <li>CI/CD and GitOps workflows with GitLab CI/CD and Argo CD</li>
        </ul>
      </div>

      <div className="aboutSection">
        <h3>Current Work</h3>
        <p>
          Building and expanding systems and cloud labs focused on Linux administration,
          Azure networking and security, monitoring, identity, storage, and automation.
        </p>

        <p>
          Recent projects include an Azure infrastructure homelab, StackWatch cloud
          monitoring platform, and Kubernetes deployment workflows using Amazon EKS,
          GitLab CI/CD, Kustomize, and Argo CD.
        </p>
      </div>

      <div className="aboutSection">
        <h3>Direction</h3>
        <p>
          Targeting early-career roles in Systems Administration, Linux Administration,
          Cloud/SysOps Engineering, Infrastructure Engineering, and DevOps.
        </p>

        <p>
          Current learning priorities include Linux administration, Azure administration,
          Terraform, Ansible, Kubernetes, and production-focused cloud operations.
        </p>
      </div>
    </div>
  )
}

export default AboutPanel