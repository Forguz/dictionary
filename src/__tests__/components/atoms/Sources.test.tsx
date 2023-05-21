import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Sources } from '@/components/common/atoms/Sources'

const sourcesList = ['https://en.wiktionary.org/wiki/key'];

describe('Sources', () => {
  it('should render correctly', () => {
    const {getByRole} = render(<Sources sources={sourcesList} />)

    const link = getByRole('link')

    expect(link).toHaveAttribute('href', sourcesList[0])
  })
})