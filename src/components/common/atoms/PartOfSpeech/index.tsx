import { ReactNode } from 'react'
import styles from './partOfSpeech.module.css'

interface Props {
  children: ReactNode
}

export default function PartOfSpeech({ children }: Props) {
  return (
    <div className={styles.container}>
      <h3>{children}</h3>
      <hr />
    </div>
  )
}
