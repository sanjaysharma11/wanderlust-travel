import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import TouristDestinations from '../components/TouristDestinations'

describe('TouristDestinations Component', () => {
  it('renders component successfully', () => {
    const { container } = render(<TouristDestinations />)
    expect(container.firstChild).toBeTruthy()
  })

  it('displays destinations content', () => {
    render(<TouristDestinations />)
    // Look for any destination-related content using getAllByText since there are multiple matches
    const destinationElements = screen.getAllByText(/destinations/i)
    expect(destinationElements.length).toBeGreaterThan(0)
  })

  it('renders with proper structure', () => {
    const { container } = render(<TouristDestinations />)
    const section = container.querySelector('section')
    expect(section).toBeInTheDocument()
  })
})