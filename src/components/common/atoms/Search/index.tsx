import { useRef, useState } from 'react'
import { Search as SearchIcon } from 'iconoir-react'
import styles from './search.module.css'
import { Atom } from '@/types/components'
import { useRouter } from 'next/navigation'
import { RotatingLines } from 'react-loader-spinner'

export function Search(): Atom {
  const inputRef = useRef<HTMLInputElement>(null)
  const [searching, setSearching] = useState<boolean>(false)
  const [hasError, setHasError] = useState<boolean>(false)
  const Router = useRouter()

  async function handleSearch() {
    if (inputRef.current) {
      if (inputRef.current.value) {
        setSearching(true)
        setHasError(false)
        const searchedWord = inputRef.current.value
        Router.push('/?word=' + searchedWord)
        setTimeout(() => setSearching(false), 1000)
      } else {
        setTimeout(() => setSearching(false), 1000)
        setHasError(true)
      }
    }
  }

  const classes = hasError
    ? `${styles.container} ${styles.containerError}`
    : styles.container

  return (
    <div className={classes}>
      <input ref={inputRef} placeholder="Search for any word…" type="text" />
      <button onClick={handleSearch}>
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
