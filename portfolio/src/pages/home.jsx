import { useState } from 'react'
import './home.css'
import Terminal from '../components/terminal/terminal.jsx'
import ProjectPanel from '../components/projectPanel/projectPanel.jsx'
import SkillPanel from '../components/skillPanel/skillPanel.jsx'
import AboutPanel from '../components/aboutPanel/aboutPanel.jsx'
import ContactPanel from '../components/contactPanel/contactPanel.jsx'
import { projects } from '../data/projects.js'

const starterPosts = {
  'building-stackwatch.md': {
    title: 'Building StackWatch',
    content: 'This is my first local blog post about StackWatch.'
  },
  'learning-terraform.md': {
    title: 'Learning Terraform',
    content: 'Notes on learning Terraform, state, and infrastructure provisioning.'
  },
}

const Home = () => {
  const [activeView, setActiveView] = useState(null)
  const [blogPosts, setBlogPosts] = useState(starterPosts)
  const [activeBlogPost, setActiveBlogPost] = useState(null)

  const activeProject = projects[activeView]

  return (
    <section className="homepageSection">
      <div className="terminalArea">
        <Terminal
          onOpenView={setActiveView}
          blogPosts={blogPosts}
          setBlogPosts={setBlogPosts}
          setActiveBlogPost={setActiveBlogPost}
        />
      </div>

      <div className="dashboardLayout">
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
          {activeBlogPost ? (
            <article className="blogReader">
              <h3>{activeBlogPost.title}</h3>
              <p>{activeBlogPost.content}</p>
            </article>
          ) : (
            <p className="panelPlaceholder">Blog reader / logs</p>
          )}
        </div>
      </div>
    </section>
  )
}

export default Home