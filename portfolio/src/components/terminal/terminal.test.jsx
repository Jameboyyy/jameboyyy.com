import { fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import Terminal from './terminal'

const renderTerminal = (overrides = {}) => {
  const props = {
    onOpenView: vi.fn(),
    blogPosts: {},
    setBlogPosts: vi.fn(),
    setActiveBlogPost: vi.fn(),
    ...overrides,
  }

  render(<Terminal {...props} />)
  return props
}

const runCommand = (command) => {
  const input = screen.getByRole('textbox')

  fireEvent.change(input, {
    target: { value: command },
  })

  fireEvent.keyDown(input, {
    key: 'Enter',
    code: 'Enter',
  })
}

describe('Terminal', () => {
  beforeEach(() => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({
          clientPrincipal: null,
        }),
      })
    )
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('opens the about panel from a terminal command', () => {
    const { onOpenView } = renderTerminal()

    runCommand('open about.md')

    expect(onOpenView).toHaveBeenCalledWith('about')
    expect(screen.getByText('Opening about panel...')).toBeInTheDocument()
  })

  it('blocks blog editing for a visitor without the admin role', () => {
    renderTerminal()

    runCommand('nano draft.md')

    expect(screen.getByText('nano: permission denied')).toBeInTheDocument()
    expect(screen.getAllByRole('textbox')).toHaveLength(1)
  })
})