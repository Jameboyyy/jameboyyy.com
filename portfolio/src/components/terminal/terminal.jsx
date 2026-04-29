import { useState, useRef } from 'react';
import Draggable from 'react-draggable'
import './terminal.css'

const fileSystem = {
    '~': {
        folders: ['projects', 'skills', 'blog'],
        files: ['about.txt', 'contact.txt', 'resume.pdf'],
    },
    '~/projects': {
        folders: [],
        files: ['stackwatch.md', 'spacefinder.md', 'gitops-pipeline.md'],
    },
    '~/skills': {
        folders: [],
        files: ['frontend.txt', 'backend.txt', 'devops.txt'],
    },
    '~/blog': {
        folders: [],
        files: ['building-stackwatch.md', 'learning-terraform.md'],
    },
}

const fileContent = {
    '~/about.txt': 'James Daniel Cadavona - Full Stack Engineer with a growing focus in DevOps and infrastructure.',
    '~/contact.txt': 'Github: jameboyyy | LinkedIn: James Cadavona | Email: jdpcadavona@gmail.com',
    '~/resume.pdf': 'Use command: cat resume.pdf',
    
    '~/projects/stackwatch.md': 'StackWatch - Full Stack Monitoring Dashboard using React, Node.js, Docker, NGINX, AWS, and Terraform. Run: open stackwatch.md',
    '~/projects/spacefinder.md': 'SpaceFinder - React Native app for discovering productive third spaces.',
    '~/projects/gitops-pipeline.md': 'GitOps Pipeline - GitLab CI/CD, Docker, ECR, EKS, Argo CD, and Kustomize.',

    '~/skills/frontend.txt': 'React, React Native, JavaScript, TypeScript, HTML, CSS',
    '~/skills/backend.txt': 'Node.js, Express, REST APIs, PostgreSQL, Supabase',
    '~/skills/devops.txt': 'Linux, Docker, AWS, Terraform, Kubernetes, GitLab CI/CD, Argo CD',
    
    '~/blog/building-stackwatch.md': 'Blog draft: What I learned building Stackwatch.',
    '~/blog/learning-terraform.md': 'Blog draft: My notes on learning Terraform state and provisioning',
}

const Terminal = ({ onOpenProject }) => {

    const [input, setInput] = useState('');
    const [currentPath, setCurrentPath] = useState('~')
    const [history, setHistory] = useState ([
        { type: 'system', text: 'Welcome to JamesOS. '},
        { type: 'system', text: 'Type help to get started.'},
    ])

    const addOutput = (text) => {
        setHistory((prev) => [...prev, { type: 'output', text }])
    }

    const getFullPath = (target) => {
        if (!target) return currentPath
        if (target.startsWith(`~/`)) return target
        if (target === '~') return '~'
        return `${currentPath}/${target}`
    }

    const handleLs = () => {
        const directory = fileSystem[currentPath]

        if (!directory) {
            addOutput(`ls: cannot access ${currentPath}`)
            return
        }

        const output = [
            ...directory.folders.map(folder => `${folder}/`),
            ...directory.files
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
            const nextPath= currentPath.split('/').slice(0, -1).join('/') || '~'
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
            addOutput(`cat: missing file operand`)
            return
        }
        const fullPath = getFullPath(target)

        if(fileContent[fullPath]) {
            addOutput(fileContent[fullPath])
        } else {
            addOutput(`cat: ${target}: No such file`)
        }
    }

    const handleOpen = (target) => {
        const projectMap = {
          'stackwatch.md': 'stackwatch',
          stackwatch: 'stackwatch',
          'spacefinder.md': 'spacefinder',
          spacefinder: 'spacefinder',
          'gitops-pipeline.md': 'gitops',
          gitops: 'gitops',
        }
      
        if (projectMap[target]) {
          onOpenProject(projectMap[target])
          addOutput(`Opening ${target}...`)
          return
        }
      
        if (target === 'resume.pdf') {
          window.open('/resume.pdf', '_blank')
          addOutput('Opening resume.pdf...')
          return
        }
      
        addOutput(`open: unable to open ${target}`)
      }

    const runCommand = (rawCommand) => {
        const cleaned = rawCommand.trim()
        if (!cleaned) return

        const [command, ...args] = cleaned.split (' ')
        const target = args.join(' ')

        if (command !== 'clear') {
            setHistory((prev) => [
                ...prev,
                { type: 'command', text: cleaned, path: currentPath},
            ])
        }

        switch(command) {
             case 'help':
                addOutput('Commands: help, ls, cd, cat, pwd, whoami, open, clear | Try: open dashboard, open projects')
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
                addOutput('james')
                break

            case 'open':
                handleOpen(target)
                break
            
            case 'clear':
                setHistory([])
                break

            default:
                addOutput(`command not found: ${command}`)
        }
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            runCommand(input)
            setInput('')
        }
    }

    const nodeRef = useRef(null)

    return (
        <Draggable nodeRef={nodeRef} handle=".terminalHeader" bounds="parent">
            <div ref={nodeRef} className="terminalContainer">
                <div className="terminalHeader">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                    <p className="terminalHeading">james@portfolio:~</p>
                </div>

                <div className="terminalBody">
                    <div className="terminalHistory">
                        {history.map((item, index) => (
                            <div key={index} className={`terminalLine ${item.type}`}>
                                {item.type === 'command' ? (
                                    <>
                                        <span className="terminalPrompt">james@portfolio:{item.path}$</span>
                                        {item.text}
                                    </>
                                ) : (
                                    item.text
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="terminalInputLine">
                        <span className="terminalPrompt">james@portfolio:{currentPath}$</span>
                        <input
                            className="terminalInput"
                            value={input}
                            onChange={(event) => setInput(event.target.value)}
                            onKeyDown={handleKeyDown}
                            autoFocus
                        />
                    </div>
                </div>                
            </div>
        </Draggable>
    );
}

export default Terminal;
