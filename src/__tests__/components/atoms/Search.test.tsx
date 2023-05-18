import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Search } from '@/components/common/atoms/Search'

jest.mock('next/navigation', () => ({
  useSearchParams: () => ({
    get: () => 'word',
  }),
}))

const SEARCH_WORD = 'keyboard'

describe('Search', () => {
  it('should render with input and button', () => {
    const handleSearch = jest.fn()

    render(<Search handleSearch={handleSearch} />)

    const searchComponent = screen.getByTestId('search-container')

    expect(searchComponent).toBeInTheDocument()

    const input = searchComponent.querySelector('input')
    const button = searchComponent.querySelector('button')

    expect(input).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })

  it('should call handleSearch when button is clicked', () => {
    const handleSearch = jest.fn()

    const { getByRole } = render(<Search handleSearch={handleSearch} />)
    const input = getByRole('textbox') as HTMLInputElement
    input.value = SEARCH_WORD

    const button = getByRole('button')
    fireEvent.click(button)

    expect(handleSearch).toHaveBeenCalledWith(SEARCH_WORD)
  })

  it('should call handleSearch when when enter key is pressed', () => {
    const handleSearch = jest.fn()

    const { getByRole, getByTestId } = render(
      <Search handleSearch={handleSearch} />
    )
    const input = getByRole('textbox') as HTMLInputElement
    input.value = SEARCH_WORD

    const container = getByTestId('search-container')
    fireEvent.keyDown(container, { key: 'Enter', code: 13, charCode: 13 })

    expect(handleSearch).toHaveBeenCalled()
  })

  it('should show display error when search', () => {
    const handleSearch = jest.fn()
    const { getByRole, getByTestId } = render(
      <Search handleSearch={handleSearch} />
    )

    const button = getByRole('button')
    fireEvent.click(button)

    expect(handleSearch).toHaveBeenCalledTimes(0)

    const container = getByTestId('search-container')
    expect(container.className).toEqual('container containerError')
  })
})
