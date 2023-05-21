import { Atom } from '@/types/components'
import styles from './vertical-divider.module.css'

export function VerticalDivider(): Atom {
  return <div data-testid="vertical-divider" className={styles.container}></div>
}
