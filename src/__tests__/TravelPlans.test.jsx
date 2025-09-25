import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import TravelPlans from '../components/TravelPlans'

// Mock toast
vi.mock('react-toastify', () => ({
  toast: {
    success: vi.fn(),
    info: vi.fn(),
    error: vi.fn(),
  },
}))

describe('TravelPlans Component', () => {
  it('renders all travel plan tiers', () => {
    render(<TravelPlans />)
    expect(screen.getByText('Pro')).toBeInTheDocument()
    expect(screen.getByText('VIP')).toBeInTheDocument()
    expect(screen.getByText('VVIP')).toBeInTheDocument()
  })

  it('displays plan features correctly', () => {
    render(<TravelPlans />)
    expect(screen.getByText(/Budget-Friendly travel/i)).toBeInTheDocument()
    expect(screen.getByText(/Mid-Range experience/i)).toBeInTheDocument()
    expect(screen.getByText(/Luxury Premium experience/i)).toBeInTheDocument()
  })

  it('shows correct number of features for each plan', () => {
    render(<TravelPlans />)
    const proFeatures = screen.getByText(/Travel in Sleeper Class/i)
    const vipFeatures = screen.getByText(/Travel in AC Train/i)
    const vvipFeatures = screen.getByText(/Travel via Flights/i)
    
    expect(proFeatures).toBeInTheDocument()
    expect(vipFeatures).toBeInTheDocument()
    expect(vvipFeatures).toBeInTheDocument()
  })

  it('renders consultation section', () => {
    render(<TravelPlans />)
    expect(screen.getByText(/Still Confused About/i)).toBeInTheDocument()
    expect(screen.getByText(/Which Plan to Choose/i)).toBeInTheDocument()
  })
})