export type ThemeOptions = 'light' | 'dark'
export interface Theme {
  changeTheme: (arg: ThemeOptions) => void
}
