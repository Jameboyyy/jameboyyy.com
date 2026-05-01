import { useEffect, useState } from 'react'
import './home.css'
import Terminal from '../components/terminal/terminal.jsx'
import ProjectPanel from '../components/projectPanel/projectPanel.jsx'
import SkillPanel from '../components/skillPanel/skillPanel.jsx'
import AboutPanel from '../components/aboutPanel/aboutPanel.jsx'
import ContactPanel from '../components/contactPanel/contactPanel.jsx'
import BlogPanel from '../components/blogPanel/blogPanel.jsx'
import { projects } from '../data/projects.js'
import { getPosts } from '../lib/blogQueries.js'

const Home = () => {
  const [activeView, setActiveView] = useState(null)
  const [blogPosts, setBlogPosts] = useState({})
  const [activeBlogPost, setActiveBlogPost] = useState(null)

  const activeProject = projects[activeView]

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const posts = await getPosts()

        console.log('SANITY POSTS:', posts)

        const formattedPosts = posts.reduce((acc, post) => {
          acc[`${post.slug}.md`] = post
          return acc
        }, {})

        console.log('Formatted Posts:', formattedPosts)

        setBlogPosts(formattedPosts)
      } catch (error) {
        console.error('Failed to fetch Sanity posts:', error)
      }
    }

    fetchPosts()
  }, [])

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
            <BlogPanel post={activeBlogPost} />
          ) : (
            <p className="panelPlaceholder">Blog reader / logs</p>
          )}
        </div>
      </div>
    </section>
  )
}

export default Home