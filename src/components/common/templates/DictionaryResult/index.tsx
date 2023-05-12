'use client'

import styles from './dictionaryResult.module.css'
import { DictionaryResponse } from '@/types/dictionary'
import { PlayButton } from '@/components/common/atoms/PlayButton'
import { MeaningSpeech } from '@/components/common/organisms/MeaningSpeech'
import { Sources } from '@/components/common/atoms/Sources'
import { Template } from '@/types/components'
import { useState } from 'react'

export function DictionaryResult({
  word,
  phonetic,
  phonetics,
  meanings,
  sourceUrls,
}: DictionaryResponse): Template {
  const [isPlaying, setIsPlaying] = useState(false)

  async function playClick() {
    setIsPlaying(true)
    if (findAudio()) {
      const phoneticAudio = new Audio(findAudio())
      phoneticAudio.onended = () => {
        setIsPlaying(false)
      }
      await phoneticAudio.play()
    } else {
      setIsPlaying(false)
    }
  }

  function findPhonetic() {
    return phonetics.find((phonetic) => phonetic.text)?.text
  }

  function findAudio() {
    return phonetics.find((phonetic) => phonetic.audio)?.audio
  }

  const phoneticName = findPhonetic() || phonetic

  return (
    <>
      <div className={styles.wordBox}>
        <div>
          <h1>{word}</h1>
          <p className={styles.phonetic}>{phoneticName}</p>
        </div>
        <PlayButton isPlaying={isPlaying} onClick={playClick} />
      </div>
      {meanings.map((meaning) => (
        <MeaningSpeech key={meaning.partOfSpeech} meaning={meaning} />
      ))}
      <hr className={styles.hr} />
      <Sources sources={sourceUrls} />
    </>
  )
}
