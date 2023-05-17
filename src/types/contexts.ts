export type ThemeOptions = 'light' | 'dark'
export interface Theme {
  theme: ThemeOptions | null
  changeTheme: (arg: ThemeOptions) => void
}
