'use client'
import { useState } from 'react'
import Image from 'next/image'

import { Select } from '@/components/common/atoms/Select'
import { Switch } from '@/components/common/atoms/Switch'
import { VerticalDivider } from '@/components/common/atoms/VerticalDivider'

import styles from './homeHeader.module.css'
import { Organism } from '@/types/components'
import { Search } from '../../atoms/Search'

export function HomeHeader(): Organism {
  const [darkMode, setDarkMode] = useState(false)

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
        <Image
          src="/iconoir_half-moon.svg"
          width={20}
          height={20}
          alt="dark mode"
        />
      </div>
      <div className={styles.searchBox}>
        <Search />
      </div>
    </header>
  )
}
