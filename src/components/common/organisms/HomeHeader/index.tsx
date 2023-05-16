'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Book } from 'iconoir-react'

import { Select } from '@/components/common/atoms/Select'
import { Switch } from '@/components/common/atoms/Switch'
import { VerticalDivider } from '@/components/common/atoms/VerticalDivider'

import styles from './homeHeader.module.css'
import { Organism } from '@/types/components'
import { Search } from '../../atoms/Search'
import { useTheme } from '@/context/theme.context'

export function HomeHeader(): Organism {
  const [darkMode, setDarkMode] = useState(false)
  const { changeTheme } = useTheme()

  useEffect(() => {
    if (darkMode) {
      changeTheme('dark')
    } else {
      changeTheme('light')
    }
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
