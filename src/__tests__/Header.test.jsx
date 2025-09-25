import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Header from '../components/Header'

describe('Header Component', () => {
  it('renders WanderLust logo', () => {
    render(<Header />)
    expect(screen.getByText('WanderLust')).toBeInTheDocument()
  })

  it('renders navigation menu items', () => {
    render(<Header />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Packages')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('has proper logo styling', () => {
    render(<Header />)
    const logo = screen.getByText('W')
    expect(logo).toHaveClass('text-white', 'font-bold')
  })
})