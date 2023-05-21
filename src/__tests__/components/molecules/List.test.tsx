import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { List } from '@/components/common/molecules/List'
import { Definition } from '@/types/dictionary'

const listItems: Definition[] = [
  {
    antonyms: [],
    synonyms: [],
    definition: 'Lorem',
  },
  {
    antonyms: [],
    synonyms: [],
    definition: 'Ipsum',
  },
  {
    antonyms: [],
    synonyms: [],
    definition: 'Dolor',
  },
]

describe('List', () => {
  it('should render with items list', () => {
    const { getByRole } = render(<List items={listItems} />)

    const list = getByRole('list')

    expect(list).toBeInTheDocument()
    expect(list.children).toHaveLength(3)
    expect(list.children[0].nodeName).toBe('LI')
  })
})
