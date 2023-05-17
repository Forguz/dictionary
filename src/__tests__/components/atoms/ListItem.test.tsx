import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ListItem } from '@/components/common/atoms/ListItem'

describe('List Item', () => {
  it('renders', () => {
    render(<ListItem definition="Lorem ipsum" />)

    const listItem = screen.getByRole('listitem')

    expect(listItem).toBeInTheDocument()
  })

  it('renders with multiple classes', () => {
    render(<ListItem definition="Lorem ipsum" className="newclass" />)

    const listItem = screen.getByRole('listitem')

    expect(listItem.classList.length).toBeGreaterThan(1)
  })

  it('renders with a definition', () => {
    render(<ListItem definition="Lorem ipsum" />)

    const definition = screen.getByText('Lorem ipsum')

    expect(definition.tagName).toBe('P')
    expect(definition.textContent).toBe('Lorem ipsum')
  })

  it('renders definition with example', () => {
    render(<ListItem definition="Lorem ipsum" example="in dolor sit" />)

    const example = screen.getByLabelText('example')

    expect(example.tagName).toBe('P')
    expect(example.textContent).toBe('"in dolor sit"')
  })
})
