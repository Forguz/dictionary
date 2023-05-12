import { List } from '../../molecules/List'
import styles from './meaningSpeech.module.css'
import PartOfSpeech from '../../atoms/PartOfSpeech'

const temporaryListItems = [
  '(etc.) A set of keys used to operate a typewriter, computer etc.',
  `A component of many instruments including the piano, organ, and
harpsichord consisting of usually black and white keys that cause
different tones to be produced when struck.`,
  `A device with keys of a musical keyboard, used to control electronic
sound-producing devices which may be built into or separate from the
keyboard device.`,
]

export function MeaningSpeech() {
  return (
    <>
      <PartOfSpeech>noun</PartOfSpeech>
      {/* list of meanings */}
      <h4>Meaning</h4>
      <List className={styles.listItems} items={temporaryListItems} />
      {/* Synonyms */}
      <div>
        <h4>Synonyms</h4>
        <b>eletronic keyboards</b>
      </div>
    </>
  )
}
