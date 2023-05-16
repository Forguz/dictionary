import { NotFound } from '@/components/common/atoms/NotFound'
import styles from './page.module.css'

import { DictionaryResult } from '@/components/common/templates/DictionaryResult'
import { get } from '@/services/api'
import {
  DictionaryResponseError,
  isDictionaryResponse,
} from '@/types/dictionary'

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  if (searchParams.word && typeof searchParams.word === 'string') {
    const word = await get(searchParams.word)
    console.log(word)

    if (Array.isArray(word) && isDictionaryResponse(word[0])) {
      return (
        <main className={styles.main}>
          <DictionaryResult {...word[0]} />
        </main>
      )
    } else {
      return (
        <main className={styles.main}>
          <NotFound {...(word as DictionaryResponseError)} />
        </main>
      )
    }
  }
}
