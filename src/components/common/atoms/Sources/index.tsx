import { Atom } from '@/types/components'
import styles from './sources.module.css'
import { OpenNewWindow } from 'iconoir-react'

interface Props {
  sources: string[]
}

export function Sources({ sources }: Props): Atom {
  return (
    <div className={styles.container}>
      <h5 className={styles.heading}>Source</h5>
      <div>
        {sources.map((source) => (
          <a className={styles.link} target="_blank" key={source} href={source}>
            {source} <OpenNewWindow width={14} height={14} />
          </a>
        ))}
      </div>
    </div>
  )
}
