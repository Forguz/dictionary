'use client'

import { MagnifyingGlass } from 'react-loader-spinner'
import { Atom } from '@/types/components'
import styles from './loading.module.css'

interface Props {
  width: number | string
  height: number | string
}

export function Loading({ width, height }: Props): Atom {
  return (
    <div className={styles.container}>
      <MagnifyingGlass
        width={width}
        height={height}
        ariaLabel="MagnifyingGlass-loading"
        glassColor="#a445ed40"
        color="#a445ed"
      />
    </div>
  )
}
