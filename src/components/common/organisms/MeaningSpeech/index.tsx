import { List } from '../../molecules/List'
import styles from './meaningSpeech.module.css'
import PartOfSpeech from '../../atoms/PartOfSpeech'
import { Meaning } from '@/types/dictionary'
import { Organism } from '@/types/components'
import Link from 'next/link'

interface Props {
  meaning: Meaning
}

export function MeaningSpeech({ meaning }: Props): Organism {
  return (
    <>
      <PartOfSpeech>{meaning.partOfSpeech}</PartOfSpeech>
      <h4>Meaning</h4>
      <List className={styles.listItems} items={meaning.definitions} />
      {!!meaning.synonyms.length && (
        <div className={styles.synonymsBox}>
          <h4>Synonyms</h4>
          {meaning.synonyms.map((synonym) => (
            <>
              <Link
                key={synonym}
                href={{
                  pathname: '/',
                  query: { word: synonym },
                }}
                replace
              >
                {synonym}
              </Link>
            </>
          ))}
        </div>
      )}
    </>
  )
}
