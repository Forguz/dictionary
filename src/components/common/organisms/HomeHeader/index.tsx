'use client'
import { useEffect, useState } from 'react'
import { Book, HalfMoon } from 'iconoir-react'

import { Select } from '@/components/common/atoms/Select'
import { Switch } from '@/components/common/atoms/Switch'
import { VerticalDivider } from '@/components/common/atoms/VerticalDivider'

import styles from './homeHeader.module.css'
import { Organism } from '@/types/components'
import { Search } from '../../atoms/Search'
import { useTheme } from '@/context/theme.context'
import { ThemeOptions } from '@/types/contexts'

export function HomeHeader(): Organism {
  const themeLocalValue = localStorage.getItem('@forguz-dictionary/theme') as
    | ThemeOptions
    | undefined

  const initialValue =
    themeLocalValue && themeLocalValue === 'dark' ? true : false

  const [darkMode, setDarkMode] = useState(initialValue)
  const { changeTheme } = useTheme()

  useEffect(() => {
    darkMode ? changeTheme('dark') : changeTheme('light')
  }, [darkMode, changeTheme])

  function handleToggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode)
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
