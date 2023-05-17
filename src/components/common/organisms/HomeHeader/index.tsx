'use client'
import { useState } from 'react'
import { Book, HalfMoon } from 'iconoir-react'

import { Select } from '@/components/common/atoms/Select'
import { Switch } from '@/components/common/atoms/Switch'
import { VerticalDivider } from '@/components/common/atoms/VerticalDivider'

import styles from './homeHeader.module.css'
import { Organism } from '@/types/components'
import { Search } from '../../atoms/Search'
import { useTheme } from '@/context/theme.context'

export function HomeHeader(): Organism {
  const { theme, changeTheme } = useTheme()
  const [darkMode, setDarkMode] = useState(
    theme && theme === 'light' ? false : true
  )

  function handleToggleDarkMode() {
    setDarkMode((prevDarkMode) => {
      if (!prevDarkMode) {
        changeTheme('dark')
      } else {
        changeTheme('light')
      }
      return !prevDarkMode
    })
  }

  return (
    <header className={styles.container}>
      <div className={styles.pageOptions}>
        <div>
          <Book />
        </div>
        <Select />
        <VerticalDivider />
        <Switch isOn={darkMode} handleToggle={handleToggleDarkMode} />
        <HalfMoon />
      </div>
      <div className={styles.searchBox}>
        <Search />
      </div>
    </header>
  )
}
