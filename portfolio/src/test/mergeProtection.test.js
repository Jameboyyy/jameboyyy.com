import { expect, it } from 'vitest'

it('demonstrates that a failing test blocks merging', () => {
  expect(true).toBe(false)
})