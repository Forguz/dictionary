'use client'
import React, { useState } from 'react'
import Image from 'next/image'

import styles from './select.module.css'
import { DropdownMenu } from './DropdownMenu'
import { Atom } from '@/types/components'
const listItems = ['Sans serif', 'Serif', 'Mono']

export function Select(): Atom {
  const [selectedValue, setSelectedValue] = useState<string | number>(
    listItems[0]
  )

  const [displayDropdown, setDisplayDropdown] = useState(false)

  function handleButtonClick() {
    setDisplayDropdown(!displayDropdown)
  }

  function handleSelectItem(event: React.MouseEvent<HTMLLIElement>) {
    const parsedValue = event.currentTarget.innerHTML
    setSelectedValue(parsedValue)
  }

  return (
    <div className={styles.container}>
      <button
        onTouchStart={handleButtonClick}
        onClick={handleButtonClick}
        className={styles.labelButton}
      >
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
