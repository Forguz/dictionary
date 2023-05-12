'use client'

import styles from './dictionaryResult.module.css'
import { DictionaryResponse } from '@/types/dictionary'
import { PlayButton } from '@/components/common/atoms/PlayButton'
import { MeaningSpeech } from '@/components/common/organisms/MeaningSpeech'
import { Sources } from '@/components/common/atoms/Sources'
import { Template } from '@/types/components'

export function DictionaryResult({
  word,
  phonetic,
  meanings,
  sourceUrls,
}: DictionaryResponse): Template {
  function playClick() {
    console.log('Pay button')
  }

  return (
    <>
      <div className={styles.wordBox}>
        <div>
          <h1>{word}</h1>
          <p className={styles.phonetic}>{phonetic}</p>
        </div>
        <PlayButton onClick={playClick} />
      </div>
      {meanings.map((meaning) => (
        <MeaningSpeech key={meaning.partOfSpeech} meaning={meaning} />
      ))}
      <hr className={styles.hr} />
      <Sources sources={sourceUrls} />
    </>
  )
}
