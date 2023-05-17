import { Atom } from '@/types/components'
import styles from './loading.module.css'

export function Loading(): Atom {
  return (
    <div aria-label="loading-container" className={styles.container}>
      <div aria-label="loading-spinner" className={styles.loader} />
    </div>
  )
}
