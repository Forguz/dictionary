import { MouseEvent } from 'react'
import style from './playButton.module.css'
import Image from 'next/image'
import { Atom } from '@/types/components'

interface Props {
  onClick: (evt: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void
}

export function PlayButton({ onClick }: Props): Atom {
  return (
    <button onClick={onClick} className={style.button}>
      <Image src="/play.svg" width={13} height={13} alt="play" />
    </button>
  )
}
