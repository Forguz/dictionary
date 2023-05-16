import { LiHTMLAttributes } from 'react'
import style from './listItem.module.css'
import { Atom } from '@/types/components'

interface Props extends LiHTMLAttributes<HTMLLIElement> {
  definition: string
  example?: string
}

export function ListItem({ definition, example, className }: Props): Atom {
  const finalStyle = !className ? style.li : `${style.li} ${className}`

  return (
    <li className={finalStyle}>
      <p>{definition}</p>
      {example && (
        <span>
          <p>"{example}"</p>
        </span>
      )}
    </li>
  )
}
