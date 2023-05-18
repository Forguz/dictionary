'use client'

import { KeyboardEvent, useEffect, useRef, useState } from 'react'
import { Search as SearchIcon } from 'iconoir-react'
import { RotatingLines } from 'react-loader-spinner'
import { useSearchParams } from 'next/navigation'
import styles from './search.module.css'
import { Atom } from '@/types/components'

interface Props {
  handleSearch: (word: string) => void
}

export function Search({ handleSearch }: Props): Atom {
  const inputRef = useRef<HTMLInputElement>(null)
  const [searching, setSearching] = useState<boolean>(false)
  const [hasError, setHasError] = useState<boolean>(false)
  const searchParams = useSearchParams()

  useEffect(() => {
    if (searchParams.get('word') !== getInputValue()) {
      setInputValue('')
    }
  }, [searchParams])

  function onSearch() {
    const inputValue = getInputValue()
    if (inputValue) {
      setHasError(false)
      setSearching(true)
      handleSearch(inputValue)
      setTimeout(() => setSearching(false), 1000)
    } else {
      setTimeout(() => setSearching(false), 1000)
      setHasError(true)
    }
  }

  function getInputValue() {
    if (inputRef.current) {
      return inputRef.current.value
    }
  }

  function setInputValue(value: string) {
    if (inputRef.current) {
      inputRef.current.value = value
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
    <div
      data-testid="search-container"
      onKeyDown={handleKeyDown}
      className={classes}
      tabIndex={0}
    >
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
