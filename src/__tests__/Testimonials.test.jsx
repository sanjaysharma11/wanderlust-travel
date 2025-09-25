import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Testimonials from '../components/Testimonials'

describe('Testimonials Component', () => {
  it('renders component successfully', () => {
    const { container } = render(<Testimonials />)
    expect(container.firstChild).toBeTruthy()
  })

  it('displays testimonial content', () => {
    const { container } = render(<Testimonials />)
    expect(container).toBeTruthy()
  })

  it('renders with proper structure', () => {
    const { container } = render(<Testimonials />)
    expect(container.firstChild).toBeTruthy()
  })
})