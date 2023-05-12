'use client'

import { Theme } from '@/types/contexts'
import { ReactNode, createContext, useContext, useState } from 'react'

interface Props {
  children: ReactNode
}

const defaultValue: Theme = {
  theme: 'light',
  setTheme: () => 'light',
}

const ThemeContext = createContext<Theme>(defaultValue)

export function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  const value = {
    theme,
    setTheme,
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)
