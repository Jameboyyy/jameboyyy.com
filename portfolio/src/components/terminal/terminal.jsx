import { useState, useRef } from 'react'
import Draggable from 'react-draggable'
import './terminal.css'

const fileSystem = {
  '~': {
    folders: ['projects', 'blogs'],
    files: ['about.md', 'contact.md', 'resume.pdf', 'skills.md'],
  },
  '~/projects': {
    folders: [],
    files: ['stackwatch.md', 'spacefinder.md', 'gitops-pipeline.md'],
  },
  '~/blogs': {
    folders: [],
    files: [],
  },
}

const fileContent = {
  '~/about.md':
    'James Daniel Cadavona - Full Stack Engineer with a growing focus in DevOps and infrastructure. | Run: open about.md',
  '~/contact.md':
    'Github: jameboyyy | LinkedIn: James Cadavona | Email: jdpcadavona@gmail.com | Run: open contact.md',
  '~/resume.pdf': 'Use command: open resume.pdf',

  '~/projects/stackwatch.md':
    'StackWatch - Full Stack Monitoring Dashboard using React, Node.js, Docker, NGINX, AWS, and Terraform. Run: open stackwatch.md',
  '~/projects/spacefinder.md':
    'SpaceFinder - React Native app for discovering productive third spaces. Run: open spacefinder.md',
  '~/projects/gitops-pipeline.md':
    'GitOps Pipeline - GitLab CI/CD, Docker, ECR, EKS, Argo CD, and Kustomize. Run: open gitops-pipeline.md',

  '~/skills.md': 'Run: open skills.md',
}

const Terminal = ({
  onOpenView,
  blogPosts,
  setBlogPosts,
  setActiveBlogPost,
}) => {
  const [input, setInput] = useState('')
  const [currentPath, setCurrentPath] = useState('~')
  const [history, setHistory] = useState([
    { type: 'system', text: 'Welcome to JamesOS.' },
    { type: 'system', text: 'Type help to get started.' },
  ])

  const [isAdmin, setIsAdmin] = useState(false)
  const [editorMode, setEditorMode] = useState(false)
  const [editingFile, setEditingFile] = useState(null)
  const [draftContent, setDraftContent] = useState('')

  const nodeRef = useRef(null)
  const inputRef = useRef(null)

  const addOutput = (text) => {
    setHistory((prev) => [...prev, { type: 'output', text }])
  }

  const getFullPath = (target) => {
    if (!target) return currentPath
    if (target.startsWith('~/')) return target
    if (target === '~') return '~'
    return `${currentPath}/${target}`
  }

  const handleLs = () => {
    if (currentPath === '~/blogs') {
      const posts = Object.keys(blogPosts).join('  ')
      addOutput(posts || 'empty directory')
      return
    }

    const directory = fileSystem[currentPath]

    if (!directory) {
      addOutput(`ls: cannot access ${currentPath}`)
      return
    }

    const output = [
      ...directory.folders.map((folder) => `${folder}/`),
      ...directory.files,
    ].join('  ')

    addOutput(output || 'empty directory')
  }

  const handleCd = (target) => {
    if (!target || target === '~') {
      setCurrentPath('~')
      return
    }

    if (target === '..') {
      if (currentPath === '~') return
      const nextPath = currentPath.split('/').slice(0, -1).join('/') || '~'
      setCurrentPath(nextPath)
      return
    }

    const nextPath = getFullPath(target)

    if (fileSystem[nextPath]) {
      setCurrentPath(nextPath)
    } else {
      addOutput(`cd: no such directory: ${target}`)
    }
  }

  const handleCat = (target) => {
    if (!target) {
      addOutput('cat: missing file operand')
      return
    }

    if (currentPath === '~/blogs' && blogPosts[target]) {
      setActiveBlogPost(blogPosts[target])
      addOutput(`Reading ${target} in blog panel...`)
      return
    }

    const fullPath = getFullPath(target)

    if (fileContent[fullPath]) {
      addOutput(fileContent[fullPath])
    } else {
      addOutput(`cat: ${target}: No such file`)
    }
  }

  const handleOpen = (target) => {
    if (!target) {
      addOutput('open: missing target')
      return
    }

    if (currentPath === '~/projects') {
      const projectMap = {
        'stackwatch.md': 'stackwatch',
        stackwatch: 'stackwatch',
        'spacefinder.md': 'spacefinder',
        spacefinder: 'spacefinder',
        'gitops-pipeline.md': 'gitops',
        gitops: 'gitops',
      }

      if (projectMap[target]) {
        onOpenView(projectMap[target])
        addOutput(`Opening ${target}...`)
        return
      }
    }

    if (currentPath === '~' && target === 'about.md') {
      onOpenView('about')
      addOutput('Opening about panel...')
      return
    }

    if (currentPath === '~' && target === 'contact.md') {
      onOpenView('contact')
      addOutput('Opening contact panel...')
      return
    }

    if (currentPath === '~' && target === 'skills.md') {
      onOpenView('skills')
      addOutput('Opening skills matrix...')
      return
    }

    if (currentPath === '~' && target === 'resume.pdf') {
      window.open('/resume.pdf', '_blank')
      addOutput('Opening resume.pdf...')
      return
    }

    addOutput(`open: cannot open ${target} from ${currentPath}`)
  }

  const savePost = () => {
    setBlogPosts((prev) => ({
      ...prev,
      [editingFile]: {
        title: editingFile.replace('.md', '').replaceAll('-', ' '),
        content: draftContent,
      },
    }))

    setEditorMode(false)
    addOutput(`Saved ${editingFile}`)
  }

  const runCommand = (rawCommand) => {
    const cleaned = rawCommand.trim()
    if (!cleaned) return

    const [command, ...args] = cleaned.split(' ')
    const target = args.join(' ')

    if (command !== 'clear') {
      setHistory((prev) => [
        ...prev,
        { type: 'command', text: cleaned, path: currentPath },
      ])
    }

    switch (command) {
      case 'help':
        addOutput(
          'Commands: help, ls, cd, cat, pwd, whoami, open, clear, login, nano'
        )
        break

      case 'ls':
        handleLs()
        break

      case 'cd':
        handleCd(target)
        break

      case 'cat':
        handleCat(target)
        break

      case 'pwd':
        addOutput(currentPath)
        break

      case 'whoami':
        addOutput(isAdmin ? 'james (admin)' : 'guest')
        break

      case 'open':
        handleOpen(target)
        break

      case 'clear':
        setHistory([])
        break

      case 'login':
        if (target === 'your-secret-password') {
          setIsAdmin(true)
          addOutput('admin permissions granted')
        } else {
          addOutput('login failed')
        }
        break

      case 'nano':
        if (!isAdmin) {
          addOutput('nano: permission denied')
          break
        }

        if (currentPath !== '~/blogs') {
          addOutput('nano: can only edit files inside ~/blogs')
          break
        }

        if (!target) {
          addOutput('nano: missing filename')
          break
        }

        setEditingFile(target)
        setDraftContent(blogPosts[target]?.content || '')
        setEditorMode(true)
        addOutput(`Opening nano editor for ${target}...`)
        break

      default:
        addOutput(`command not found: ${command}`)
    }
  }

    const commands = ['help', 'ls', 'cd', 'cat', 'pwd', 'whoami', 'open', 'clear', 'login', 'nano']

    const handleTabCompletion = () => {
    const parts = input.trim().split(' ')

    if (parts.length === 1) {
        const matches = commands.filter((cmd) => cmd.startsWith(parts[0]))

        if (matches.length === 1) {
        setInput(`${matches[0]} `)
        } else if (matches.length > 1) {
        addOutput(matches.join('  '))
        }

        return
    }

    const command = parts[0]
    const currentArg = parts[1] || ''

    let options = []

    if (currentPath === '~/blogs') {
        options = Object.keys(blogPosts)
    } else {
        const dir = fileSystem[currentPath]

        if (dir) {
        options = [...dir.folders, ...dir.files]
        }
    }

    const matches = options.filter((option) => option.startsWith(currentArg))

    if (matches.length === 1) {
        setInput(`${command} ${matches[0]}`)
    } else if (matches.length > 1) {
        addOutput(matches.join('  '))
    }
    }

  const handleKeyDown = (event) => {

    if (event.key === 'Tab') {
        event.preventDefault()
        handleTabCompletion()
    }

    if (event.key === 'Enter') {
      runCommand(input)
      setInput('')
    }


  }

  return (
    <Draggable nodeRef={nodeRef} handle=".terminalHeader">
      <div ref={nodeRef} className="terminalContainer">
        <div className="terminalHeader">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
          <p className="terminalHeading">JamesOS@portfolio:{currentPath}</p>
        </div>

        <div
          className="terminalBody"
          onClick={() => {
            if (!editorMode) inputRef.current?.focus()
          }}
        >
          {editorMode ? (
            <div className="nanoEditor">
              <div className="nanoTopBar">GNU nano - {editingFile}</div>

              <textarea
                className="nanoTextarea"
                value={draftContent}
                onChange={(event) => setDraftContent(event.target.value)}
                autoFocus
              />

              <div className="nanoBottomBar">
                <button onClick={savePost}>Save</button>

                <button
                  onClick={() => {
                    setEditorMode(false)
                    addOutput(`Closed ${editingFile}`)
                  }}
                >
                  Exit
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="terminalHistory">
                {history.map((item, index) => (
                  <div key={index} className={`terminalLine ${item.type}`}>
                    {item.type === 'command' ? (
                      <>
                        <span className="terminalPrompt">
                          JamesOS@portfolio:{item.path}$
                        </span>
                        {item.text}
                      </>
                    ) : (
                      item.text
                    )}
                  </div>
                ))}
              </div>

              <div className="terminalInputLine">
                <span className="terminalPrompt">
                  JamesOS@portfolio:{currentPath}$
                </span>
                <input
                  ref={inputRef}
                  className="terminalInput"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={handleKeyDown}
                  autoFocus
                />
              </div>
            </>
          )}
        </div>
      </div>
    </Draggable>
  )
}

export default Terminal