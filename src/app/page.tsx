import styles from './page.module.css';
import { HomeHeader } from '@/components/common/organisms/HomeHeader';

export default function Home() {
  return (
    <main className={styles.main}>
      {/* header | icon - font - theme */}
      <HomeHeader />
      {/* search */}
      <div>
        <input type='search' name='' id='' />
      </div>
      {/* title | word | play button*/}
      <div>
        <div>
          <h1>Keyboard</h1>
          <p>/ˈkiːbɔːd/</p>
        </div>
        <button>play</button>
      </div>
      {/* word type */}
      <div>
        <b>noun</b>
        <hr />
      </div>
      {/* list of meanings */}
      <div>
        <h3>Meaning</h3>
        <ul>
          <li>
            (etc.) A set of keys used to operate a typewriter, computer etc.
          </li>
          <li>
            A component of many instruments including the piano, organ, and
            harpsichord consisting of usually black and white keys that cause
            different tones to be produced when struck.
          </li>
          <li>
            A device with keys of a musical keyboard, used to control electronic
            sound-producing devices which may be built into or separate from the
            keyboard device.
          </li>
        </ul>
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
        <h3>Meaning</h3>
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
        <a href='https://en.wiktionary.org/wiki/keyboard'>
          https://en.wiktionary.org/wiki/keyboard
        </a>
      </div>
    </main>
  );
}
