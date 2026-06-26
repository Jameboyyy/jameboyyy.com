import './skillPanel.css'

const skillGroups = [
  {
    title: "Azure",
    status: "Focus",
    skills: [
      "Azure CLI",
      "Azure PowerShell",
      "VNets",
      "Subnets",
      "NSGs",
      "Azure Storage",
      "Private Endpoints",
      "Service Endpoints",
      "Azure Monitor",
      "Log Analytics"
    ],
  },
  {
    title: "Infrastructure",
    status: "Building",
    skills: [
      "Terraform",
      "Linux",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "CI/CD",
      "Git"
    ],
  },
  {
    title: "Backend",
    status: "Primary",
    skills: [
      "Node.js",
      "Express",
      "REST APIs",
      "PostgreSQL",
      "MongoDB",
      "Supabase"
    ],
  },
  {
    title: "Programming",
    status: "Daily",
    skills: [
      "JavaScript",
      "TypeScript",
      "Python",
      "React",
      "React Native"
    ],
  }
]

const SkillPanel = ( { onClose }) => {
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

export default SkillPanel;
