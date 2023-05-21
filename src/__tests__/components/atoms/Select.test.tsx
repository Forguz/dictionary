import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Select } from '@/components/common/atoms/Select'

describe('Select', () => {
  it('should render with dropdown', () => {
    const { getByTestId } = render(<Select />)

    const selectContainer = getByTestId('select-container')

    expect(selectContainer).toBeInTheDocument()

    const dropdownContainer = getByTestId('dropdown-container')

    expect(dropdownContainer).toBeInTheDocument()
  })

  it('should display dropdown when button is clicked', () => {
    const { getByRole, getByTestId } = render(<Select />)

    const button = getByRole('button')
    const dropdown = getByTestId('dropdown-container')

    expect(dropdown.classList.length).toEqual(1)
    expect(dropdown.className).toEqual('dropdownMenu')

    fireEvent.click(button)
    expect(dropdown.classList.length).toEqual(2)
    expect(dropdown.className).toEqual('dropdownMenu showDropdownMenu')
  })

  it('should change button value when listItem is clicked', () => {
    const { getByRole, getAllByRole } = render(<Select />);

    const button = getByRole('button')
    fireEvent.click(button);

    expect(button.textContent).toEqual('Sans serif')

    const listItems = getAllByRole('listitem')
    fireEvent.click(listItems[1])

    expect(button.textContent).toEqual('Serif')
  })
})
