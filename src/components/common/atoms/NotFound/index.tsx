import { DictionaryResponseError } from '@/types/dictionary'
import styles from './notFound.module.css'

export function NotFound({
  title,
  message,
  resolution,
}: DictionaryResponseError) {
  return (
    <div className={styles.container}>
      <span className={styles.emoji}>😕</span>
      <h3 className={styles.title}>{title}</h3>
      <p>
        {message} {resolution}
      </p>
    </div>
  )
}
