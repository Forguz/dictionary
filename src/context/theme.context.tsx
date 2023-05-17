'use client'

import { Theme, ThemeOptions } from '@/types/contexts'
import { STORAGE } from '@/utils/constants'
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

interface Props {
  children: ReactNode
}

const defaultValue: Theme = {
  theme: 'dark',
  changeTheme: () => {
    ;('')
  },
}

const ThemeContext = createContext<Theme>(defaultValue)

export function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = useState<ThemeOptions | null>(null)

  useEffect(() => {
    const savedValue = localStorage.getItem(STORAGE('theme')) as
      | ThemeOptions
      | undefined

    if (savedValue) {
      document.documentElement.setAttribute('data-theme', savedValue)
      setTheme(savedValue)
    } else {
      setTheme('light')
    }
  }, [])

  function changeTheme(newTheme: ThemeOptions) {
    document.documentElement.setAttribute('data-theme', newTheme)
    setTheme(newTheme)
    localStorage.setItem(STORAGE('theme'), newTheme)
  }

  const value = {
    theme,
    changeTheme,
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)
