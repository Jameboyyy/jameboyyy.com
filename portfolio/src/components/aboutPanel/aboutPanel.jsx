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
          <p>IT Support, Systems, Cloud & DevOps</p>
        </div>
      </div>

      <div className="aboutGrid">
        <div className="aboutCard">
          <span>Status</span>
          <strong>Online</strong>
        </div>

        <div className="aboutCard">
          <span>Role</span>
          <strong>End-User Support, Systems Administration & Cloud Operations</strong>
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
          Engineering and hands-on experience across end-user support, Windows and
          Linux administration, Azure infrastructure, networking, identity,
          monitoring, containers, and automation.
        </p>

        <p>
          I enjoy troubleshooting user and system issues, supporting reliable
          environments, and building infrastructure-focused projects around
          administration, observability, security, and repeatable deployment.
        </p>
      </div>

      <div className="aboutSection">
        <h3>Technical Focus</h3>
        <ul>
          <li>End-user support, troubleshooting, and technical documentation</li>
          <li>Windows administration, Active Directory, Group Policy, and permissions</li>
          <li>Linux systems administration and service management</li>
          <li>Azure infrastructure, networking, identity, and monitoring</li>
          <li>Hardware, peripherals, workstation setup, and deployment</li>
          <li>Infrastructure as Code with Terraform and automation with Ansible</li>
          <li>Containerization and orchestration with Docker and Kubernetes</li>
          <li>Monitoring and observability with Prometheus and Grafana</li>
          <li>CI/CD and GitOps workflows with GitLab CI/CD and Argo CD</li>
        </ul>
      </div>

      <div className="aboutSection">
        <h3>Current Work</h3>
        <p>
          Building and expanding IT, systems, and cloud labs focused on Active Directory,
          Windows administration, Linux, Azure networking and security, identity,
          storage, monitoring, troubleshooting, and automation.
        </p>

        <p>
          Recent projects include a Windows Server Active Directory homelab, Azure
          infrastructure homelab, StackWatch cloud monitoring platform, and Kubernetes
          deployment workflows using Amazon EKS, GitLab CI/CD, Kustomize, and Argo CD.
        </p>
      </div>

      <div className="aboutSection">
        <h3>Direction</h3>
        <p>
          Targeting early-career roles in IT Support, Help Desk, Systems Administration,
          Linux Administration, Cloud/SysOps Engineering, Infrastructure Engineering,
          and DevOps.
        </p>

        <p>
          Current learning priorities include Windows and Linux administration,
          Active Directory, networking, Azure administration, Terraform, Ansible,
          Kubernetes, and production-focused cloud operations.
        </p>
      </div>
    </div>
  )
}

export default AboutPanel