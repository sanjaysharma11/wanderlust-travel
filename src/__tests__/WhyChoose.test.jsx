import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import WhyChoose from '../components/WhyChoose'

describe('WhyChoose Component', () => {
  it('renders component successfully', () => {
    const { container } = render(<WhyChoose />)
    expect(container.firstChild).toBeTruthy()
  })

  it('displays heading text', () => {
    render(<WhyChoose />)
    expect(screen.getByText(/Why Choose/i)).toBeInTheDocument()
  })

  it('displays promotional text', () => {
    render(<WhyChoose />)
    expect(screen.getByText(/committed to making your travel dreams/i)).toBeInTheDocument()
  })

  it('shows descriptive content', () => {
    render(<WhyChoose />)
    expect(screen.getByText(/wanderlust/i)).toBeInTheDocument()
  })

  it('renders with proper styling', () => {
    const { container } = render(<WhyChoose />)
    const section = container.querySelector('section')
    expect(section).toBeInTheDocument()
  })
})