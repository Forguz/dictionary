'use client'
import { useRef, useState } from 'react'
import Image from 'next/image'
import * as api from '@/services/api'

import { Select } from '@/components/common/atoms/Select'
import { Switch } from '@/components/common/atoms/Switch'
import { VerticalDivider } from '@/components/common/atoms/VerticalDivider'

import styles from './homeHeader.module.css'
import { Organism } from '@/types/components'
import { Search } from '../../atoms/Search'

export function HomeHeader(): Organism {
  const [darkMode, setDarkMode] = useState(false)

  const searchRef = useRef<HTMLInputElement>(null)

  async function onSearch() {
    if (searchRef.current) {
      const searchedWord = searchRef.current.value
      const result = await api.get(searchedWord)
      console.log(result)
    } else {
      throw new Error('Internal error')
    }
  }

  function handleToggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode)
  }

  return (
    <header className={styles.container}>
      <div className={styles.pageOptions}>
        <div>
          <Image
            src="/iconoir_book.svg"
            width={28}
            height={32}
            alt="book icon"
          />
        </div>
        <Select />
        <VerticalDivider />
        <Switch isOn={darkMode} handleToggle={handleToggleDarkMode} />
        <div>
          <Image
            src="/iconoir_half-moon.svg"
            width={20}
            height={20}
            alt="dark mode"
          />
        </div>
      </div>
      <div className={styles.searchBox}>
        <Search onSearch={onSearch} inputRef={searchRef} />
      </div>
    </header>
  )
}
