import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './partOfSpeech.module.css'

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
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
