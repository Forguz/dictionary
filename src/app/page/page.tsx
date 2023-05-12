import styles from './page.module.css'

import { DictionaryResult } from '@/components/common/templates/DictionaryResult'
import { get } from '@/services/api'
import { isDictionaryResponse } from '@/types/dictionary'

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  console.log(searchParams)

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
      return <p>Not found</p>
    }
  }

  return <p>Insert a valid word</p>
}
