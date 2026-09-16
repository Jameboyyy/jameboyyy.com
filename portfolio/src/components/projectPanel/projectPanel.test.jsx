import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import ProjectPanel from './projectPanel'

const project = {
  title: 'Secure Portfolio Pipeline',
  type: 'CI/CD and DevSecOps',
  status: 'In Progress',
  stack: ['GitHub Actions', 'Azure'],
  repo: 'https://github.com/Jameboyyy/jameboyyy.com',
  demo: 'https://jamescadavona.dev',
  overview: 'Automates validation and deployment.',
  architecture: 'GitHub Actions to Azure Static Web Apps',
  devops: 'Runs quality and security checks before deployment.',
  features: ['Runs automated tests', 'Blocks failed builds'],
}

describe('ProjectPanel', () => {
  it('renders project details and links', () => {
    render(<ProjectPanel project={project} />)

    expect(
      screen.getByRole('heading', {
        name: 'Secure Portfolio Pipeline',
      })
    ).toBeInTheDocument()

    expect(screen.getByText('GitHub Actions / Azure')).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute(
      'href',
      project.repo
    )

    expect(screen.getByRole('link', { name: 'Live Demo' })).toHaveAttribute(
      'href',
      project.demo
    )

    expect(screen.getByText('Runs automated tests')).toBeInTheDocument()
  })

  it('renders nothing when no project is selected', () => {
    const { container } = render(<ProjectPanel />)

    expect(container).toBeEmptyDOMElement()
  })
})