import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import App from '../App'

// Mock all components to avoid complex dependency issues in integration test
vi.mock('../components/Header', () => ({
  default: () => <div>Header Component</div>
}))

vi.mock('../components/Hero', () => ({
  default: () => <div>Hero Component</div>
}))

vi.mock('../components/TouristDestinations', () => ({
  default: () => <div>TouristDestinations Component</div>
}))

vi.mock('../components/TravelPlans', () => ({
  default: () => <div>TravelPlans Component</div>
}))

vi.mock('../components/WhyChoose', () => ({
  default: () => <div>WhyChoose Component</div>
}))

vi.mock('../components/Stats', () => ({
  default: () => <div>Stats Component</div>
}))

vi.mock('../components/Testimonials', () => ({
  default: () => <div>Testimonials Component</div>
}))

vi.mock('../components/Footer', () => ({
  default: () => <div>Footer Component</div>
}))

vi.mock('../components/FloatingButtons', () => ({
  default: () => <div>FloatingButtons Component</div>
}))

describe('App Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<App />)
    expect(container).toBeTruthy()
  })

  it('renders all main components', () => {
    render(<App />)
    expect(screen.getByText('Header Component')).toBeInTheDocument()
    expect(screen.getByText('Hero Component')).toBeInTheDocument()
    expect(screen.getByText('TouristDestinations Component')).toBeInTheDocument()
    expect(screen.getByText('TravelPlans Component')).toBeInTheDocument()
    expect(screen.getByText('WhyChoose Component')).toBeInTheDocument()
    expect(screen.getByText('Stats Component')).toBeInTheDocument()
    expect(screen.getByText('Testimonials Component')).toBeInTheDocument()
    expect(screen.getByText('Footer Component')).toBeInTheDocument()
    expect(screen.getByText('FloatingButtons Component')).toBeInTheDocument()
  })

  it('has proper app structure', () => {
    const { container } = render(<App />)
    expect(container.firstChild).toBeTruthy()
  })
})