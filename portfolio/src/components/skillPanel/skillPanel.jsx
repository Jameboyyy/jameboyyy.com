import './skillPanel.css'

const skillGroups = [
  {
    title: "Systems Administration",
    status: "Core",
    skills: [
      "Linux",
      "Windows Server",
      "Active Directory",
      "Entra ID",
      "Users & Groups",
      "File Permissions",
      "NTFS",
      "Group Policy",
      "PowerShell",
      "Bash",
      "SSH",
      "systemd",
      "firewalld"
    ],
  },
  {
    title: "Cloud & Networking",
    status: "Focus",
    skills: [
      "Microsoft Azure",
      "Azure CLI",
      "Azure Monitor",
      "Log Analytics",
      "Azure RBAC",
      "VNets",
      "Subnets",
      "NSGs",
      "Private Endpoints",
      "Azure Storage",
      "TCP/IP",
      "DNS",
      "DHCP",
      "VPN",
      "Subnetting"
    ],
  },
  {
    title: "Automation & DevOps",
    status: "Building",
    skills: [
      "Terraform",
      "Ansible",
      "GitLab CI/CD",
      "Git",
      "Kustomize",
      "Argo CD",
      "Infrastructure as Code",
      "Configuration Management",
      "CI/CD",
      "GitOps"
    ],
  },
  {
    title: "Containers & Monitoring",
    status: "Hands-On",
    skills: [
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "Amazon EKS",
      "Prometheus",
      "Grafana",
      "PromQL",
      "Health Checks",
      "Liveness Probes",
      "Readiness Probes",
      "Horizontal Pod Autoscaling"
    ],
  }
]

const SkillPanel = ({ onClose }) => {
  return (
    <div className="skillsPanel">
      <div className="skillsPanelHeader">
        <div>
          <p className="skillsEyebrow">SYSTEM CAPABILITIES</p>
          <h2>Skills Matrix</h2>
        </div>
      </div>

      <div className="skillsGrid">
        {skillGroups.map((group) => (
          <div className="skillGroupCard" key={group.title}>
            <div className="skillGroupHeader">
              <h3>{group.title}</h3>
              <span>{group.status}</span>
            </div>

            <div className="skillTags">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkillPanel