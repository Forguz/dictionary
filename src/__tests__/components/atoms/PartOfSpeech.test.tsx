import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { PartOfSpeech } from '@/components/common/atoms/PartOfSpeech'

describe('PartOfSpeech', () => {
  it('should render with heading', () => {
    render(<PartOfSpeech>noun</PartOfSpeech>)
    const heading = screen.getByRole('heading')

    expect(heading.textContent).toBe('noun')
  })
})
