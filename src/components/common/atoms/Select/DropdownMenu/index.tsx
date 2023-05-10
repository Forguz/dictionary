import { useRef } from 'react'
import styles from './dropdown.module.css'
import { useOutsideClickEvent } from '@/hooks/useOutsideClickEvent'

interface Props {
  listItems: string[]
  displayDropdown: boolean
  handleSelectItem: (event: React.MouseEvent<HTMLLIElement>) => void
  setDisplayDropdown: (arg: boolean) => void
}

export function DropdownMenu({
  displayDropdown,
  listItems,
  handleSelectItem,
  setDisplayDropdown,
}: Props) {
  const dropdownRef = useRef<HTMLDivElement>(null)

  useOutsideClickEvent(dropdownRef, setDisplayDropdown)

  return (
    <div
      ref={dropdownRef}
      className={`${styles.dropdownMenu} ${
        displayDropdown && styles.showDropdownMenu
      }`}
    >
      <ul className={styles.dropdownList}>
        {listItems.map((item) => {
          const fontFamily =
            item === 'Serif'
              ? styles.dropdownItemSerif
              : item === 'Mono'
              ? styles.dropdownItemMono
              : styles.dropdownItemSans

          return (
            <li
              className={`${styles.dropdownItem} ${fontFamily}`}
              onClick={handleSelectItem}
              key={item}
            >
              {item}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
