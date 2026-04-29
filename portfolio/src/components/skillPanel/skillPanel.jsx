import './skillPanel.css'

const skillGroups = [
    {
        title: "Frontend",
        status: "Primary",
        skills: ['React', 'React Native', 'JavaScript', 'TypeScript', 'Python', 'HTML', 'CSS'],
    },
    {
        title: "Backend",
        status: "Building",
        skills: ['Node.js', 'Express', 'REST APIs', 'PostgreSQL', 'MongoDB', 'Supabase'],
    },
    {
        title: "Devops/Infra",
        status: "Focus",
        skills: ['Linux', 'Docker', 'AWS', 'Azure', 'Terraform', 'Kubernetes', 'CI/CD'],
    },
    {
        title: "Tools",
        status: "Daily",
        skills: ['Git', 'Github', 'BitBucket', 'GitLab','Postman', 'Jira',],
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
    
            <button onClick={onClose}>×</button>
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
