import { Atom } from '@/types/components'
import styles from './loading.module.css'

export function Loading(): Atom {
  return (
    <div className={styles.container}>
      <div className={styles.loader} />
    </div>
  )
}
