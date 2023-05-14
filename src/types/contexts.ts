import { Dispatch, SetStateAction } from 'react'

export interface Theme {
  changeTheme: (arg: 'light' | 'dark') => void
}
