'use client'

import { Theme } from '@/types/contexts'
import { ReactNode, createContext, useContext, useState } from 'react'

interface Props {
  children: ReactNode
}

const defaultValue: Theme = {
  changeTheme: () => {
    ;('')
  },
}

const ThemeContext = createContext<Theme>(defaultValue)

export function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  function changeTheme(newTheme: 'light' | 'dark') {
    if (newTheme === 'dark') {
      localStorage.setItem('theme', 'dark')
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      localStorage.setItem('theme', 'light')
      document.documentElement.setAttribute('data-theme', 'light')
    }

    setTheme(newTheme)
  }

  const value = {
    theme,
    changeTheme,
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)
