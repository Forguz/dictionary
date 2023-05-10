'use client';
import { useState } from 'react';
import Image from 'next/image';

import { Select } from '@/components/common/atoms/Select';
import { Switch } from '@/components/common/atoms/Switch';
import { VerticalDivider } from '@/components/common/atoms/VerticalDivider';

import styles from './homeHeader.module.css'

export function HomeHeader() {
  const [darkMode, setDarkMode] = useState(false);

  function handleToggleDarkMode() {
    setDarkMode(prevDarkMode => !prevDarkMode);
  }

  return (
    <div className={styles.container}>
      <div>
        <Image src='/iconoir_book.svg' width={28} height={32} alt='book icon' />
      </div>
      <Select />
      <VerticalDivider />
      <Switch isOn={darkMode} handleToggle={handleToggleDarkMode} />
      <div>
        <Image
          src='/iconoir_half-moon.svg'
          width={20}
          height={20}
          alt='dark mode'
        />
      </div>
    </div>
  );
}
