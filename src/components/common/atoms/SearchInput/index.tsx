import { MouseEvent, RefObject } from 'react'
import styles from './searchInput.module.css'
import { Search } from 'iconoir-react'

interface Props {
  onSearch: (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => void

  inputRef: RefObject<HTMLInputElement>
}

export default function SearchInput({ onSearch, inputRef }: Props) {
  return (
    <div className={styles.container}>
      <input ref={inputRef} placeholder="Search for any word…" type="text" />
      <button onClick={onSearch}>
        <Search width={16} height={16} color="#A445ED" stroke="1.5px" />
      </button>
    </div>
  )
}
