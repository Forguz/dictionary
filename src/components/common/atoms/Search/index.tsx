import { MouseEvent, RefObject } from 'react'
import styles from './search.module.css'
import { Search as SearchIcon } from 'iconoir-react'
import { Atom } from '@/types/components'

interface Props {
  onSearch: (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => void

  inputRef: RefObject<HTMLInputElement>
}

export function Search({ onSearch, inputRef }: Props): Atom {
  return (
    <div className={styles.container}>
      <input ref={inputRef} placeholder="Search for any word…" type="text" />
      <button onClick={onSearch}>
        <SearchIcon width={16} height={16} color="#A445ED" stroke="1.5px" />
      </button>
    </div>
  )
}
