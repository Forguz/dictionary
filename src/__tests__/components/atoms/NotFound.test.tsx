import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { NotFound } from '@/components/common/atoms/NotFound'

describe('NotFound', () => {
  it('should render', () => {
    render(<NotFound title="error" message="message" resolution="resolution" />)

    const notFound = screen.getByRole('region')

    expect(notFound).toBeInTheDocument()
  })

  it('should render with error message', () => {
    render(<NotFound title="error" message="message" resolution="resolution" />)

    const notFound = screen.getByRole('region')
    const emojiElement = notFound.querySelector('span')
    const titleElement = notFound.querySelector('h3')
    const descriptionElement = notFound.querySelector('p')

    expect(emojiElement?.textContent).toBe('😕')
    expect(emojiElement?.className).toBe('emoji')
    expect(titleElement?.textContent).toBe('error')
    expect(titleElement?.className).toBe('title')
    expect(descriptionElement?.textContent).toBe('message resolution')
  })
})
