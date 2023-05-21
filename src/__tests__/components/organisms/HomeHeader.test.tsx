import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { HomeHeader } from '@/components/common/organisms/HomeHeader'

jest.mock('next/navigation', () => ({
  useSearchParams: () => ({
    get: () => 'word',
  }),
  useRouter: () => ({
    push: jest.fn(),
  }),
}))

describe('HomeHeader', () => {
  it('should render with his components', () => {
    const { getByRole, getByTestId } = render(<HomeHeader />)

    const homeHeader = getByRole('banner')
    const switchEl = getByRole('checkbox')
    const select = getByTestId('select-container')
    const search = getByTestId('search-container')

    expect(homeHeader).toBeInTheDocument()
    expect(switchEl).toBeInTheDocument()
    expect(select).toBeInTheDocument()
    expect(search).toBeInTheDocument()
  })
})
