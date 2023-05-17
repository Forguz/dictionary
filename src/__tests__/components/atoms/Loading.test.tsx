import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Loading } from '@/components/common/atoms/Loading'

describe('Loading', () => {
  it('should render', () => {
    render(<Loading />)

    const loaderContainer = screen.getByLabelText('loading-container')
    const loaderSpinner = screen.getByLabelText('loading-spinner')

    expect(loaderContainer).toBeInTheDocument()
    expect(loaderSpinner).toBeInTheDocument()
  })
})
