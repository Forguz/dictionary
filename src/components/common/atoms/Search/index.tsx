import { KeyboardEvent, useRef, useState } from 'react'
import { Search as SearchIcon } from 'iconoir-react'
import styles from './search.module.css'
import { Atom } from '@/types/components'
import { RotatingLines } from 'react-loader-spinner'

interface Props {
  handleSearch: (word: string) => void
}

export function Search({ handleSearch }: Props): Atom {
  const inputRef = useRef<HTMLInputElement>(null)
  const [searching, setSearching] = useState<boolean>(false)
  const [hasError, setHasError] = useState<boolean>(false)

  function onSearch() {
    if (inputRef.current) {
      if (inputRef.current.value) {
        setHasError(false)
        setSearching(true)
        handleSearch(inputRef.current.value)
        setTimeout(() => setSearching(false), 1000)
      } else {
        setTimeout(() => setSearching(false), 1000)
        setHasError(true)
      }
    }
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'Enter') {
      onSearch()
    }
  }

  const classes = hasError
    ? `${styles.container} ${styles.containerError}`
    : styles.container

  return (
    <div onKeyDown={handleKeyDown} className={classes}>
      <input ref={inputRef} placeholder="Search for any word…" type="text" />
      <button onClick={onSearch}>
        {searching ? (
          <RotatingLines
            strokeColor="#A445ED"
            animationDuration="0.75"
            width="16"
            visible={true}
          />
        ) : (
          <SearchIcon width={16} height={16} color="#A445ED" stroke="1.5px" />
        )}
      </button>
    </div>
  )
}
