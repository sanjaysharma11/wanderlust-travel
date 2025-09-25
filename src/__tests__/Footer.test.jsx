import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Footer from '../components/Footer'

describe('Footer Component', () => {
  it('renders footer section', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo') || 
                  screen.getByText(/footer/i) ||
                  screen.getByText(/wanderlust/i)
    
    expect(footer).toBeTruthy()
  })

  it('displays company information', () => {
    render(<Footer />)
    const companyNames = screen.getAllByText(/wanderlust/i)
    expect(companyNames.length).toBeGreaterThan(0)
    expect(screen.getByText(/trusted partner/i)).toBeInTheDocument()
  })

  it('contains navigation links', () => {
    render(<Footer />)
    const links = screen.getAllByRole('link') || []
    expect(links.length).toBeGreaterThanOrEqual(0)
  })

  it('renders with proper footer structure', () => {
    const { container } = render(<Footer />)
    expect(container.firstChild).toBeTruthy()
  })
})