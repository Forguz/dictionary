import { VerticalDivider } from '@/components/common/atoms/VerticalDivider'
import '@testing-library/jest-dom'

import { render } from '@testing-library/react'

describe('VerticalDivider', () => {
  it('should render', () => {
    const { getByTestId } = render(<VerticalDivider />)

    const verticalDivider = getByTestId('vertical-divider')

    console.log(verticalDivider)

    expect(verticalDivider).toBeInTheDocument()
  })
})
