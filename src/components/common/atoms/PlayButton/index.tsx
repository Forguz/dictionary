import { MouseEvent } from 'react'
import Image from 'next/image'
import { Audio } from 'react-loader-spinner'
import style from './playButton.module.css'
import { Atom } from '@/types/components'

interface Props {
  onClick: (evt: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void
  isPlaying: boolean
}

export function PlayButton({ isPlaying, onClick }: Props): Atom {
  return (
    <button onClick={onClick} className={style.button}>
      {isPlaying ? (
        <Audio width={13} height={13} color="#a445ed" />
      ) : (
        <Image src="/play.svg" width={13} height={13} alt="play" />
      )}
    </button>
  )
}
