import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Switch } from '@/components/common/atoms/Switch'

describe('Switch', () => {
  it('should render a Switch', () => {
    const handleToggle = jest.fn()
    const isOn = false

    const { getByRole } = render(
      <Switch isOn={isOn} handleToggle={handleToggle} />
    )

    const inputSwitch = getByRole('checkbox')
    expect(inputSwitch).toHaveProperty('checked', false)
    expect(inputSwitch).toHaveAttribute('id', 'react-switch')
  })

  it('should call handleToggle when clicked', () => {
    const handleToggle = jest.fn()
    const isOn = false

    const { getByRole, getByTestId } = render(
      <Switch isOn={isOn} handleToggle={handleToggle} />
    )

    const inputSwitch = getByRole('checkbox')
    const label = getByTestId('switch-label')

    fireEvent.click(inputSwitch)
    expect(handleToggle).toHaveBeenCalled()

    fireEvent.click(label)
    expect(handleToggle).toHaveBeenCalledTimes(2)
  })
})
