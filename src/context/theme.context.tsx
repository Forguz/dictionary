'use client'

import { Theme, ThemeOptions } from '@/types/contexts'
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
  changeTheme: () => {
    ;('')
  },
}

const ThemeContext = createContext<Theme>(defaultValue)
const STORAGE_KEY = '@forguz-dictionary/theme'

export function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = useState<ThemeOptions | null>(null)

  useEffect(() => {
    const savedValue = localStorage.getItem(STORAGE_KEY) as
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
    localStorage.setItem(STORAGE_KEY, newTheme)
  }

  const value = {
    theme,
    changeTheme,
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)
