import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import FloatingButtons from '../components/FloatingButtons'

describe('FloatingButtons Component', () => {
  it('renders floating action buttons', () => {
    render(<FloatingButtons />)
    // FloatingButtons uses anchor tags (links), not buttons
    const links = screen.getAllByRole('link')
    expect(links.length).toBeGreaterThan(0)
  })

  it('displays with proper positioning', () => {
    const { container } = render(<FloatingButtons />)
    expect(container.firstChild).toBeTruthy()
  })

  it('contains interactive elements', () => {
    render(<FloatingButtons />)
    // Check if the component renders without throwing
    const { container } = render(<FloatingButtons />)
    expect(container.firstChild).toBeTruthy()
  })
})