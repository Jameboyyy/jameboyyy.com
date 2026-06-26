import './skillPanel.css'

const skillGroups = [
  {
    title: "Cloud",
    status: "Focus",
    skills: [
      "Microsoft Azure",
      "Terraform",
      "Azure CLI",
      "ARM Templates",
      "Azure App Service",
      "Azure Monitor"
    ],
  },
  {
    title: "Infrastructure",
    status: "Building",
    skills: [
      "Linux",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "CI/CD",
      "Networking"
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
      "React Native",
      "Git"
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
