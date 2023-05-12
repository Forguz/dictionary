import { Dispatch, SetStateAction } from 'react'

export interface Theme {
  theme: 'light' | 'dark'
  setTheme: Dispatch<SetStateAction<'light' | 'dark'>>
}
