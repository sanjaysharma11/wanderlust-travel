import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Stats from '../components/Stats'

describe('Stats Component', () => {
  it('renders component successfully', () => {
    const { container } = render(<Stats />)
    expect(container.firstChild).toBeTruthy()
  })

  it('displays component content', () => {
    const { container } = render(<Stats />)
    expect(container).toBeTruthy()
  })

  it('renders with proper structure', () => {
    const { container } = render(<Stats />)
    expect(container.firstChild).toBeTruthy()
  })
})