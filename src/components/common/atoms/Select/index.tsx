'use client'
import React, { MouseEvent, useState } from 'react'
import Image from 'next/image'

import { Atom } from '@/types/components'
import styles from './select.module.css'
import { DropdownMenu } from './DropdownMenu'
const listItems: dropdownValues[] = ['Sans serif', 'Serif', 'Mono']

type dropdownValues = 'Sans serif' | 'Serif' | 'Mono'

export function Select(): Atom {
  const [selectedValue, setSelectedValue] = useState<dropdownValues>(
    listItems[0]
  )

  const [displayDropdown, setDisplayDropdown] = useState(false)

  function handleButtonClick(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    setDisplayDropdown((previousValue) => !previousValue)
  }

  function returnFontByValue(fontStyle: dropdownValues) {
    if (fontStyle === 'Mono') return 'var(--font-mono)'
    if (fontStyle === 'Serif') return 'var(--font-serif)'
    return 'var(--font-sans)'
  }

  function handleSelectItem(event: React.MouseEvent<HTMLLIElement>) {
    const parsedValue = event.currentTarget.innerHTML as dropdownValues
    setSelectedValue(parsedValue)
    document.body.style.fontFamily = returnFontByValue(parsedValue)
  }

  return (
    <div className={styles.container}>
      <button onClick={handleButtonClick} className={styles.labelButton}>
        {selectedValue}
        <Image
          src="/chevron_down.svg"
          width={16}
          height={8}
          alt="Chevron Down"
        />
      </button>
      <DropdownMenu
        listItems={listItems}
        displayDropdown={displayDropdown}
        setDisplayDropdown={setDisplayDropdown}
        handleSelectItem={handleSelectItem}
      />
    </div>
  )
}
