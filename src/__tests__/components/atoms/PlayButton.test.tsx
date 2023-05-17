import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { PlayButton } from '@/components/common/atoms/PlayButton'

function onClick() {
  return 'clicked'
}

describe('PlayButton', () => {
  it('should render play button with audio icon', () => {
    render(<PlayButton isPlaying={true} onClick={onClick} />)
    const button = screen.getByRole('button')

    expect(button).toBeInTheDocument()
    expect(button.firstChild?.nodeName).toBe('DIV')
  })

  it('should render play button with play icon', () => {
    render(<PlayButton isPlaying={false} onClick={onClick} />)
    const button = screen.getByRole('button')

    expect(button).toBeInTheDocument()
    expect(button.firstChild?.nodeName).toEqual('svg')
  })

  it('should change value on click', () => {
    let value = ''
    function handleClick() {
      value = 'clicked'
    }

    render(<PlayButton isPlaying={true} onClick={handleClick} />)
    const button = screen.getByRole('button')

    expect(button).toBeInTheDocument()

    fireEvent.click(button)

    expect(value).toEqual('clicked')
  })
})
