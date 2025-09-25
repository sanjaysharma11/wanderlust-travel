import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Hero from '../components/Hero'

describe('Hero Component', () => {
  it('renders main heading', () => {
    render(<Hero />)
    expect(screen.getByText(/Discover/i)).toBeInTheDocument()
    expect(screen.getByText(/Extraordinary/i)).toBeInTheDocument()
    // Use getAllByText since "Travel Experiences" appears multiple times
    const travelExperienceElements = screen.getAllByText(/Travel Experiences/i)
    expect(travelExperienceElements.length).toBeGreaterThan(0)
  })

  it('renders call-to-action buttons', () => {
    render(<Hero />)
    expect(screen.getByText(/Start Your Adventure/i)).toBeInTheDocument()
    expect(screen.getByText(/Plan My Journey/i)).toBeInTheDocument()
  })

  it('has proper background styling', () => {
    const { container } = render(<Hero />)
    const heroSection = container.querySelector('section')
    expect(heroSection).toHaveClass('hero-bg')
  })
})