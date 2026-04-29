import './projectPanel.css'

const getRepoLabel = (url) => {
  if (!url) return 'Repo'
  if (url.includes('github')) return 'GitHub'
  if (url.includes('gitlab')) return 'GitLab'
  if (url.includes('bitbucket')) return 'Bitbucket'
  return 'Repo'
}

const ProjectPanel = ({ project, onClose }) => {
  if (!project) return null

  return (
    <div className="projectPanel">
      <div className="projectPanelHeader">
        <div>
          <p className="panelEyebrow">{project.type}</p>
          <h2>{project.title}</h2>
        </div>

        <button onClick={onClose}>×</button>
      </div>

      <div className="panelGrid">
        <div className="panelCard">
          <span>Status</span>
          <strong>{project.status}</strong>
        </div>

        <div className="panelCard">
          <span>Stack</span>
          <strong>{project.stack.join(' / ')}</strong>
        </div>
      </div>

      {(project.repo || project.demo) && (
        <div className="panelSection">
          <h3>Links</h3>

          <div className="panelLinks">
            {project.repo && (
              <a href={project.repo} target="_blank" rel="noreferrer">
                {getRepoLabel(project.repo)}
              </a>
            )}

            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer">
                Live Demo
              </a>
            )}
          </div>
        </div>
      )}

      <div className="panelSection">
        <h3>Overview</h3>
        <p>{project.overview}</p>
      </div>

      <div className="panelSection">
        <h3>Architecture</h3>
        <p>{project.architecture}</p>
      </div>

      <div className="panelSection">
        <h3>DevOps Notes</h3>
        <p>{project.devops}</p>
      </div>

      <div className="panelSection">
        <h3>Features</h3>
        <ul>
          {project.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ProjectPanel