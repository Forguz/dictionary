import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './partOfSpeech.module.css'
import { Atom } from '@/types/components'

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode
}

export function PartOfSpeech({ children }: Props): Atom {
  return (
    <div className={styles.container}>
      <h3>{children}</h3>
      <hr />
    </div>
  )
}
