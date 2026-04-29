import { useState } from 'react'
import './home.css'
import Terminal from '../components/terminal/terminal.jsx'
import ProjectPanel from '../components/projectPanel/projectPanel.jsx'
import SkillPanel from '../components/skillPanel/skillPanel.jsx'
import AboutPanel from '../components/aboutPanel/aboutPanel.jsx'
import ContactPanel from '../components/contactPanel/contactPanel.jsx'
import { projects } from '../data/projects.js'

const Home = () => {
  const [activeView, setActiveView] = useState(null)

  const activeProject = projects[activeView]

  return (
    <section className="homepageSection">
        <div className="dashboardLayout">
            <div className="terminalArea">
            <Terminal onOpenView={setActiveView} />
            </div>

            <div className="mainViewerArea">
            {activeProject && <ProjectPanel project={activeProject} />}

            {activeView === 'skills' && <SkillPanel />}
            {activeView === 'about' && <AboutPanel />}
            {activeView === 'contact' && <ContactPanel />}

            {!activeView && (
                <div className="defaultPanel">
                <p>Run commands in the terminal to explore.</p>
                </div>
            )}
            </div>

            <div className="bottomLeft">
            <p className="panelPlaceholder">Logs / Blog coming soon</p>
            </div>
        </div>
    </section>
  )
}

export default Home