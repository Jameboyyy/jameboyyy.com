import { useState } from 'react'
import './home.css'
import Terminal from '../components/terminal/terminal'
import ProjectPanel from '../components/projectPanel/projectPanel'
import { projects } from '../data/projects'

const Home = () => {
  const [activeProject, setActiveProject] = useState(null)

  return (
    <section className="homepageSection">
      <div className="homepageContainer">
        <Terminal onOpenProject={setActiveProject} />

        {activeProject && (
          <ProjectPanel
            project={projects[activeProject]}
            onClose={() => setActiveProject(null)}
          />
        )}
      </div>
    </section>
  )
}

export default Home