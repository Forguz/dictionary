'use client'

import { useRef } from 'react'
import SearchInput from '@/components/common/atoms/SearchInput'
import styles from './page.module.css'
import { HomeHeader } from '@/components/common/organisms/HomeHeader'
import * as api from '@/services/api'
import { PlayButton } from '@/components/common/atoms/PlayButton'
import PartOfSpeech from '@/components/common/atoms/PartOfSpeech'
import { List } from '@/components/common/molecules/List'

export default function Home() {
  const searchRef = useRef<HTMLInputElement>(null)

  async function onSearch() {
    if (searchRef.current) {
      const searchedWord = searchRef.current.value
      const result = await api.get(searchedWord)
      console.log(result)
    } else {
      throw new Error('Internal error')
    }
  }

  function playClick() {
    console.log('Play fired')
  }

  const temporaryListItems = [
    '(etc.) A set of keys used to operate a typewriter, computer etc.',
    `A component of many instruments including the piano, organ, and
  harpsichord consisting of usually black and white keys that cause
  different tones to be produced when struck.`,
    `A device with keys of a musical keyboard, used to control electronic
  sound-producing devices which may be built into or separate from the
  keyboard device.`,
  ]

  return (
    <main className={styles.main}>
      {/* header | icon - font - theme */}
      <HomeHeader />
      {/* search */}
      <div className={styles.searchBox}>
        <SearchInput onSearch={onSearch} inputRef={searchRef} />
      </div>
      {/* title | word | play button*/}
      <div className={styles.wordBox}>
        <div>
          <h1>Keyboard</h1>
          <p className={styles.phonetic}>/ˈkiːbɔːd/</p>
        </div>
        <PlayButton onClick={playClick} />
      </div>
      {/* word type */}
      <PartOfSpeech>noun</PartOfSpeech>
      {/* list of meanings */}
      <div>
        <h4>Meaning</h4>
        <List className={styles.listItems} items={temporaryListItems} />
      </div>
      {/* Synonyms */}
      <div>
        <h4>Synonyms</h4>
        <b>eletronic keyboards</b>
      </div>
      {/* verb */}
      <div>
        <b>verb</b>
        <hr />
      </div>
      {/* meaning list */}
      <div>
        <h4>Meaning</h4>
        <ul>
          <li>
            To type on a computer keyboard.
            <span>“Keyboarding is the part of this job I hate the most.”</span>
          </li>
        </ul>
      </div>
      <hr />
      <div>
        <h3>Source</h3>
        <a href="https://en.wiktionary.org/wiki/keyboard">
          https://en.wiktionary.org/wiki/keyboard
        </a>
      </div>
    </main>
  )
}
