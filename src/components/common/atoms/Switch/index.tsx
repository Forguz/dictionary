'use client'

import styles from './switch.module.css'
import { ChangeEvent } from 'react'

interface Props {
  isOn: boolean
  handleToggle: (event: ChangeEvent<HTMLInputElement>) => void
}

export function Switch({ isOn, handleToggle }: Props) {
  return (
    <>
      <input
        id="react-switch"
        className={styles.switch}
        type="checkbox"
        checked={isOn}
        onChange={handleToggle}
      ></input>
      <label className={styles.switchLabel} htmlFor="react-switch">
        <span className={styles.switchButton} />
      </label>
    </>
  )
}
